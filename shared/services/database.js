// ============================================
// Rekaz - Database Service
// Using Cloudinary for file uploads
// ============================================

import {
  db,
  doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs,
  serverTimestamp, addDoc, deleteDoc, onSnapshot
} from './firebase-config.js';

// Cloudinary Configuration
const CLOUDINARY_CLOUD_NAME = 'rekaz-manager';
const CLOUDINARY_UPLOAD_PRESET = 'finora_logos';

export const DatabaseService = {

  // ========================
  // COMPANY OPERATIONS
  // ========================

  async createCompany(userId, userEmail, companyData) {
    try {
      const companyRef = doc(collection(db, 'companies'));
      const companyId = companyRef.id;

      // Upload logo to Cloudinary in parallel with company creation
      const logoPromise = companyData.logoFile
        ? this.uploadToCloudinary(companyData.logoFile, companyId)
        : Promise.resolve('');

      // Step 1: Create company doc first (security rules need this)
      const logoURL = await logoPromise;
      await setDoc(companyRef, {
        name: companyData.companyName,
        logo: logoURL,
        phone: companyData.phone,
        country: companyData.country || '',
        companyNumber: companyData.companyNumber,
        taxNumber: companyData.taxNumber || '',
        subscriptionPlan: 'free',
        createdAt: serverTimestamp(),
        ownerId: userId
      });

      // Step 2: All remaining writes in parallel
      await Promise.all([
        setDoc(doc(db, 'companies', companyId, 'settings', 'general'), {
          themeColor: '#6C5CE7',
          accentColor: '#00CEC9',
          language: 'ar'
        }),
        setDoc(doc(db, 'companies', companyId, 'users', userId), {
          name: companyData.userName || userEmail.split('@')[0],
          email: userEmail,
          role: 'admin'
        }),
        setDoc(doc(db, 'users', userId), {
          email: userEmail,
          companyId: companyId,
          role: 'admin',
          createdAt: serverTimestamp()
        })
      ]);

      return { companyId, error: null };
    } catch (error) {
      console.error('Create company error:', error);
      return { companyId: null, error: error.message };
    }
  },

  async getCompany(companyId) {
    try {
      const snap = await getDoc(doc(db, 'companies', companyId));
      if (snap.exists()) return { id: snap.id, ...snap.data() };
      return null;
    } catch (error) {
      console.error('Get company error:', error);
      return null;
    }
  },

  async updateCompany(companyId, data) {
    try {
      await updateDoc(doc(db, 'companies', companyId), data);
      return { error: null };
    } catch (error) {
      return { error: error.message };
    }
  },

  // ========================
  // USER OPERATIONS
  // ========================

  async getUser(userId) {
    try {
      const snap = await getDoc(doc(db, 'users', userId));
      if (snap.exists()) return { id: snap.id, ...snap.data() };
      return null;
    } catch (error) {
      return null;
    }
  },

  async getCompanyUsers(companyId) {
    try {
      const snap = await getDocs(collection(db, 'companies', companyId, 'users'));
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch (error) {
      return [];
    }
  },

  async addCompanyUser(companyId, userData) {
    try {
      const userRef = doc(collection(db, 'companies', companyId, 'users'));
      await setDoc(userRef, {
        name: userData.name,
        email: userData.email,
        role: userData.role || 'staff'
      });
      return { id: userRef.id, error: null };
    } catch (error) {
      return { id: null, error: error.message };
    }
  },

  async removeCompanyUser(companyId, userId) {
    try {
      await deleteDoc(doc(db, 'companies', companyId, 'users', userId));
      return { error: null };
    } catch (error) {
      return { error: error.message };
    }
  },

  // ========================
  // SETTINGS OPERATIONS
  // ========================

  async getSettings(companyId) {
    try {
      const snap = await getDoc(doc(db, 'companies', companyId, 'settings', 'general'));
      if (snap.exists()) return snap.data();
      return { themeColor: '#6C5CE7', accentColor: '#00CEC9', language: 'en' };
    } catch (error) {
      return { themeColor: '#6C5CE7', accentColor: '#00CEC9', language: 'en' };
    }
  },

  async updateSettings(companyId, settings) {
    try {
      await setDoc(doc(db, 'companies', companyId, 'settings', 'general'), settings, { merge: true });
      return { error: null };
    } catch (error) {
      return { error: error.message };
    }
  },

  // ========================
  // FINANCE OPERATIONS
  // ========================

  async addTransaction(companyId, transactionData) {
    try {
      const txRef = await addDoc(collection(db, 'companies', companyId, 'finances'), {
        ...transactionData,
        createdAt: serverTimestamp()
      });
      return { id: txRef.id, error: null };
    } catch (error) {
      return { id: null, error: error.message };
    }
  },

  async getTransactions(companyId, type = null) {
    try {
      let q;
      if (type) {
        q = query(collection(db, 'companies', companyId, 'finances'), where('type', '==', type));
      } else {
        q = collection(db, 'companies', companyId, 'finances');
      }
      const snap = await getDocs(q);
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } catch (error) {
      return [];
    }
  },

  async deleteTransaction(companyId, transactionId) {
    try {
      await deleteDoc(doc(db, 'companies', companyId, 'finances', transactionId));
      return { error: null };
    } catch (error) {
      return { error: error.message };
    }
  },

  onTransactionsChange(companyId, callback) {
    return onSnapshot(collection(db, 'companies', companyId, 'finances'), (snapshot) => {
      const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      callback(data);
    });
  },

  // ========================
  // CLOUDINARY FILE UPLOAD
  // ========================

  async uploadToCloudinary(file, folder = 'general') {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
      formData.append('folder', `rekaz/${folder}`);

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData
        }
      );

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error('Cloudinary upload error:', error);
      return '';
    }
  }
};
