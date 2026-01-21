<script>
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A high-performance, responsive portfolio built to showcase frontend engineering mastery.",
      tech: ["SvelteKit", "JavaScript", "Tailwind"],
      link: "https://portfoliovickie.netlify.app/",
      github: "https://github.com/Vickiegatheru/Portfolio"
    },
    {
      title: "Virtual Electronics Lab",
      description: "Interactive lab to build and simulate digital circuits using drag-and-drop logic gates and real-time wiring.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://virtualdelab.netlify.app/",
      github: "https://github.com/Vickiegatheru/virtual-lab"
    }, 
    {
  title: "MarketPulse Stock Tracker",
  description: "A real-time equity dashboard featuring live price tracking, interactive charts, and a personalized watchlist with persistent state management.",
  tech: ["React", "Vite", "Tailwind", "Zustand", "Recharts"],
  link: "https://marketpulsestocks.netlify.app/", 
  github: "https://github.com/Vickiegatheru/Market-Pulse.git" 
}
  ];
</script>

<section class="projects-section">
  <div class="header">
    <span class="subtitle">Showcase</span>
    <h2>Projects</h2>
    <div class="underline"></div>
  </div>

  <div class="grid">
    {#each projects as project}
      <div class="card">
        <div class="card-inner">
          <div class="card-header">
            <h3>{project.title}</h3>
            
            <div class="external-links">
               <a href={project.github} target="_blank" aria-label="GitHub Repository" class="github-link">
                <span>Code</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>
          
          <p>{project.description}</p>

          <div class="tech-stack">
            {#each project.tech as t}
              <span class="tech-pill">{t}</span>
            {/each}
          </div>

          <div class="footer-links">
            <a href={project.link} target="_blank" class="btn-live">
              View Live Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  /* --- Global Dark Mode Force --- */
  :global(body) {
    background-color: #09090b !important;
    color: #f4f4f5;
    min-height: 100vh;
  }

  /* --- Page Layout (Centered) --- */
  .projects-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    
    /* Vertically center content */
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /* Header */
  .header {
    text-align: center;
    margin-bottom: 2.5rem;
  }

  .subtitle {
    color: #10b981;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-weight: 800;
    font-size: 0.75rem;
    display: block;
    margin-bottom: 0.5rem;
  }

  h2 {
    color: #f4f4f5;
    font-size: 2.5rem;
    margin: 0;
    font-weight: 800;
  }

  .underline {
    width: 60px;
    height: 4px;
    background: #10b981;
    margin: 1rem auto 0;
    border-radius: 2px;
  }

  /* Grid Layout */
  .grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    /* Added padding bottom to ensure hover effects don't get cut by screen edge */
    padding-bottom: 1rem; 
  }

  /* --- Card Styling (Fixed Cutoff Issue) --- */
  .card {
    background: #18181b;
    border: 1.5px solid rgba(255, 255, 255, 0.12);
    border-radius: 24px;
    position: relative;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    
    /* IMPORTANT: Removed overflow:hidden so button shadows aren't cut */
    display: flex;
    flex-direction: column;
  }

  .card:hover {
    transform: translateY(-8px);
    border-color: #10b981;
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
    z-index: 10;
  }

  .card-inner {
    padding: 1.5rem;
    /* Added extra bottom padding so button sits comfortably */
    padding-bottom: 1.8rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  h3 {
    color: #f4f4f5;
    font-size: 1.35rem;
    margin: 0;
    font-weight: 700;
    line-height: 1.2;
  }

  p {
    color: #a1a1aa;
    line-height: 1.5;
    margin: 0 0 1.5rem 0;
    font-size: 0.95rem;
    flex-grow: 1;
  }

  /* GitHub Link */
  .github-link {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #a1a1aa !important;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.8rem;
    padding: 4px 10px;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 6px;
    transition: all 0.2s;
  }

  .github-link:hover {
    color: white !important;
    border-color: #10b981;
    background: rgba(16, 185, 129, 0.1);
  }

  /* Tech Pills */
  .tech-stack {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
  }

  .tech-pill {
    background: rgba(16, 185, 129, 0.05);
    color: #10b981;
    padding: 4px 10px;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 600;
    border: 1px solid rgba(16, 185, 129, 0.25);
  }

  .footer-links { margin-top: auto; }

  /* Live Button */
  .btn-live {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: #10b981 !important;
    color: white !important;
    padding: 10px 20px;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    width: 100%;
    box-sizing: border-box;
  }

  .btn-live:hover {
    background-color: #059669 !important;
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(16, 185, 129, 0.3);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .grid { grid-template-columns: 1fr; }
    .projects-section { padding-top: 2rem; display: block; }
    h2 { font-size: 2.2rem; }
  }
</style>