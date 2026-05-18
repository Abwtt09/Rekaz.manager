const PDFGenerator = {
  _c(co) { return { m: '#8B6D5C', s: '#C2A27E' }; },
  _f(n) { return Number(n||0).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}); },
  _cs(code,ar) { const m={SAR:'ر.س',OMR:'ر.ع.',AED:'د.إ',KWD:'د.ك',USD:'$',BHD:'د.ب',QAR:'ر.ق',EGP:'ج.م'}; return ar?(m[code]||code):code; },
  _ff() { return "'Segoe UI',Tahoma,Arial,sans-serif"; },

  async getCompanyBranding(cid) {
    try { const d=await db.collection('companies').doc(cid).get(); return d.exists?d.data():{}; } catch(e) { return {}; }
  },

  generateInvoicePDF(inv,co,lang) {
    const c=this._c(co),ar=lang==='ar',dir=ar?'rtl':'ltr',f=this._f,curr=this._cs(co.currency,ar);
    const items=(inv.items||[]).map((it,i)=>'<tr><td style="text-align:center;padding:10px;border-bottom:1px solid #e8e0d8;">'+(i+1)+'</td><td style="padding:10px;border-bottom:1px solid #e8e0d8;">'+(it.description||'')+'</td><td style="text-align:center;padding:10px;border-bottom:1px solid #e8e0d8;">'+(it.qty||0)+'</td><td style="text-align:center;padding:10px;border-bottom:1px solid #e8e0d8;">'+f(it.price)+'</td><td style="text-align:center;padding:10px;border-bottom:1px solid #e8e0d8;">'+f((it.qty||0)*(it.price||0))+'</td></tr>').join('');
    return '<div dir="'+dir+'" style="font-family:'+this._ff()+';max-width:800px;margin:0 auto;padding:30px;color:#3a3028;font-size:13px;"><div style="display:flex;justify-content:space-between;border-bottom:3px solid '+c.m+';padding-bottom:20px;margin-bottom:20px;"><div>'+(co.logo?'<img src="'+co.logo+'" style="max-height:70px;" crossorigin="anonymous"/>':'')+'<h2 style="color:'+c.m+';margin:8px 0;">'+(co.companyName||co.nameAr||'')+'</h2></div><div style="text-align:'+(ar?'left':'right')+';"><h1 style="color:'+c.m+';font-size:22px;">'+(ar?'فاتورة':'INVOICE')+'</h1><p style="margin:6px 0;"><strong>'+(ar?'رقم:':'#:')+'</strong> '+inv.number+'</p><p><strong>'+(ar?'التاريخ:':'Date:')+'</strong> '+inv.date+'</p></div></div><table style="width:100%;border-collapse:collapse;margin:20px 0;"><thead><tr style="background:'+c.m+';color:#fff;"><th style="padding:10px;">#</th><th style="padding:10px;text-align:'+(ar?'right':'left')+'">'+(ar?'الوصف':'Desc')+'</th><th style="padding:10px;">'+(ar?'الكمية':'Qty')+'</th><th style="padding:10px;">'+(ar?'السعر':'Price')+'</th><th style="padding:10px;">'+(ar?'الإجمالي':'Total')+'</th></tr></thead><tbody>'+items+'</tbody></table><div style="display:flex;justify-content:flex-end;"><table style="width:280px;"><tr><td style="padding:6px;">'+(ar?'المجموع':'Subtotal')+'</td><td style="text-align:'+(ar?'left':'right')+';padding:6px;">'+f(inv.subtotal)+' '+curr+'</td></tr>'+(inv.taxAmount?'<tr><td style="padding:6px;">'+(ar?'الضريبة':'Tax')+'</td><td style="text-align:'+(ar?'left':'right')+';padding:6px;">'+f(inv.taxAmount)+' '+curr+'</td></tr>':'')+'<tr style="font-weight:bold;border-top:2px solid '+c.m+';"><td style="padding:10px 6px;">'+(ar?'الإجمالي':'Total')+'</td><td style="text-align:'+(ar?'left':'right')+';padding:10px 6px;color:'+c.m+';">'+f(inv.grandTotal)+' '+curr+'</td></tr></table></div>'+(co.signature||co.stamp?'<div style="display:flex;justify-content:space-between;margin-top:40px;padding-top:20px;border-top:1px solid #ddd;"><div style="text-align:center;">'+(co.signature?'<img src="'+co.signature+'" style="max-height:50px;" crossorigin="anonymous"/>':'<div style="height:50px;"></div>')+'<p style="border-top:1px solid #999;padding-top:4px;">'+(ar?'التوقيع':'Signature')+'</p></div>'+(co.stamp?'<div><img src="'+co.stamp+'" style="max-height:60px;opacity:0.8;" crossorigin="anonymous"/></div>':'')+'</div>':'')+'</div>';
  },

  generateReceiptPDF(r,co,lang) {
    const c=this._c(co),ar=lang==='ar',dir=ar?'rtl':'ltr',f=this._f,curr=this._cs(co.currency,ar);
    return '<div dir="'+dir+'" style="font-family:'+this._ff()+';max-width:700px;margin:0 auto;padding:30px;color:#3a3028;font-size:13px;"><div style="text-align:center;border-bottom:3px solid '+c.m+';padding-bottom:20px;margin-bottom:20px;">'+(co.logo?'<img src="'+co.logo+'" style="max-height:60px;" crossorigin="anonymous"/>':'')+'<h2 style="color:'+c.m+';margin:8px 0;">'+(co.companyName||'')+'</h2><h1 style="color:'+c.m+';font-size:20px;margin-top:12px;">'+(ar?'سند قبض':'RECEIPT')+'</h1></div><table style="width:100%;border-collapse:collapse;"><tr style="background:#f5f0eb;"><td style="padding:12px;font-weight:bold;">'+(ar?'الرقم':'#')+'</td><td style="padding:12px;">'+r.number+'</td></tr><tr><td style="padding:12px;font-weight:bold;">'+(ar?'التاريخ':'Date')+'</td><td style="padding:12px;">'+r.date+'</td></tr><tr style="background:#f5f0eb;"><td style="padding:12px;font-weight:bold;">'+(ar?'من':'From')+'</td><td style="padding:12px;">'+(r.receivedFrom||'')+'</td></tr><tr><td style="padding:12px;font-weight:bold;">'+(ar?'المبلغ':'Amount')+'</td><td style="padding:12px;font-weight:bold;font-size:16px;color:'+c.m+';">'+f(r.amount)+' '+curr+'</td></tr><tr style="background:#f5f0eb;"><td style="padding:12px;font-weight:bold;">'+(ar?'عن':'For')+'</td><td style="padding:12px;">'+(r.purpose||'')+'</td></tr></table></div>';
  },

  generatePaymentPDF(p,co,lang) {
    const c=this._c(co),ar=lang==='ar',dir=ar?'rtl':'ltr',f=this._f,curr=this._cs(co.currency,ar);
    return '<div dir="'+dir+'" style="font-family:'+this._ff()+';max-width:700px;margin:0 auto;padding:30px;color:#3a3028;font-size:13px;"><div style="text-align:center;border-bottom:3px solid '+c.m+';padding-bottom:20px;margin-bottom:20px;">'+(co.logo?'<img src="'+co.logo+'" style="max-height:60px;" crossorigin="anonymous"/>':'')+'<h2 style="color:'+c.m+';margin:8px 0;">'+(co.companyName||'')+'</h2><h1 style="color:'+c.m+';font-size:20px;margin-top:12px;">'+(ar?'سند صرف':'PAYMENT')+'</h1></div><table style="width:100%;border-collapse:collapse;"><tr style="background:#f5f0eb;"><td style="padding:12px;font-weight:bold;">'+(ar?'الرقم':'#')+'</td><td style="padding:12px;">'+p.number+'</td></tr><tr><td style="padding:12px;font-weight:bold;">'+(ar?'التاريخ':'Date')+'</td><td style="padding:12px;">'+p.date+'</td></tr><tr style="background:#f5f0eb;"><td style="padding:12px;font-weight:bold;">'+(ar?'إلى':'To')+'</td><td style="padding:12px;">'+(p.paidTo||'')+'</td></tr><tr><td style="padding:12px;font-weight:bold;">'+(ar?'المبلغ':'Amount')+'</td><td style="padding:12px;font-weight:bold;font-size:16px;color:'+c.m+';">'+f(p.amount)+' '+curr+'</td></tr><tr style="background:#f5f0eb;"><td style="padding:12px;font-weight:bold;">'+(ar?'عن':'For')+'</td><td style="padding:12px;">'+(p.purpose||'')+'</td></tr></table></div>';
  },

  generateQuotationPDF(q,co,lang) {
    const c=this._c(co),ar=lang==='ar',dir=ar?'rtl':'ltr',f=this._f,curr=this._cs(co.currency,ar);
    const items=(q.items||[]).map((it,i)=>'<tr><td style="text-align:center;padding:10px;border-bottom:1px solid #e8e0d8;">'+(i+1)+'</td><td style="padding:10px;border-bottom:1px solid #e8e0d8;">'+(it.description||'')+'</td><td style="text-align:center;padding:10px;border-bottom:1px solid #e8e0d8;">'+(it.qty||0)+'</td><td style="text-align:center;padding:10px;border-bottom:1px solid #e8e0d8;">'+f(it.price)+'</td><td style="text-align:center;padding:10px;border-bottom:1px solid #e8e0d8;">'+f((it.qty||0)*(it.price||0))+'</td></tr>').join('');
    return '<div dir="'+dir+'" style="font-family:'+this._ff()+';max-width:800px;margin:0 auto;padding:30px;color:#3a3028;font-size:13px;"><div style="display:flex;justify-content:space-between;border-bottom:3px solid '+c.s+';padding-bottom:20px;margin-bottom:20px;"><div>'+(co.logo?'<img src="'+co.logo+'" style="max-height:70px;" crossorigin="anonymous"/>':'')+'<h2 style="color:'+c.m+';margin:8px 0;">'+(co.companyName||'')+'</h2></div><div style="text-align:'+(ar?'left':'right')+';"><h1 style="color:'+c.s+';font-size:22px;">'+(ar?'عرض سعر':'QUOTATION')+'</h1><p style="margin:6px 0;"><strong>'+(ar?'رقم:':'#:')+'</strong> '+q.number+'</p><p><strong>'+(ar?'التاريخ:':'Date:')+'</strong> '+q.date+'</p></div></div><table style="width:100%;border-collapse:collapse;margin:20px 0;"><thead><tr style="background:'+c.s+';color:#fff;"><th style="padding:10px;">#</th><th style="padding:10px;text-align:'+(ar?'right':'left')+'">'+(ar?'الوصف':'Desc')+'</th><th style="padding:10px;">'+(ar?'الكمية':'Qty')+'</th><th style="padding:10px;">'+(ar?'السعر':'Price')+'</th><th style="padding:10px;">'+(ar?'الإجمالي':'Total')+'</th></tr></thead><tbody>'+items+'</tbody></table><div style="display:flex;justify-content:flex-end;"><table style="width:280px;"><tr><td style="padding:6px;">'+(ar?'المجموع':'Subtotal')+'</td><td style="text-align:'+(ar?'left':'right')+';padding:6px;">'+f(q.subtotal)+' '+curr+'</td></tr>'+(q.taxAmount?'<tr><td style="padding:6px;">'+(ar?'الضريبة':'Tax')+'</td><td style="text-align:'+(ar?'left':'right')+';padding:6px;">'+f(q.taxAmount)+' '+curr+'</td></tr>':'')+'<tr style="font-weight:bold;border-top:2px solid '+c.s+';"><td style="padding:10px 6px;">'+(ar?'الإجمالي':'Total')+'</td><td style="text-align:'+(ar?'left':'right')+';padding:10px 6px;color:'+c.m+';">'+f(q.grandTotal)+' '+curr+'</td></tr></table></div></div>';
  },

  async exportToPDF(htmlContent, filename) {
    const c = document.createElement('div');
    c.style.cssText = 'position:absolute;left:0;top:0;width:800px;background:#fff;z-index:99999;';
    c.innerHTML = htmlContent;
    document.body.appendChild(c);

    // Wait for images
    const imgs = c.querySelectorAll('img');
    await Promise.all(Array.from(imgs).map(img => new Promise(r => { if(img.complete) r(); else { img.onload=r; img.onerror=r; setTimeout(r,2000); } })));
    await new Promise(r => setTimeout(r, 300));

    try {
      if (typeof html2pdf !== 'undefined') {
        await html2pdf().set({
          margin: [10,8,10,8],
          filename: filename,
          image: { type:'jpeg', quality:0.95 },
          html2canvas: { scale:2, useCORS:true, allowTaint:true, logging:false, width:800, windowWidth:800, backgroundColor:'#ffffff' },
          jsPDF: { unit:'mm', format:'a4', orientation:'portrait' },
          pagebreak: { mode:['avoid-all','css','legacy'] }
        }).from(c).save();
      } else {
        const w=window.open('','_blank');
        w.document.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+filename+'</title></head><body style="margin:0;">'+htmlContent+'</body></html>');
        w.document.close(); setTimeout(()=>w.print(),500);
      }
    } finally { document.body.removeChild(c); }
  }
};
window.PDFGenerator = PDFGenerator;
