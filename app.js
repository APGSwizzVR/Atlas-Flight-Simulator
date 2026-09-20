window.addEventListener('scroll',()=>document.getElementById('nav')?.classList.toggle('scrolled',scrollY>30),{passive:true});
document.getElementById('year').textContent=new Date().getFullYear();

const fleet=[
["Boeing 707-320","Boeing","https://cdn.jetphotos.com/full/6/47263_1589949560.jpg","https://www.jetphotos.com/photo/9724211"],
["Boeing 737-200","Boeing","https://cdn.jetphotos.com/full/6/47263_1589949560.jpg","https://www.jetphotos.com/aircraft/Boeing%20737-200"],
["Boeing 737-800","Boeing","https://cdn.jetphotos.com/full/6/47263_1589949560.jpg","https://www.jetphotos.com/aircraft/Boeing%20737-800"],
["Boeing 737 MAX 8","Boeing","https://cdn.jetphotos.com/full/6/47263_1589949560.jpg","https://www.jetphotos.com/aircraft/Boeing%20737%20MAX%208"],
["Boeing 747-8","Boeing","https://cdn.jetphotos.com/full/6/47263_1589949560.jpg","https://www.jetphotos.com/aircraft/Boeing%20747-8"],
["Boeing 757-200","Boeing","https://cdn.jetphotos.com/full/6/47263_1589949560.jpg","https://www.jetphotos.com/aircraft/Boeing%20757-200"],
["Boeing 767-300ER","Boeing","https://cdn.jetphotos.com/full/6/47263_1589949560.jpg","https://www.jetphotos.com/aircraft/Boeing%20767-300ER"],
["Boeing 777-300ER","Boeing","https://cdn.jetphotos.com/full/6/47263_1589949560.jpg","https://www.jetphotos.com/aircraft/Boeing%20777-300ER"],
["Boeing 787-8","Boeing","https://cdn.jetphotos.com/full/6/47263_1589949560.jpg","https://www.jetphotos.com/aircraft/Boeing%20787-8"],
["Boeing 787-10","Boeing","https://cdn.jetphotos.com/full/5/20252_1535549415.jpg","https://www.jetphotos.com/photo/10963949"],
["Airbus A319-100","Airbus","https://cdn.jetphotos.com/full/5/20252_1535549415.jpg","https://www.jetphotos.com/aircraft/Airbus%20A319"],
["Airbus A320-200","Airbus","https://cdn.jetphotos.com/full/5/20252_1535549415.jpg","https://www.jetphotos.com/photo/9059984"],
["Airbus A321-200","Airbus","https://cdn.jetphotos.com/full/5/20252_1535549415.jpg","https://www.jetphotos.com/aircraft/Airbus%20A321"],
["Airbus A330-300","Airbus","https://cdn.jetphotos.com/full/5/20252_1535549415.jpg","https://www.jetphotos.com/photo/10976218"],
["Airbus A330-900neo","Airbus","https://cdn.jetphotos.com/full/5/20252_1535549415.jpg","https://www.jetphotos.com/aircraft/Airbus%20A330-900"],
["Airbus A340-600","Airbus","https://cdn.jetphotos.com/full/5/20252_1535549415.jpg","https://www.jetphotos.com/photo/10714798"],
["Airbus A350-900","Airbus","https://cdn.jetphotos.com/full/5/20252_1535549415.jpg","https://www.jetphotos.com/photo/9281092"],
["Airbus A350-1000","Airbus","https://cdn.jetphotos.com/full/5/20252_1535549415.jpg","https://www.jetphotos.com/aircraft/Airbus%20A350-1000"],
["Airbus A380-800","Airbus","https://cdn.jetphotos.com/full/5/20252_1535549415.jpg","https://www.jetphotos.com/photo/10968667"],
["Embraer E170","Embraer","https://cdn.jetphotos.com/full/5/20252_1535549415.jpg","https://www.jetphotos.com/aircraft/Embraer%20E170"],
["Embraer E175","Embraer","https://cdn.jetphotos.com/full/5/20252_1535549415.jpg","https://www.jetphotos.com/aircraft/Embraer%20E175"],
["Embraer E190","Embraer","https://cdn.jetphotos.com/full/5/20252_1535549415.jpg","https://www.jetphotos.com/aircraft/Embraer%20E190"],
["Embraer E195","Embraer","https://cdn.jetphotos.com/full/5/20252_1535549415.jpg","https://www.jetphotos.com/aircraft/Embraer%20E195"],
["Cessna 152","Cessna","https://cdn.jetphotos.com/full/6/10858284_1675808895.jpg","https://www.jetphotos.com/photo/11982630"],
["Cessna 172 Skyhawk","Cessna","https://cdn.jetphotos.com/full/6/10858284_1675808895.jpg","https://www.jetphotos.com/photo/10858284"],
["Diamond DA20","Diamond","https://cdn.jetphotos.com/full/6/12063008_1770387181.jpg","https://www.jetphotos.com/photo/12063008"],
["Diamond DA40","Diamond","https://cdn.jetphotos.com/full/6/12063008_1770387181.jpg","https://www.jetphotos.com/aircraft/Diamond%20DA40"],
["Diamond DA42","Diamond","https://cdn.jetphotos.com/full/6/11946729_1754851025.jpg","https://www.jetphotos.com/photo/11946729"]
];

