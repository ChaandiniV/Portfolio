import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, ArrowRight, Menu, X, Sparkles, Github, Linkedin, Mail, ExternalLink, Command, MoveUpRight, CircleDot, Layers, ScanEye } from 'lucide-react';

type Project = { id:string; number:string; title:string; category:string; year:string; description:string; role:string; stack:string[]; note:string; };
const projects: Project[] = [
 {id:'gravilog',number:'01',title:'GraviLog',category:'AI / RAG SYSTEMS',year:'2025—26',description:'An LLM and retrieval-augmented generation project developed during an internship. The case study will document the problem, architecture, decisions and my verified contribution.',role:'Internship project · details to be completed',stack:['Python','LLMs','RAG','Vector search'],note:'A technical case study with architecture, retrieval flow and implementation decisions.'},
 {id:'pregnancyguardian',number:'02',title:'PregnancyGuardian',category:'HEALTH TECHNOLOGY',year:'2025',description:'A health-focused application concept. The portfolio will explain the user need, product thinking and the parts I personally designed or implemented.',role:'Project · contribution details to be completed',stack:['Application development','Product thinking'],note:'A product story focused on user needs and responsible technology.'},
 {id:'pericare',number:'03',title:'PeriCare',category:'SOFTWARE / HEALTH',year:'2025',description:'A project developed between July and August 2025. More detail will be added after reviewing the original project materials.',role:'Project · contribution details to be completed',stack:['Software development'],note:'A concise build log with screenshots and an honest account of scope.'},
 {id:'agents',number:'04',title:'AI Agent Experiments',category:'GENAI / AGENTS',year:'2026',description:'Explorations involving Google ADK, Gemini, Cloud Run and BigQuery MCP. Individual experiments will be separated into clear, verifiable case studies.',role:'Independent learning and experimentation',stack:['Google ADK','Gemini','Cloud Run','BigQuery MCP'],note:'A laboratory notebook for experiments, tools and lessons learned.'}
];
const nav = [{label:'Work',href:'#work'},{label:'Journey',href:'#journey'},{label:'About',href:'#about'},{label:'Contact',href:'#contact'}];
function Magnetic({children}:{children:React.ReactNode}) { return <span className="magnetic">{children}</span>; }
function ProjectModal({project,onClose}:{project:Project|null,onClose:()=>void}) {
 useEffect(()=>{ if(!project)return; const fn=(e:KeyboardEvent)=>e.key==='Escape'&&onClose(); window.addEventListener('keydown',fn); document.body.style.overflow='hidden'; return()=>{window.removeEventListener('keydown',fn);document.body.style.overflow=''};},[project,onClose]);
 return <AnimatePresence>{project&&<motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={e=>e.target===e.currentTarget&&onClose()}>
  <motion.article className="project-modal" initial={{y:35,opacity:0,scale:.98}} animate={{y:0,opacity:1,scale:1}} exit={{y:25,opacity:0}} transition={{duration:.35}}>
   <button className="close-btn" onClick={onClose} aria-label="Close project"><X/></button>
   <div className="eyebrow">CASE STUDY / {project.number} — {project.category}</div>
   <div className="modal-top"><h2>{project.title}</h2><span>{project.year}</span></div>
   <p className="modal-lede">{project.description}</p>
   <div className="case-grid"><div><div className="eyebrow">MY ROLE</div><p>{project.role}</p></div><div><div className="eyebrow">TECHNOLOGY / METHODS</div><div className="tag-list">{project.stack.map(s=><span className="tag" key={s}>{s}</span>)}</div></div></div>
   <div className="case-note"><Sparkles size={18}/><p>{project.note}</p></div>
   <p className="small-muted">This is an initial portfolio entry. Replace this placeholder with verified project details, screenshots, links and outcomes before publishing.</p>
  </motion.article>
 </motion.div>}</AnimatePresence>;
}
export default function App(){
 const [active,setActive]=useState('ALL'); const [selected,setSelected]=useState<Project|null>(null); const [menu,setMenu]=useState(false); const [cursor,setCursor]=useState({x:0,y:0}); const [clock,setClock]=useState('');
 const categories=['ALL','AI / RAG','SOFTWARE','EXPERIMENTS'];
 const filtered=useMemo(()=>projects.filter(p=>active==='ALL'||(active==='AI / RAG'?p.category.includes('AI')||p.category.includes('RAG'):active==='SOFTWARE'?p.category.includes('SOFTWARE')||p.category.includes('HEALTH'):p.category.includes('AGENTS'))),[active]);
 useEffect(()=>{const move=(e:MouseEvent)=>setCursor({x:e.clientX,y:e.clientY});window.addEventListener('mousemove',move);const tick=()=>setClock(new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Dubai',hour:'2-digit',minute:'2-digit'}).format(new Date()));tick();const id=window.setInterval(tick,30000);return()=>{window.removeEventListener('mousemove',move);clearInterval(id)}},[]);
 const scrollTo=(href:string)=>{setMenu(false);document.querySelector(href)?.scrollIntoView({behavior:'smooth'});};
 return <div className="site-shell">
  <div className="grain"/>
  <div className="cursor-glow" style={{transform:`translate(${cursor.x-170}px,${cursor.y-170}px)`}}/>
  <header className="topbar"><a className="brand" href="#top" aria-label="Back to top">CV<span>.</span></a><div className="top-meta"><span>INDEPENDENT THINKER / BUILDER</span><span className="live-dot"/> <span>{clock} GST</span></div>
   <nav className="desktop-nav">{nav.map(n=><a key={n.label} href={n.href}>{n.label}</a>)}</nav>
   <button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">{menu?<X/>:<Menu/>}</button>
  </header>
  <AnimatePresence>{menu&&<motion.nav className="mobile-menu" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}}>{nav.map(n=><a key={n.label} href={n.href} onClick={()=>setMenu(false)}>{n.label}<ArrowUpRight/></a>)}</motion.nav>}</AnimatePresence>
  <main id="top">
   <section className="hero section-pad">
    <div className="hero-kicker"><span className="eyebrow">A PERSONAL DIGITAL EXHIBITION</span><span className="hero-index">UAE · INDIA / OPEN TO IDEAS</span></div>
    <div className="hero-title-wrap"><motion.h1 initial={{y:45,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.8,ease:[.2,.7,.2,1]}}>Curiosity has<br/><em>no fixed</em> direction<span className="period">.</span></motion.h1>
     <motion.div className="orbit-art" initial={{scale:.75,opacity:0,rotate:-22}} animate={{scale:1,opacity:1,rotate:0}} transition={{duration:1.1,delay:.2}}><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit-core"><span>IDEAS</span><span>IN MOTION</span></div><div className="orbit-stamp">THINK<br/> / MAKE<br/> / REPEAT</div></motion.div>
    </div>
    <div className="hero-bottom"><p className="hero-intro">I explore the space between <b>technology, analytical thinking and business</b> — turning questions into experiments and ideas into practical work.</p><a className="round-link" href="#work" aria-label="Explore selected work"><ArrowDownRight/></a><div className="hero-side-note">SCROLL TO<br/>EXPLORE THE<br/>COLLECTION</div></div>
    <div className="hero-marquee"><div className="marquee-track"><span>TECHNOLOGY</span><i>✳</i><span>IDEAS</span><i>✳</i><span>EXPERIMENTATION</span><i>✳</i><span>BUSINESS</span><i>✳</i><span>TECHNOLOGY</span><i>✳</i><span>IDEAS</span><i>✳</i></div></div>
   </section>
   <section className="manifesto section-pad" id="about"><div className="section-label"><span>01 / THE POINT OF VIEW</span><span>ABOUT</span></div><div className="manifesto-grid"><h2>Not defined by<br/>one discipline<span>.</span></h2><div className="manifesto-copy"><p className="big-copy">I’m interested in how things work, why they matter, and what happens when different fields meet.</p><p>My background is in computer science. My interests reach into AI, product thinking, data and business. Outside the technical work, I’ve explored leadership, volunteering and creative pursuits.</p><p className="small-muted">This introduction is a working draft. It will become more personal as we add your own words and specific stories.</p><a className="text-link" href="#journey">A little more about the journey <ArrowUpRight size={16}/></a></div></div></section>
   <section className="work section-pad" id="work"><div className="section-label"><span>02 / SELECTED EXPLORATIONS</span><span>THE WORK INDEX</span></div><div className="work-heading"><h2>Ideas, made<br/><em>tangible.</em></h2><p>A growing collection of projects and experiments. Open a piece to explore its current case-study outline.</p></div>
    <div className="filters" role="group" aria-label="Filter projects">{categories.map(c=><button key={c} className={active===c?'filter active':'filter'} onClick={()=>setActive(c)}>{c}</button>)}</div>
    <div className="project-grid">{filtered.map((p,i)=><motion.button layout key={p.id} className={`project-card card-${i%4}`} onClick={()=>setSelected(p)} whileHover={{y:-7}}><div className="project-visual"><span className="project-number">{p.number} / 04</span><div className={`visual-shape shape-${i%4}`}><span>{p.number}</span></div><span className="open-icon"><ArrowUpRight/></span></div><div className="project-meta"><span>{p.category}</span><span>{p.year}</span></div><div className="project-title-row"><h3>{p.title}</h3><ArrowUpRight size={19}/></div><p>{p.description}</p></motion.button>)}</div>
    <div className="work-foot"><span>MORE EXPERIMENTS IN PROGRESS</span><span>SELECT A PROJECT TO OPEN ↗</span></div>
   </section>
   <section className="journey section-pad" id="journey"><div className="section-label"><span>03 / THE EVOLUTION</span><span>JOURNEY</span></div><div className="journey-head"><h2>A work<br/><em>in progress.</em></h2><p>Milestones that have shaped the way I think, build and collaborate.</p></div>
    <div className="timeline">
     {[['01','COMPUTER SCIENCE','B.Tech · IIITDM Kancheepuram','A foundation in computing, systems and problem-solving.'],['02','BUILDING & EXPLORING','Projects and internships','Moving from learning concepts to applying them through projects and practical experiences.'],['03','LEADERSHIP & COMMUNITY','Mars Rover · Vidhai · Campus activities','Experiences in student teams, volunteering and coordinating creative activities.'],['04','WHAT COMES NEXT','Technology × Business','Continuing to explore the intersection of technology, analytical thinking and business.']].map((item,i)=><div className="timeline-item" key={item[0]}><span className="timeline-num">{item[0]}</span><div className="timeline-line"><i/></div><div className="timeline-content"><div className="eyebrow">{item[1]}</div><h3>{item[2]}</h3><p>{item[3]}</p></div><span className="timeline-arrow"><ArrowUpRight/></span></div>)}
    </div><p className="small-muted timeline-disclaimer">Timeline wording is intentionally broad; exact dates, roles and evidence should be verified before publication.</p>
   </section>
   <section className="capabilities section-pad"><div className="section-label"><span>04 / THE TOOLKIT</span><span>CAPABILITIES</span></div><h2>Different tools.<br/><em>Connected thinking.</em></h2><div className="cap-grid">{[['01','AI & INTELLIGENT SYSTEMS','Python · LLMs · RAG · Gemini · ADK'],['02','SOFTWARE DEVELOPMENT','React · TypeScript · FastAPI · PostgreSQL'],['03','DATA & ANALYTICS','SQL · Power BI · Excel · Tableau'],['04','PRODUCT & COLLABORATION','Problem framing · experimentation · team coordination']].map(x=><div className="cap-item" key={x[0]}><span>{x[0]}</span><div><h3>{x[1]}</h3><p>{x[2]}</p></div><CircleDot/></div>)}</div><p className="small-muted">Skills shown are a starting inventory from prior discussions. Adjust proficiency labels and remove anything you cannot confidently demonstrate.</p></section>
   <section className="contact section-pad" id="contact"><div className="section-label"><span>05 / START A CONVERSATION</span><span>CONTACT</span></div><div className="contact-inner"><div className="eyebrow">HAVE A QUESTION, IDEA OR OPPORTUNITY?</div><h2>Let's make<br/><em>something matter.</em></h2><p>For opportunities, collaborations and interesting conversations.</p><a className="contact-link" href="mailto:YOUR_EMAIL@example.com">YOUR_EMAIL@example.com <ArrowUpRight/></a><div className="socials"><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin/> LINKEDIN <ExternalLink size={13}/></a><a href="https://github.com/" target="_blank" rel="noreferrer"><Github/> GITHUB <ExternalLink size={13}/></a></div></div><div className="contact-orbit"><div/><div/><div/></div></section>
  </main>
  <footer><a className="brand" href="#top">CV<span>.</span></a><span>AN OPEN-ENDED COLLECTION OF WORK & IDEAS</span><a href="#top">BACK TO TOP ↑</a><span>© {new Date().getFullYear()} CHAANDINI VISWANATHAN</span></footer>
  <ProjectModal project={selected} onClose={()=>setSelected(null)}/>
 </div>;
}
