/* Sylvarts Business OS — Bag-focused demo catalogue V5 */
(function(){
  const MIGRATION_KEY='sylvarts_catalog_profile_v5_bags';

  const products=[
    {id:1,sku:'SFC-HB-101',name:'Structured Handbag',category:'Handbags',emoji:'👜',cost:82000,price:155000,variants:[
      {id:'1a',size:'Medium',color:'Black',stock:5,reorder:3},{id:'1b',size:'Medium',color:'Wine',stock:2,reorder:3},{id:'1c',size:'Medium',color:'Cream',stock:4,reorder:2},{id:'1d',size:'Medium',color:'Tan',stock:3,reorder:2}
    ]},
    {id:2,sku:'SFC-TB-102',name:'Signature Tote Bag',category:'Tote Bags',emoji:'🛍️',cost:70000,price:135000,variants:[
      {id:'2a',size:'Large',color:'Black',stock:6,reorder:3},{id:'2b',size:'Large',color:'Tan',stock:4,reorder:2},{id:'2c',size:'Large',color:'Brown',stock:2,reorder:3},{id:'2d',size:'Large',color:'Cream',stock:5,reorder:2},{id:'2e',size:'Large',color:'Pink',stock:3,reorder:2}
    ]},
    {id:3,sku:'SFC-CB-103',name:'Mini Crossbody Bag',category:'Crossbody Bags',emoji:'🎒',cost:54000,price:110000,variants:[
      {id:'3a',size:'Mini',color:'Pink',stock:5,reorder:2},{id:'3b',size:'Mini',color:'Black',stock:6,reorder:3},{id:'3c',size:'Mini',color:'Cream',stock:3,reorder:2},{id:'3d',size:'Mini',color:'Purple',stock:1,reorder:2}
    ]},
    {id:4,sku:'SFC-SB-104',name:'Luxe Shoulder Bag',category:'Shoulder Bags',emoji:'👜',cost:90000,price:175000,variants:[
      {id:'4a',size:'Medium',color:'Black',stock:4,reorder:2},{id:'4b',size:'Medium',color:'Burgundy',stock:2,reorder:2},{id:'4c',size:'Medium',color:'Nude',stock:3,reorder:2},{id:'4d',size:'Medium',color:'White',stock:2,reorder:2}
    ]},
    {id:5,sku:'SFC-CL-105',name:'Evening Clutch',category:'Clutches',emoji:'👝',cost:42000,price:89000,variants:[
      {id:'5a',size:'Small',color:'Black',stock:6,reorder:2},{id:'5b',size:'Small',color:'Gold',stock:4,reorder:2},{id:'5c',size:'Small',color:'Silver',stock:3,reorder:2},{id:'5d',size:'Small',color:'Wine',stock:2,reorder:2}
    ]},
    {id:6,sku:'SFC-BK-106',name:'Everyday Bucket Bag',category:'Bucket Bags',emoji:'👜',cost:63000,price:125000,variants:[
      {id:'6a',size:'Medium',color:'Tan',stock:4,reorder:2},{id:'6b',size:'Medium',color:'Black',stock:5,reorder:3},{id:'6c',size:'Medium',color:'Olive',stock:2,reorder:2},{id:'6d',size:'Medium',color:'Cream',stock:3,reorder:2}
    ]},
    {id:7,sku:'SFC-WB-107',name:'Executive Laptop Bag',category:'Work Bags',emoji:'💼',cost:98000,price:190000,variants:[
      {id:'7a',size:'15 inch',color:'Black',stock:4,reorder:2},{id:'7b',size:'15 inch',color:'Brown',stock:2,reorder:2},{id:'7c',size:'15 inch',color:'Navy',stock:3,reorder:2}
    ]},
    {id:8,sku:'SFC-TR-108',name:'Travel Duffel Bag',category:'Travel Bags',emoji:'🧳',cost:120000,price:235000,variants:[
      {id:'8a',size:'Large',color:'Black',stock:3,reorder:2},{id:'8b',size:'Large',color:'Brown',stock:2,reorder:2},{id:'8c',size:'Large',color:'Grey',stock:1,reorder:2}
    ]},
    {id:9,sku:'SFC-BP-109',name:'Backpack Purse',category:'Backpacks',emoji:'🎒',cost:65000,price:128000,variants:[
      {id:'9a',size:'Medium',color:'Black',stock:5,reorder:2},{id:'9b',size:'Medium',color:'Pink',stock:3,reorder:2},{id:'9c',size:'Medium',color:'Cream',stock:4,reorder:2},{id:'9d',size:'Medium',color:'Purple',stock:2,reorder:2}
    ]},
    {id:10,sku:'SFC-HL-201',name:'Classic Pink Heel',category:'Heels',emoji:'👠',cost:65000,price:120000,variants:[
      {id:'10a',size:'37',color:'Pink',stock:2,reorder:1},{id:'10b',size:'38',color:'Pink',stock:3,reorder:1},{id:'10c',size:'39',color:'Black',stock:2,reorder:1},{id:'10d',size:'40',color:'Black',stock:1,reorder:1}
    ]},
    {id:11,sku:'SFC-HL-202',name:'Crystal Strap Heel',category:'Heels',emoji:'👠',cost:76000,price:145000,variants:[
      {id:'11a',size:'37',color:'Silver',stock:2,reorder:1},{id:'11b',size:'38',color:'Silver',stock:2,reorder:1},{id:'11c',size:'39',color:'Black',stock:2,reorder:1},{id:'11d',size:'40',color:'Black',stock:1,reorder:1}
    ]},
    {id:12,sku:'SFC-WT-301',name:'Classic Fashion Watch',category:'Watches',emoji:'⌚',cost:58000,price:118000,variants:[
      {id:'12a',size:'One size',color:'Gold',stock:5,reorder:2},{id:'12b',size:'One size',color:'Silver',stock:4,reorder:2},{id:'12c',size:'One size',color:'Black',stock:3,reorder:2},{id:'12d',size:'One size',color:'Rose Gold',stock:2,reorder:2}
    ]}
  ];

  const sales=[
    {id:'S-1054',receipt:'RCT-1054',date:'2026-08-21T10:14:00',customerId:1,customer:'Amina N.',method:'Mobile Money',discount:0,items:[{productId:3,variantId:'3a',name:'Mini Crossbody Bag',variant:'Mini • Pink',qty:1,price:110000,cost:54000}],total:110000},
    {id:'S-1053',receipt:'RCT-1053',date:'2026-08-21T09:42:00',customerId:null,customer:'Walk-in Customer',method:'Cash',discount:5000,items:[{productId:1,variantId:'1a',name:'Structured Handbag',variant:'Medium • Black',qty:1,price:155000,cost:82000}],total:150000},
    {id:'S-1052',receipt:'RCT-1052',date:'2026-08-20T17:18:00',customerId:2,customer:'Sharon K.',method:'Mobile Money',discount:0,items:[{productId:2,variantId:'2d',name:'Signature Tote Bag',variant:'Large • Cream',qty:1,price:135000,cost:70000},{productId:5,variantId:'5b',name:'Evening Clutch',variant:'Small • Gold',qty:1,price:89000,cost:42000}],total:224000},
    {id:'S-1051',receipt:'RCT-1051',date:'2026-08-20T14:07:00',customerId:null,customer:'Walk-in Customer',method:'Card',discount:0,items:[{productId:4,variantId:'4b',name:'Luxe Shoulder Bag',variant:'Medium • Burgundy',qty:1,price:175000,cost:90000}],total:175000},
    {id:'S-1050',receipt:'RCT-1050',date:'2026-08-20T11:25:00',customerId:null,customer:'Walk-in Customer',method:'Cash',discount:0,items:[{productId:12,variantId:'12a',name:'Classic Fashion Watch',variant:'One size • Gold',qty:1,price:118000,cost:58000}],total:118000},
    {id:'S-1049',receipt:'RCT-1049',date:'2026-08-19T16:35:00',customerId:null,customer:'Walk-in Customer',method:'Mobile Money',discount:0,items:[{productId:10,variantId:'10b',name:'Classic Pink Heel',variant:'38 • Pink',qty:1,price:120000,cost:65000}],total:120000}
  ];

  const invoices=[
    {id:'INV-2026-021',date:'2026-08-21',customerId:3,customer:'Kampala Style Hub',due:'2026-08-28',status:'Pending',items:[{description:'Structured Handbags • Mixed colours',qty:4,price:150000},{description:'Mini Crossbody Bags • Mixed colours',qty:4,price:105000}],amount:1020000},
    {id:'INV-2026-020',date:'2026-08-20',customerId:4,customer:'Mirembe Boutique',due:'2026-08-27',status:'Pending',items:[{description:'Signature Tote Bags • Black / Tan / Cream',qty:6,price:130000}],amount:780000},
    {id:'INV-2026-019',date:'2026-08-18',customerId:null,customer:'Private Client',due:'2026-08-25',status:'Paid',items:[{description:'Luxe Shoulder Bag • Black',qty:1,price:175000},{description:'Classic Fashion Watch • Gold',qty:1,price:118000}],amount:293000}
  ];

  const suppliers=[
    {id:1,name:'Kampala Bag & Accessories Supply',contact:'Sarah N.',phone:'+256 755 108 300',email:'orders@kbag.demo',lead:5,categories:'Handbags, Tote Bags, Crossbody Bags, Clutches'},
    {id:2,name:'East Africa Leather & Travel',contact:'Moses K.',phone:'+256 701 640 227',email:'trade@ealt.demo',lead:7,categories:'Work Bags, Travel Bags, Backpacks, Bucket Bags'},
    {id:3,name:'Style Footwear & Watches',contact:'Ruth A.',phone:'+256 772 913 021',email:'supply@stylefw.demo',lead:8,categories:'Heels, Watches'}
  ];

  const purchaseOrders=[
    {id:'PO-2026-015',supplierId:1,supplier:'Kampala Bag & Accessories Supply',date:'2026-08-21',status:'Ordered',eta:'2026-08-26',items:[{productId:3,variantId:'3d',description:'Mini Crossbody Bag • Purple',qty:8,cost:54000},{productId:1,variantId:'1b',description:'Structured Handbag • Wine',qty:6,cost:82000}],total:924000},
    {id:'PO-2026-014',supplierId:2,supplier:'East Africa Leather & Travel',date:'2026-08-20',status:'Ordered',eta:'2026-08-27',items:[{productId:8,variantId:'8c',description:'Travel Duffel Bag • Grey',qty:5,cost:120000}],total:600000},
    {id:'PO-2026-013',supplierId:1,supplier:'Kampala Bag & Accessories Supply',date:'2026-08-16',status:'Received',eta:'2026-08-21',items:[{productId:2,variantId:'2c',description:'Signature Tote Bag • Brown',qty:6,cost:70000}],total:420000}
  ];

  const activity=[
    {type:'sale',title:'Mini Crossbody Bag sold',detail:'Pink • Mobile Money • RCT-1054',time:'Today, 10:14'},
    {type:'stock',title:'Purple Crossbody reached reorder level',detail:'1 unit remaining • reorder at 2',time:'Today, 10:14'},
    {type:'invoice',title:'Wholesale bag invoice created',detail:'Kampala Style Hub • UGX 1,020,000',time:'Today, 09:05'},
    {type:'purchase',title:'Bag restock PO sent',detail:'Purple Crossbody + Wine Structured Handbag',time:'Today, 08:40'},
    {type:'sale',title:'Structured Handbag sold',detail:'Black • Cash • RCT-1053',time:'Today, 09:42'}
  ];

  function apply(target){
    if(!target)return;
    target.products=JSON.parse(JSON.stringify(products));
    target.sales=JSON.parse(JSON.stringify(sales));
    target.invoices=JSON.parse(JSON.stringify(invoices));
    target.suppliers=JSON.parse(JSON.stringify(suppliers));
    target.purchaseOrders=JSON.parse(JSON.stringify(purchaseOrders));
    target.activity=JSON.parse(JSON.stringify(activity));
    target.daily=[210000,285000,265000,350000,410000,465000,520000,490000,620000,575000,730000,897000];
  }

  try{ if(typeof seed!=='undefined') apply(seed); }catch(e){ console.warn('Sylvarts seed migration skipped',e); }

  try{
    const already=localStorage.getItem(MIGRATION_KEY);
    if(typeof db!=='undefined' && !already){
      apply(db);
      if(typeof saveDb==='function') saveDb();
      localStorage.setItem(MIGRATION_KEY,'2026-08-21-bag-focus');
    }
  }catch(e){ console.warn('Sylvarts bag catalogue migration skipped',e); }

  const colorMap={
    Black:'#17171b',Wine:'#74233d',Cream:'#eee4cf',Tan:'#b78155',Brown:'#72503b',Pink:'#e779ad',Purple:'#6f42a8',Burgundy:'#702637',Nude:'#d6ae97',White:'#f7f7f5',Gold:'#c7a048',Silver:'#aeb4bd',Olive:'#73764c',Navy:'#263653',Grey:'#8e9299','Rose Gold':'#c99086'
  };

  function swatches(p){
    const colors=[...new Set((p.variants||[]).map(v=>v.color))];
    return `<div class="bag-swatches" aria-label="Available colours">${colors.slice(0,5).map(c=>`<span class="bag-swatch" title="${c}" style="--bag-swatch:${colorMap[c]||'#b48ac4'}"></span>`).join('')}${colors.length>5?`<small>+${colors.length-5}</small>`:''}</div>`;
  }

  try{
    if(typeof posProductCard==='function'){
      posProductCard=function(p){
        const s=typeof totalStock==='function'?totalStock(p):(p.variants||[]).reduce((a,v)=>a+v.stock,0);
        return `<button class="pos-product bag-pos-product" onclick="openVariantPicker(${p.id})"><div class="product-visual">${p.emoji}</div><b>${typeof escapeHtml==='function'?escapeHtml(p.name):p.name}</b><small>${p.category} • ${s} units</small>${swatches(p)}<strong>${typeof money==='function'?money(p.price):p.price}</strong></button>`;
      };
    }
  }catch(e){ console.warn('Sylvarts POS card enhancement skipped',e); }

  window.addEventListener('DOMContentLoaded',()=>{
    try{
      if(typeof session!=='undefined' && session && typeof render==='function') render();
    }catch(e){ console.warn('Sylvarts bag catalogue render refresh skipped',e); }
  });
})();
