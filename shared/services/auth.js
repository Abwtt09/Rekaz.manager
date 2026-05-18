// ============================================
// Rekaz - Authentication Service
// ============================================

import {
  auth, db, googleProvider,
  signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword,
  signOut, onAuthStateChanged,
  doc, getDoc, setDoc, serverTimestamp
} from './firebase-config.js';

export const AuthService = {

  // Listen to auth state changes
  onAuthChange(callback) {
    return onAuthStateChanged(auth, callback);
  },

  // Google Sign-In
  async signInWithGoogle() {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const isNew = await this.checkIfNewUser(user.uid);
      return { user, isNewUser: isNew, error: null };
    } catch (error) {
      console.error('Google sign-in error:', error);
      return { user: null, isNewUser: false, error: error.message };
    }
  },

  // Email & Password Sign-Up
  async signUpWithEmail(email, password) {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return { user: result.user, error: null };
    } catch (error) {
      console.error('Email sign-up error:', error);
      return { user: null, error: error.message };
    }
  },

  // Email & Password Sign-In
  async signInWithEmail(email, password) {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const isNew = await this.checkIfNewUser(result.user.uid);
      return { user: result.user, isNewUser: isNew, error: null };
    } catch (error) {
      console.error('Email sign-in error:', error);
      return { user: null, isNewUser: false, error: error.message };
    }
  },

  // Sign Out
  async logout() {
    try {
      await signOut(auth);
      return { error: null };
    } catch (error) {
      return { error: error.message };
    }
  },

  // Check if user exists in Firestore (profile completed)
  async checkIfNewUser(uid) {
    try {
      const userDoc = await getDoc(doc(db, 'users', uid));
      if (!userDoc.exists()) return true;
      const data = userDoc.data();
      return !data.companyId || data.companyId === '';
    } catch (error) {
      console.error('Check new user error:', error);
      return true;
    }
  },

  // Check if user profile is complete
  async isProfileComplete(uid) {
    try {
      const userDoc = await getDoc(doc(db, 'users', uid));
      if (!userDoc.exists()) return false;
      const data = userDoc.data();
      return data.companyId && data.companyId !== '';
    } catch (error) {
      return false;
    }
  },

  // Get current user
  getCurrentUser() {
    return auth.currentUser;
  },

  // Get user profile from Firestore
  async getUserProfile(uid) {
    try {
      const userDoc = await getDoc(doc(db, 'users', uid));
      if (userDoc.exists()) return userDoc.data();
      return null;
    } catch (error) {
      console.error('Get user profile error:', error);
      return null;
    }
  }
};
