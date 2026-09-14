const scenarios = {
  neymar: {
    title:"What if Neymar never left Barcelona?",
    category:"Football", year:"2017", certainty:"PLAUSIBLE",
    intro:"In this thought experiment, Neymar rejects the move to Paris and remains at Barcelona. The key question is not whether Barcelona would have won everything, but how one unchanged transfer decision could reshape an entire competitive landscape.",
    fact:"In reality, Neymar left Barcelona for Paris Saint-Germain in 2017 after four seasons at the Catalan club. This scenario changes only that decision: he stays.",
    turning:"The branch begins in summer 2017. Instead of accepting a new challenge in Paris, Neymar chooses continuity in Barcelona. That keeps an elite attacking partnership intact and changes the club’s options in the seasons that follow.",
    timeline:[
      ["2017","FACT","Neymar remains at Barcelona. The alternative timeline begins."],
      ["2018","PLAUSIBLE","Barcelona build around a deeper attacking core, while recruitment and tactical priorities shift."],
      ["2020","POSSIBLE","The club enters a different transfer cycle because fewer resources and minutes are spent replacing lost attacking output."],
      ["2023","SPECULATIVE","The long-term balance of European football looks different, with multiple clubs responding to a changed superstar market."]
    ],
    ripples:[
      ["Barcelona","A stable attacking core could change recruitment, tactical planning and squad succession."],
      ["PSG","Paris must pursue a different superstar path, potentially accelerating another transfer strategy."],
      ["Football market","One major transfer not happening could alter the timing and price of later moves."]
    ]
  },
  mbappe: {
    title:"What if Mbappé stayed at PSG?",
    category:"Football", year:"2022", certainty:"POSSIBLE",
    intro:"Imagine Mbappé chooses to remain in Paris at a moment when his future could have redirected the balance of European football. The interesting question is how long-term squad building changes when the central superstar stays put.",
    fact:"The real-world timeline is anchored around Mbappé’s major career decision in the early 2020s. Here, the hypothetical simply keeps him in Paris rather than changing clubs.",
    turning:"The turning point is a contract and sporting decision: Mbappé commits to the PSG project for longer, giving the club a clearer centerpiece around which to build.",
    timeline:[
      ["2022","FACT","Mbappé remains the central figure in Paris in this alternate branch."],
      ["2024","PLAUSIBLE","PSG prioritize a squad structure designed around his strengths and long-term leadership."],
      ["2027","POSSIBLE","Different transfer targets become attractive because the club no longer needs to plan around replacing him."],
      ["2030","SPECULATIVE","The knock-on effects reach other elite clubs whose recruitment plans depended on the superstar market moving differently."]
    ],
    ripples:[
      ["PSG","A longer-term sporting identity could emerge around one consistent attacking reference point."],
      ["Real Madrid","A different succession plan would be needed for their forward line."],
      ["Transfer market","The timing of several major transfers could shift rather than disappear entirely."]
    ]
  },
  space: {
    title:"What if the space race never ended?",
    category:"History", year:"1969", certainty:"POSSIBLE",
    intro:"The Moon landing did not end humanity’s curiosity about space, but it changed the political urgency behind the race. What happens if that urgency remains high for another generation?",
    fact:"The Apollo 11 Moon landing in 1969 is a fixed historical anchor. The scenario changes the political and funding environment that followed.",
    turning:"Instead of a rapid reduction in lunar ambitions, the United States and Soviet Union continue treating space exploration as a central strategic competition.",
    timeline:[
      ["1969","FACT","Apollo 11 reaches the Moon and demonstrates that crewed lunar exploration is possible."],
      ["1975","PLAUSIBLE","Sustained competition produces more frequent lunar missions and stronger investment in launch infrastructure."],
      ["1985","POSSIBLE","Permanent or semi-permanent lunar research becomes a more credible political goal."],
      ["2000","SPECULATIVE","Space infrastructure, international alliances and private-sector participation may develop decades earlier."]
    ],
    ripples:[
      ["Technology","Long-term funding could accelerate advances in materials, computing and communications."],
      ["Politics","Space becomes a continuous arena of prestige and strategic competition."],
      ["Society","A larger generation of scientists and engineers may grow up expecting human activity beyond Earth."]
    ]
  },
  smartphone: {
    title:"What if smartphones arrived 10 years earlier?",
    category:"Technology", year:"1997", certainty:"SPECULATIVE",
    intro:"Move the smartphone era back by a decade and everyday life changes before broadband, app stores and social networks have matured. This is a highly uncertain branch because the technology ecosystem depends on many interlocking inventions.",
    fact:"Modern smartphones emerged from multiple technological developments rather than one single invention. This scenario compresses those developments into an earlier consumer-ready device.",
    turning:"The key change is that a capable touchscreen-connected phone reaches mass consumers around 1997 rather than the late 2000s.",
    timeline:[
      ["1997","SPECULATIVE","Early connected smartphones become commercially viable for a much wider audience."],
      ["2001","POSSIBLE","Mobile-first services emerge before social media has reached its real-world scale."],
      ["2005","POSSIBLE","Businesses redesign around mobile communication, navigation and portable computing earlier."],
      ["2010","HIGHLY SPECULATIVE","Education, advertising, entertainment and privacy norms could look radically different."]
    ],
    ripples:[
      ["Internet","The mobile web could become the default web much earlier."],
      ["Business","Entire startup categories might appear years ahead of their real timeline."],
      ["Culture","Social behavior and expectations around constant connectivity could evolve sooner."]
    ]
  },
  ronaldo: {
    title:"What if Arsenal signed Cristiano Ronaldo?",
    category:"Football", year:"2003", certainty:"PLAUSIBLE",
    intro:"Before Cristiano Ronaldo became the global superstar known today, Arsenal were among the clubs connected to his early career. This scenario asks what could happen if the final decision had gone another way.",
    fact:"Ronaldo moved from Sporting CP to Manchester United in 2003. This branch places him at Arsenal instead.",
    turning:"The critical change happens during the 2003 transfer window. Ronaldo joins Arsenal, entering a different tactical environment and developing alongside a different generation of players.",
    timeline:[
      ["2003","FACT","Ronaldo leaves Sporting CP for England. In this branch, the destination is Arsenal."],
      ["2005","PLAUSIBLE","His development is shaped by Arsenal’s coaching, teammates and tactical preferences."],
      ["2008","POSSIBLE","Arsenal’s attack and trophy trajectory may look different, while United build around another route to replace the missing star."],
      ["2012","SPECULATIVE","A different club identity, transfer market and rivalry landscape emerges across England and Europe."]
    ],
    ripples:[
      ["Arsenal","A world-class forward arriving early could alter recruitment and the club’s attacking evolution."],
      ["Manchester United","The club must find a different path to the superstar era that followed."],
      ["Premier League","The balance between England’s major clubs could shift for an entire generation."]
    ]
  }
};

