/* Sylvarts Business OS — Premium Guided Demo V4 */
(function(){
  const steps=[
    {view:'dashboard',label:'Dashboard',kicker:'COMMAND CENTRE',title:'Executive Dashboard',lead:'This is where the owner gets the business picture before opening any individual module.',bullets:['See sales, gross profit, inventory units and estimated net performance together.','Management Attention surfaces low-stock variants and other issues that need action.','Recent transactions and the activity feed provide an audit-style operating snapshot.'],connect:['Sales','Inventory','Invoices','Expenses'],tryText:'Compare Sales recorded, Gross profit and Estimated net, then look at Management Attention to see what needs action.'},
    {view:'pos',label:'Point of Sale',kicker:'SELL',title:'Point of Sale',lead:'The sales workflow is fashion-specific: staff sell the exact product variant, not just a generic product.',bullets:['Search and filter the catalogue by product category.','Choose the exact size and colour before adding an item to the sale.','Select a customer, payment method and discount, then complete the sale.','Completing payment deducts that exact variant from inventory and creates a receipt.'],connect:['Customer','Inventory','Receipt','Reports'],tryText:'Tap Classic Pink Heel, choose a size/colour variant, add it to the cart and observe the customer/payment controls.'},
    {view:'inventory',label:'Inventory',kicker:'CONTROL STOCK',title:'Variant-level Inventory',lead:'Stock is controlled by size and colour, which is critical for a fashion business.',bullets:['Each product can contain multiple size and colour variants.','Every variant has its own quantity and reorder threshold.','Low-stock or out-of-stock sizes can be identified even if the product still has other sizes available.','Owner and manager workflows can edit product details and export stock data.'],connect:['POS','Purchasing','Tracking'],tryText:'Find the Pink Heel or Urban Sneaker and inspect the different stock levels for each size.'},
    {view:'customers',label:'Customers',kicker:'KNOW THE CUSTOMER',title:'Customer Intelligence',lead:'Customer records turn individual transactions into relationship and loyalty information.',bullets:['Store customer contact information and segment customers as VIP, Regular or Wholesale.','See purchase history and cumulative spend.','Attach customers to sales and invoices for better follow-up.','The same structure can later power loyalty, campaigns and personalised offers.'],connect:['POS','Invoices','Marketing'],tryText:'Open a customer profile and compare purchase history and total spend.'},
    {view:'suppliers',label:'Suppliers',kicker:'SUPPLY NETWORK',title:'Supplier Management',lead:'The supplier directory creates the upstream side of the retail operation.',bullets:['Store supplier contacts, product categories and expected lead time.','Connect suppliers to purchase orders.','Use lead times to understand how quickly low stock can be replenished.'],connect:['Purchasing','Inventory'],tryText:'Compare supplier categories and lead times to see how sourcing decisions can be organised.'},
    {view:'purchasing',label:'Purchasing',kicker:'REPLENISH',title:'Reorder & Purchasing Centre',lead:'Low stock becomes an action instead of just a warning.',bullets:['The system identifies exact variants below their reorder level.','Create purchase orders from those recommendations.','Track orders that are still inbound.','Receiving a PO automatically adds stock back to the exact product variant.'],connect:['Inventory','Suppliers','Tracking'],tryText:'Review the reorder recommendations, then inspect an Ordered PO and the receive-stock workflow.'},
    {view:'receipts',label:'Receipts',kicker:'PROOF OF SALE',title:'Receipts & Transaction History',lead:'Every completed sale creates a branded transaction record that can be reviewed or printed.',bullets:['Receipts are linked to completed POS sales.','Line items retain the exact size and colour sold.','Payment method, customer and totals remain available for review.','The print workflow can be used to save a PDF from the browser.'],connect:['POS','Customers','Reports'],tryText:'Open the latest receipt and inspect the branded document preview and line-item detail.'},
    {view:'invoices',label:'Invoices',kicker:'BILLING',title:'Invoices & Collections',lead:'Invoices support sales that are not settled immediately at the counter.',bullets:['Create customer invoices with multiple line items.','Track Draft, Pending and Paid states.','Monitor due dates and outstanding balances.','Preview, print/save PDF and mark pending invoices as paid.'],connect:['Customers','Tracking','Reports'],tryText:'Open a Pending invoice, review the due date and amount, then look for the payment-status action.'},
    {view:'expenses',label:'Expenses',kicker:'CONTROL COSTS',title:'Operating Expenses',lead:'Sales alone cannot tell management whether the business is actually performing well.',bullets:['Capture operating costs such as packaging, transport, marketing and utilities.','Record description, amount and payment method.','Expenses flow directly into management profitability calculations.'],connect:['Reports','Dashboard'],tryText:'Compare the expense categories and amounts, then later see how they reduce Estimated Net in Reports.'},
    {view:'tracking',label:'Tracking',kicker:'ACTION CENTRE',title:'Business Tracking Centre',lead:'Tracking brings together operational issues that are easy to miss when they live in separate modules.',bullets:['See variant-level stock risks that require replenishment.','Follow pending invoice collections.','Track purchase orders that are still inbound.','Use one operational view to decide what needs attention today.'],connect:['Inventory','Invoices','Purchasing'],tryText:'Scan the stock-risk, collections and inbound-stock sections and identify the most urgent item.'},
    {view:'reports',label:'Reports',kicker:'DECIDE',title:'Management Intelligence',lead:'Reports convert the day-to-day activity into a management view of the business.',bullets:['Revenue and Cost of Goods Sold produce Gross Profit.','Operating Expenses are deducted to estimate Net contribution.','Category mix and best sellers show what is actually moving.','Payment mix and inventory valuation support cash-flow and stock decisions.'],connect:['Every module'],tryText:'Follow Revenue → COGS → Gross Profit → Expenses → Estimated Net, then review best sellers and inventory valuation.'},
    {view:'settings',label:'Admin & Roles',kicker:'GOVERN',title:'Admin, Roles & Demo Controls',lead:'The final section demonstrates how the same system can look different depending on who is using it.',bullets:['Owner / Admin has complete access to finance, reports, suppliers and settings.','Manager focuses on operating the business without full administration.','Sales Staff gets a simpler POS-focused workspace.','Demo controls can reset sample data or export it for review.'],connect:['Security','Operations','Presentation'],tryText:'Use the role switcher in the top-right corner to preview Manager and Sales Staff, then return to Owner / Admin.'}
  ];

  let state={index:0,active:false,paused:false};
  const byId=id=>document.getElementById(id);
  const overlay=()=>byId('tourOverlay');
  const card=()=>byId('tourCard');

  function canUse(view){try{return typeof can==='function'?can(view):true}catch{return true}}
  function ensureOwner(){try{if(session&&session.role!=='owner'&&typeof previewRole==='function')previewRole('owner')}catch{}}
  function isLoggedIn(){const shell=byId('appShell');return shell&&!shell.classList.contains('hidden')}

  function openOverlay(){const o=overlay();if(!o)return;o.classList.remove('hidden');o.classList.add('guided-tour-overlay');}
  function closeOverlay(){const o=overlay();if(!o)return;o.classList.add('hidden');}
  function setFabVisibility(){const fab=byId('guidedDemoFab');if(fab)fab.classList.toggle('hidden',!isLoggedIn());}

  function loginAndOpenTour(){
    if(!isLoggedIn()){
      if(typeof loginAs==='function') loginAs('owner');
      setTimeout(()=>{ensureOwner();showHub();setFabVisibility();},80);
    }else{ensureOwner();showHub();}
  }

  function showHub(){
    state.active=false;state.paused=false;ensureOwner();openOverlay();
    const c=card();if(!c)return;
    c.innerHTML=`<div class="guided-tour-shell hub">
      ${headHtml('System walkthrough','Choose the full tour or jump to any section')}
      <div class="guided-tour-body">
        <div class="guided-hub-hero"><div class="guided-step-kicker">GUIDED DEMO • ABOUT 4 MINUTES</div><h2>See how the whole Sylvarts Business OS works together.</h2><p class="guided-lead">The tour automatically opens every major section and explains what it does, why it matters, and how it connects to the rest of the business. Nothing important is hidden behind a presentation slide — you are looking at the actual interactive demo.</p></div>
        <div class="guided-hub-flow">
          <div class="guided-flow-node"><b>1. SELL</b><span>POS & customers</span></div>
          <div class="guided-flow-node"><b>2. CONTROL</b><span>Variants & stock</span></div>
          <div class="guided-flow-node"><b>3. REPLENISH</b><span>Suppliers & POs</span></div>
          <div class="guided-flow-node"><b>4. TRACK</b><span>Invoices & costs</span></div>
          <div class="guided-flow-node"><b>5. DECIDE</b><span>Dashboard & reports</span></div>
        </div>
        <div class="guided-step-kicker" style="margin-bottom:9px">EXPLORE SECTION BY SECTION</div>
        <div class="guided-hub-grid">${steps.map((s,i)=>`<button class="guided-module-btn" data-guided-jump="${i}"><span class="guided-module-number">${String(i+1).padStart(2,'0')}</span><b>${s.label}</b><small>${s.lead}</small></button>`).join('')}</div>
        <div class="guided-hub-cta"><div><b>Recommended: Full system tour</b><p>We will open all 12 sections in the right order and explain the complete business flow.</p></div><button class="btn btn-primary" id="guidedHubStart">Start Full Tour →</button></div>
      </div>
      <div class="guided-tour-actions"><div class="guided-tour-actions-left"><button class="guided-pause" id="guidedHubClose">Continue without tour</button></div><div class="guided-tour-actions-right"><span style="font-size:.62rem;color:#787a8b">12 sections • interactive • restart anytime</span></div></div>
    </div>`;
    c.querySelectorAll('[data-guided-jump]').forEach(b=>b.addEventListener('click',()=>jumpTo(Number(b.dataset.guidedJump))));
    byId('guidedHubStart')?.addEventListener('click',()=>startFullTour(0));
    byId('guidedHubClose')?.addEventListener('click',endTourPremium);
    byId('guidedCloseBtn')?.addEventListener('click',endTourPremium);
  }

  function headHtml(title,sub){return `<div class="guided-tour-head"><div class="guided-tour-brand"><img src="Slyvarts-logo.png" alt=""><div><b>${title}</b><span>${sub}</span></div></div><button class="guided-close" id="guidedCloseBtn" aria-label="Close guided demo">×</button></div>`}

  function startFullTour(index=0){state.active=true;state.paused=false;state.index=Math.max(0,Math.min(steps.length-1,index));showStep();}
  function jumpTo(i){startFullTour(i)}

  function showStep(){
    const step=steps[state.index];
    if(!step){finishTour();return}
    if(!canUse(step.view)){next();return}
    ensureOwner();
    try{if(typeof navTo==='function')navTo(step.view)}catch{}
    setTimeout(()=>renderStep(step),70);
  }

  function renderStep(step){
    openOverlay();
    const c=card();if(!c)return;
    const progress=((state.index+1)/steps.length)*100;
    c.innerHTML=`<div class="guided-tour-shell">
      ${headHtml('Guided Demo','Section-by-section explanation')}
      <div class="guided-progress-wrap"><div class="guided-progress-meta"><span>SECTION ${state.index+1} OF ${steps.length}</span><span>${Math.round(progress)}% COMPLETE</span></div><div class="guided-progress-track"><span style="width:${progress}%"></span></div></div>
      <div class="guided-step-nav">${steps.map((s,i)=>`<button class="guided-step-dot ${i===state.index?'active':i<state.index?'done':''}" data-guided-jump="${i}">${i+1}. ${s.label}</button>`).join('')}</div>
      <div class="guided-tour-body">
        <div class="guided-step-kicker">${step.kicker}</div><h2>${state.index+1}. ${step.title}</h2><p class="guided-lead">${step.lead}</p>
        <div class="guided-section-card"><h4>What this section does</h4><ul class="guided-bullets">${step.bullets.map(b=>`<li>${b}</li>`).join('')}</ul></div>
        <div class="guided-section-card accent"><h4>Try this while presenting</h4><p>${step.tryText}</p></div>
        <div class="guided-section-card"><h4>How it connects</h4><div class="guided-connection">${step.connect.map((x,i)=>`<span class="guided-chip ${i===0?'accent':''}">${x}</span>`).join('')}</div></div>
      </div>
      <div class="guided-tour-actions"><div class="guided-tour-actions-left"><button class="guided-pause" id="guidedPauseBtn">Pause & explore this section</button></div><div class="guided-tour-actions-right"><button class="btn btn-secondary" id="guidedBackBtn" ${state.index===0?'disabled':''}>← Back</button><button class="btn btn-primary" id="guidedNextBtn">${state.index===steps.length-1?'Finish Tour':'Next Section →'}</button></div></div>
    </div>`;
    byId('guidedCloseBtn')?.addEventListener('click',endTourPremium);
    c.querySelectorAll('[data-guided-jump]').forEach(b=>b.addEventListener('click',()=>jumpTo(Number(b.dataset.guidedJump))));
    byId('guidedBackBtn')?.addEventListener('click',previous);
    byId('guidedNextBtn')?.addEventListener('click',next);
    byId('guidedPauseBtn')?.addEventListener('click',pauseTour);
  }

  function next(){if(state.index>=steps.length-1){finishTour();return}state.index++;showStep()}
  function previous(){if(state.index<=0)return;state.index--;showStep()}
  function pauseTour(){state.paused=true;closeOverlay();showResume();try{toast('Tour paused — explore the section, then tap Resume','good')}catch{}}
  function showResume(){let r=byId('guidedResume');if(!r){r=document.createElement('div');r.id='guidedResume';r.className='guided-resume';document.body.appendChild(r)}r.innerHTML=`<span>Guided demo paused at ${state.index+1}/${steps.length}</span><button id="guidedResumeBtn">▶ Resume</button>`;r.classList.remove('hidden');byId('guidedResumeBtn').onclick=()=>{r.classList.add('hidden');state.paused=false;showStep()}}
  function finishTour(){state.active=false;closeOverlay();byId('guidedResume')?.classList.add('hidden');openOverlay();const c=card();if(c)c.innerHTML=`<div class="guided-tour-shell"><div class="guided-tour-body" style="display:grid;place-items:center;text-align:center;min-height:70vh"><div><div class="guided-step-kicker">GUIDED DEMO COMPLETE</div><h2>You have now seen the whole system.</h2><p class="guided-lead" style="max-width:390px">The full flow connects selling, exact-variant stock control, customer records, purchasing, finance, tracking and management reporting.</p><div class="guided-section-card accent"><h4>Strong presentation story</h4><p>Sell a Size 38 item → show stock reduce → show reorder alert → create/receive a PO → show invoice/expense tracking → finish in Reports.</p></div><div style="display:flex;gap:9px;justify-content:center;flex-wrap:wrap;margin-top:16px"><button class="btn btn-primary" id="guidedRestart">Run Tour Again</button><button class="btn btn-secondary" id="guidedFinishClose">Explore System</button></div></div></div></div>`;byId('guidedRestart')?.addEventListener('click',showHub);byId('guidedFinishClose')?.addEventListener('click',endTourPremium)}
  function endTourPremium(){state.active=false;state.paused=false;closeOverlay();byId('guidedResume')?.classList.add('hidden')}

  function injectLoginCTA(){const grid=document.querySelector('.demo-role-grid');if(!grid||byId('guidedLoginBtn'))return;const block=document.createElement('div');block.className='guided-login-block';block.innerHTML=`<div class="guided-login-label"><strong>First time seeing the system?</strong><span>Best demo experience</span></div><button class="guided-login-btn" id="guidedLoginBtn"><div><b>Take the Guided Demo</b><small>Automatically explore all 12 sections with explanations</small></div><span class="guided-login-play">▶</span></button>`;grid.insertAdjacentElement('afterend',block);byId('guidedLoginBtn').addEventListener('click',loginAndOpenTour)}
  function injectFab(){if(byId('guidedDemoFab'))return;const b=document.createElement('button');b.id='guidedDemoFab';b.className='guided-fab hidden';b.innerHTML=`<span class="guided-fab-icon">▶</span><span class="guided-fab-text"><b>Guided Demo</b><span>Tour all 12 sections</span></span>`;document.body.appendChild(b);b.addEventListener('click',showHub)}
  function injectDashboardBanner(){const content=byId('content');if(!content||!isLoggedIn())return;let isDash=false;try{isDash=currentView==='dashboard'}catch{}if(!isDash)return;if(content.querySelector('.guided-dashboard-banner'))return;const el=document.createElement('div');el.className='guided-dashboard-banner guided-highlight-pulse';el.innerHTML=`<div class="guided-banner-copy"><span class="guided-banner-icon">▶</span><div><b>New to Sylvarts Business OS? Let us show you everything.</b><p>Tap Guided Demo for a section-by-section walkthrough of all 12 modules and how they connect.</p></div></div><div class="guided-banner-actions"><button class="btn btn-primary" id="guidedBannerStart">Start Guided Demo</button><button class="btn btn-secondary" id="guidedBannerSections">Explore Sections</button></div>`;content.prepend(el);byId('guidedBannerStart').addEventListener('click',()=>startFullTour(0));byId('guidedBannerSections').addEventListener('click',showHub)}
  function watchApp(){const shell=byId('appShell'),content=byId('content');if(shell)new MutationObserver(()=>{setFabVisibility();setTimeout(injectDashboardBanner,20)}).observe(shell,{attributes:true,attributeFilter:['class']});if(content)new MutationObserver(()=>setTimeout(injectDashboardBanner,20)).observe(content,{childList:true});setFabVisibility();setTimeout(injectDashboardBanner,40)}

  document.addEventListener('DOMContentLoaded',()=>{
    injectLoginCTA();injectFab();watchApp();
    const originalTourBtn=byId('tourBtn');if(originalTourBtn){originalTourBtn.textContent='▶ Guided Demo — tour all 12 sections';originalTourBtn.onclick=showHub}
    const o=overlay();if(o)o.classList.add('guided-tour-overlay');
    window.startTour=showHub;window.showGuidedDemo=showHub;window.guidedNextTour=next;window.guidedPreviousTour=previous;window.endTour=endTourPremium;
  });
})();
