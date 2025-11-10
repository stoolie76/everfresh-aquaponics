
import React from 'react'
import { motion } from 'framer-motion'

export default function App() {
  return (
    <div style={{fontFamily: 'Inter, system-ui, -apple-system, Roboto, Arial', color:'#073b2b', background:'#f6fbf9', minHeight:'100vh'}}>
      <header style={{maxWidth:1100, margin:'0 auto', padding:24, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{display:'flex', alignItems:'center', gap:12}}>
          <div style={{width:54, height:54, borderRadius:12, background:'#0ea56f', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:700}}>EA</div>
          <div>
            <h1 style={{margin:0, fontSize:20}}>Everfresh Aquaponics</h1>
            <div style={{fontSize:13, color:'#155e4b'}}>Sustainable food for Northern Ontario</div>
          </div>
        </div>
        <nav style={{display:'flex', gap:12}}>
          <a href="#about">About</a>
          <a href="#produce">Produce</a>
          <a href="#csa">CSA</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main style={{maxWidth:1100, margin:'0 auto', padding:24}}>
        <section style={{display:'grid', gridTemplateColumns:'1fr 420px', gap:24, alignItems:'center'}}>
          <div>
            <motion.h2 initial={{y:10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6}} style={{fontSize:34, margin:0, lineHeight:1.05}}>
              Fresh produce. Circular water. <span style={{color:'#0ea56f'}}>Regenerative aquaponics</span> for northern communities.
            </motion.h2>
            <p style={{color:'#114437', fontSize:16}}>Everfresh combines fish and plants to create efficient, low-water systems that provide nutritious greens year-round.</p>

            <div style={{marginTop:16, display:'flex', gap:12}}>
              <a href="#csa" style={{padding:'10px 16px', background:'#0ea56f', color:'white', borderRadius:8, textDecoration:'none'}}>Join our CSA</a>
              <a href="#contact" style={{padding:'10px 16px', border:'1px solid #0ea56f', color:'#0ea56f', borderRadius:8, textDecoration:'none'}}>Visit the farm</a>
            </div>

            <ul style={{marginTop:16, display:'flex', gap:12, listStyle:'none', padding:0}}>
              <li><strong>Low water</strong> — uses ~90% less water</li>
              <li><strong>Local</strong> — reduces food miles</li>
              <li><strong>Chemical-free</strong> — no synthetic fertilizers</li>
            </ul>
          </div>

          <motion.div initial={{scale:0.98, opacity:0}} animate={{scale:1, opacity:1}} transition={{duration:0.6}} style={{borderRadius:12, overflow:'hidden', boxShadow:'0 8px 24px rgba(6,67,56,0.08)'}}>
            <img src="https://source.unsplash.com/featured/?aquaponics,greenhouse" alt="Aquaponics" style={{width:'100%', height:320, objectFit:'cover', display:'block'}}/>
          </motion.div>
        </section>

        <section id="about" style={{marginTop:40}}>
          <h3>About Everfresh</h3>
          <p>We build modular aquaponic greenhouses designed to thrive in cold climates. Our systems combine responsible fish production with nutrient-rich vegetable growth — perfect for communities across Northern Ontario.</p>
        </section>

        <section id="produce" style={{marginTop:24}}>
          <h3>What we grow</h3>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:12, marginTop:12}}>
            {[
              {name:'Leafy Greens', desc:'Lettuces & salad mixes'},
              {name:'Herbs', desc:'Basil, Dill, Cilantro'},
              {name:'Microgreens', desc:'Sunflower, Pea shoots'},
              {name:'Fish', desc:'Tilapia & Trout (seasonal)'},
            ].map(item => (
              <div key={item.name} style={{background:'white', padding:12, borderRadius:10, boxShadow:'0 6px 18px rgba(6,67,56,0.06)'}}>
                <div style={{height:120, borderRadius:8, overflow:'hidden', marginBottom:8}}>
                  <img src={"https://source.unsplash.com/400x300/?"+encodeURIComponent(item.name)} alt={item.name} style={{width:'100%', height:'100%', objectFit:'cover'}}/>
                </div>
                <h4 style={{margin:'6px 0'}}>{item.name}</h4>
                <div style={{fontSize:13, color:'#14503b'}}>{item.desc}</div>
                <div style={{marginTop:8, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                  <div style={{fontWeight:700}}>From $5 / bundle</div>
                  <button style={{padding:'6px 10px', borderRadius:8, background:'#0ea56f', color:'white', border:'none'}}>Buy</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="csa" style={{marginTop:32, background:'#eaf6ef', padding:16, borderRadius:12}}>
          <h3>CSA Options</h3>
          <div style={{display:'flex', gap:12, marginTop:12, flexWrap:'wrap'}}>
            <div style={{flex:'1 1 220px', background:'white', padding:12, borderRadius:8}}>
              <h4>Weekly Box</h4>
              <div>Selection of greens and herbs</div>
              <div style={{marginTop:8, fontWeight:700}}>CAD $25 / week</div>
            </div>
            <div style={{flex:'1 1 220px', background:'white', padding:12, borderRadius:8}}>
              <h4>Bi-weekly Box</h4>
              <div>Smaller households</div>
              <div style={{marginTop:8, fontWeight:700}}>CAD $14 / 2 weeks</div>
            </div>
            <div style={{flex:'1 1 220px', background:'white', padding:12, borderRadius:8}}>
              <h4>Fish Share</h4>
              <div>Fresh fillets when available</div>
              <div style={{marginTop:8, fontWeight:700}}>Seasonal pricing</div>
            </div>
          </div>
        </section>

        <section id="contact" style={{marginTop:32, display:'grid', gridTemplateColumns:'1fr 380px', gap:16}}>
          <div>
            <h3>Contact & Visit</h3>
            <p><strong>Location:</strong> North Bay area, ON — exact address after booking a visit</p>
            <p><strong>Phone:</strong> (705) 555-0123 · <strong>Email:</strong> hello@everfresh.example</p>
          </div>
          <div style={{background:'white', padding:12, borderRadius:10, boxShadow:'0 6px 18px rgba(6,67,56,0.06)'}}>
            <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks — message sent (demo).')}}>
              <label style={{display:'block', marginBottom:8}}>
                <div style={{fontSize:13}}>Name</div>
                <input required style={{width:'100%', padding:8, marginTop:6, borderRadius:8, border:'1px solid #dfeee6'}}/>
              </label>
              <label style={{display:'block', marginBottom:8}}>
                <div style={{fontSize:13}}>Email</div>
                <input type="email" required style={{width:'100%', padding:8, marginTop:6, borderRadius:8, border:'1px solid #dfeee6'}}/>
              </label>
              <label style={{display:'block', marginBottom:8}}>
                <div style={{fontSize:13}}>Message</div>
                <textarea required style={{width:'100%', padding:8, marginTop:6, borderRadius:8, border:'1px solid #dfeee6'}} rows={4}/>
              </label>
              <div style={{textAlign:'right', marginTop:8}}>
                <button type="submit" style={{padding:'8px 14px', borderRadius:8, background:'#0ea56f', color:'white', border:'none'}}>Send message</button>
              </div>
            </form>
          </div>
        </section>

        <footer style={{marginTop:40, padding:20, textAlign:'center', color:'#0a3b2e'}}>
          © {new Date().getFullYear()} Everfresh Aquaponics — Sustainable food for Northern Ontario
        </footer>
      </main>
    </div>
  )
}