const $ = s => document.querySelector(s);
function themeInit(){
  const saved=localStorage.getItem("whatif-theme");
  if(saved==="dark") document.body.classList.add("dark");
  const btn=$("#themeBtn");
  if(btn) btn.onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("whatif-theme",document.body.classList.contains("dark")?"dark":"light");};
}
function navInit(){
  const btn=$("#menuBtn"); const nav=document.querySelector("nav");
  if(btn) btn.onclick=()=>nav.classList.toggle("open");
}
function esc(v){return v.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
function scenarioCard(id,s,active){
  return `<button class="scenario-item ${active?"selected":""}" data-id="${id}">
    <span class="scenario-dot"></span><span class="scenario-main"><b>${esc(s.title)}</b><small>${esc(s.category)} · ${esc(s.year)}</small></span><span class="certainty ${s.certainty.toLowerCase()}">${esc(s.certainty)}</span>
  </button>`;
}
function preview(id){
  const s=scenarios[id];
  $("#preview").innerHTML=`<div class="preview-top"><span class="certainty ${s.certainty.toLowerCase()}">${s.certainty}</span><span>${s.category} · ${s.year}</span></div>
  <h3>${esc(s.title)}</h3><p class="lead">${esc(s.intro)}</p>
  <div class="preview-timeline">
    <div><span>REALITY</span><b>${esc(s.fact)}</b></div>
    <div class="preview-branch"><span>TURNING POINT</span><b>${esc(s.turning)}</b></div>
    <div><span>ALTERNATIVE</span><b>${esc(s.timeline[1][2])}</b></div>
  </div>
  <a class="read-link" href="scenario.html?id=${id}">Read full timeline →</a>`;
}
function initExplore(){
  const list=$("#scenarioList"); if(!list)return;
  const ids=Object.keys(scenarios);
  list.innerHTML=ids.map((id,i)=>scenarioCard(id,scenarios[id],i===0)).join("");
  preview(ids[0]);
  list.querySelectorAll(".scenario-item").forEach(btn=>btn.onclick=()=>{
    list.querySelectorAll(".scenario-item").forEach(x=>x.classList.remove("selected"));
    btn.classList.add("selected"); preview(btn.dataset.id);
  });
}
function renderScenarioPage(){
  const root=$("#scenarioPage"); if(!root)return;
  const id=new URLSearchParams(location.search).get("id") || "neymar";
  const s=scenarios[id] || scenarios.neymar;
  document.title=`WHAT IF — ${s.title}`;
  root.innerHTML=`
  <section class="scenario-hero">
    <div class="scenario-hero-inner">
      <a class="back-link" href="index.html#explore">← Back to What Ifs</a>
      <div class="scenario-meta"><span>${s.category}</span><span>·</span><span>${s.year}</span><span class="certainty ${s.certainty.toLowerCase()}">${s.certainty}</span></div>
      <h1>${esc(s.title)}</h1><p class="scenario-intro">${esc(s.intro)}</p>
      <div class="reader-actions"><button class="btn primary" id="saveBtn">☆ Save scenario</button><button class="btn secondary" onclick="navigator.clipboard?.writeText(location.href)">Share link</button></div>
    </div>
  </section>
  <div class="reading-layout">
    <aside class="reading-nav">
      <span>ON THIS PAGE</span>
      <a href="#fact">01 · The real world</a><a href="#turning">02 · The turning point</a><a href="#timeline">03 · Alternative timeline</a><a href="#ripples">04 · Ripple effects</a><a href="#uncertainty">05 · How certain is this?</a>
    </aside>
    <article class="long-reader">
      <section id="fact" class="read-section fact-section"><div class="section-number">01</div><p class="eyebrow">FACT</p><h2>The real world</h2><p>${esc(s.fact)}</p><div class="fact-box"><b>Important:</b> This section describes the anchor event. The branch starts only after the turning point below.</div></section>
      <section id="turning" class="read-section turning-section"><div class="section-number">02</div><p class="eyebrow">TURNING POINT</p><h2>The moment that changes everything</h2><p>${esc(s.turning)}</p><div class="branch-callout"><span>REALITY</span><strong>Actual timeline</strong><i>→</i><span>WHAT IF</span><strong>Alternative branch</strong></div></section>
      <section id="timeline" class="read-section"><div class="section-number">03</div><p class="eyebrow">ALTERNATIVE TIMELINE</p><h2>Follow the branch</h2><p>Read from left to right in time. Labels show how strongly the claim can be supported: fact is anchored, while the later stages become increasingly uncertain.</p><div class="vertical-timeline">${s.timeline.map((t,i)=>`<div class="timeline-event"><div class="timeline-marker">${i+1}</div><div><div class="event-head"><b>${esc(t[0])}</b><span class="certainty ${t[1].toLowerCase().replaceAll(" ","-")}">${esc(t[1])}</span></div><p>${esc(t[2])}</p></div></div>`).join("")}</div></section>
      <section id="ripples" class="read-section"><div class="section-number">04</div><p class="eyebrow">RIPPLE EFFECTS</p><h2>If one thing changes, what else moves?</h2><div class="ripple-grid">${s.ripples.map(r=>`<div class="ripple-card"><h3>${esc(r[0])}</h3><p>${esc(r[1])}</p></div>`).join("")}</div></section>
      <section id="uncertainty" class="read-section uncertainty-section"><div class="section-number">05</div><p class="eyebrow">UNCERTAINTY</p><h2>How seriously should you take this?</h2><p>This is an educational thought experiment, not a prediction. The farther the timeline moves from the documented turning point, the more assumptions stack up.</p><div class="scale"><div class="scale-row"><span>FACT</span><div></div><b>Known</b></div><div class="scale-row"><span>PLAUSIBLE</span><div></div><b>Reasonable path</b></div><div class="scale-row"><span>POSSIBLE</span><div></div><b>Many outcomes</b></div><div class="scale-row"><span>SPECULATIVE</span><div></div><b>High uncertainty</b></div></div></section>
      <section class="sources-note"><p class="eyebrow">SOURCES & METHOD</p><h2>Keep the line clear.</h2><p>In the production version, this area should list the primary sources used for the FACT layer, explain assumptions behind the branch, and identify which claims are expert analysis versus community speculation.</p></section>
    </article>
  </div>
  <section class="continue"><p class="eyebrow">CONTINUE EXPLORING</p><h2>Another branch is waiting.</h2><div class="continue-grid">${Object.entries(scenarios).filter(([k])=>k!==id).slice(0,3).map(([k,v])=>`<a class="continue-card" href="scenario.html?id=${k}"><span>${v.category} · ${v.year}</span><h3>${esc(v.title)}</h3><b>Read scenario →</b></a>`).join("")}</div></section>`;
  const save=$("#saveBtn"); save.onclick=()=>{save.textContent=save.textContent.includes("Saved")?"☆ Save scenario":"✓ Saved"; save.classList.toggle("saved");};
}
themeInit(); navInit(); initExplore(); renderScenarioPage();