const list=document.getElementById('fleetList'),img=document.getElementById('fleetImg'),name=document.getElementById('fleetName'),family=document.getElementById('fleetFamily'),jet=document.getElementById('jetLink');
function render(filter='All'){
 if(!list)return;
 list.innerHTML='';
 fleet.filter(a=>filter==='All'||a[1]===filter).forEach((a,i)=>{
  const r=document.createElement('div');
  r.className='fleet-row'+(i===0?' active':'');
  r.innerHTML='<span>'+String(i+1).padStart(2,'0')+'</span><b>'+a[0]+'</b><em>'+a[1].toUpperCase()+'</em>';
  r.onclick=()=>{document.querySelectorAll('.fleet-row').forEach(x=>x.classList.remove('active'));r.classList.add('active');img.style.opacity=0;setTimeout(()=>{img.src=a[2];name.textContent=a[0];family.textContent=a[1].toUpperCase();jet.href=a[3];img.style.opacity=1},140)};
  list.appendChild(r);
 });
}
render();
document.querySelectorAll('.fleet-controls button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.fleet-controls button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');render(b.dataset.family)});

const cfg=window.ATLAS_CONFIG||{},links={discord:cfg.DISCORD_URL,youtube:cfg.YOUTUBE_URL,tiktok:cfg.TIKTOK_URL,instagram:cfg.INSTAGRAM_URL,x:cfg.X_URL,coffee:cfg.COFFEE_URL};
document.querySelectorAll('[data-link]').forEach(a=>a.onclick=e=>{const u=links[a.dataset.link];if(u){a.href=u;a.target='_blank'}else{e.preventDefault();document.getElementById('modal')?.classList.add('show')}});
document.getElementById('close')?.addEventListener('click',()=>document.getElementById('modal').classList.remove('show'));
document.getElementById('modal')?.addEventListener('click',e=>{if(e.target.id==='modal')e.currentTarget.classList.remove('show')});

function countdown(){
 const end=new Date('2027-06-10T00:00:00+01:00').getTime(),now=Date.now(),d=Math.max(0,end-now);
 const days=Math.floor(d/86400000),hours=Math.floor(d%86400000/3600000),mins=Math.floor(d%3600000/60000),secs=Math.floor(d%60000/1000);
 [['countDays',days],['countHours',hours],['countMinutes',mins],['countSeconds',secs]].forEach(([id,v])=>{const el=document.getElementById(id);if(el)el.textContent=String(v).padStart(2,'0')});
}
countdown();setInterval(countdown,1000);

const cockpit=document.querySelector('.cockpit');
if(cockpit){
 const launch=document.createElement('section');
 launch.className='launch-countdown';
 launch.id='systems';
 launch.innerHTML=`<div class="launch-inner">
 <div class="launch-kicker">ATLAS FS · LAUNCH DATE</div>
 <div class="launch-grid">
  <div><h2>The next flight<br><i>departs 10 June 2027.</i></h2><p>Atlas FS is being built for people who care about the aircraft, the route and the feeling of actually flying. The simulator is coming to Roblox.</p><a class="green-button" href="#fleet">Explore the fleet <b>→</b></a></div>
  <div class="count-panel">
   <div class="count-label">COUNTDOWN TO LAUNCH</div>
   <div class="countdown"><div><strong id="countDays">00</strong><span>DAYS</span></div><div><strong id="countHours">00</strong><span>HOURS</span></div><div><strong id="countMinutes">00</strong><span>MINUTES</span></div><div><strong id="countSeconds">00</strong><span>SECONDS</span></div></div>
   <div class="route-strip"><span>DUB</span><b>ATLAS FS</b><span>WORLDWIDE</span></div>
  </div>
 </div></div>`;
 cockpit.replaceWith(launch);
}
