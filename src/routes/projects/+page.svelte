<script>
  // Project data array
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A high-performance, responsive portfolio built to showcase frontend engineering mastery and design aesthetics.",
      tech: ["SvelteKit", "JavaScript", "Tailwind"],
      link: "https://portfoliovickie.netlify.app/",
      github: "https://github.com/Vickiegatheru/Portfolio"
    },
    {
      title: "Virtual Digital Electronics Lab",
      description: "An interactive web-based electronics lab that allows users to build and simulate digital circuits using drag-and-drop logic gates, switches, LEDs, and real-time wiring.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://virtualdelab.netlify.app/",
      github: "https://github.com/Vickiegatheru/virtual-lab"
    }, 
    {
      title: "E-Commerce Concept",
      description: "An accessible shopping experience focused on core web vitals and seamless user transitions.",
      tech: ["Svelte", "Shopify API", "CSS"],
      link: "#",
      github: "https://github.com/Vickiegatheru"
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
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
  /* Base Container */
  .projects-section {
    max-width: 1200px;
    margin: 6rem auto;
    padding: 0 2rem;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
  }

  /* Section Header */
  .header {
    text-align: center;
    margin-bottom: 5rem;
  }

  .subtitle {
    color: #10b981; /* Hardcoded Green */
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-weight: 800;
    font-size: 0.75rem;
    display: block;
    margin-bottom: 0.5rem;
  }

  h2 {
    color: #f4f4f5; /* Hardcoded White */
    font-size: 3rem;
    margin: 0;
    font-weight: 800;
  }

  .underline {
    width: 60px;
    height: 4px;
    background: #10b981;
    margin: 1.5rem auto 0;
    border-radius: 2px;
  }

  /* Grid Layout */
  .grid {
    display: grid;
    gap: 2.5rem;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  }

  /* Card Styling */
  .card {
    background: #18181b; /* Hardcoded Dark Gray */
    border: 1.5px solid rgba(255, 255, 255, 0.12);
    border-radius: 28px;
    position: relative;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    overflow: hidden;
  }

  .card:hover {
    transform: translateY(-12px);
    border-color: #10b981;
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5), 
                0 0 15px rgba(16, 185, 129, 0.1);
  }

  .card-inner {
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.25rem;
  }

  h3 {
    color: #f4f4f5; /* Hardcoded White */
    font-size: 1.6rem;
    margin: 0;
    font-weight: 700;
  }

  /* --- GitHub Link Styling (Fixed Visibility) --- */
  .github-link {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #a1a1aa !important; /* Visible Gray */
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 6px 12px;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    transition: all 0.2s;
  }

  .github-link:hover {
    color: white !important;
    border-color: #10b981;
    background: rgba(16, 185, 129, 0.1);
  }

  p {
    color: #a1a1aa; /* Visible Gray */
    line-height: 1.7;
    margin: 0 0 2rem 0;
    font-size: 1.05rem;
    flex-grow: 1;
  }

  /* Tech Pills */
  .tech-stack {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-bottom: 2.5rem;
  }

  .tech-pill {
    background: rgba(16, 185, 129, 0.05);
    color: #10b981;
    padding: 6px 14px;
    border-radius: 10px;
    font-size: 0.8rem;
    font-weight: 600;
    border: 1px solid rgba(16, 185, 129, 0.25);
    transition: all 0.3s;
  }

  .card:hover .tech-pill {
    border-color: rgba(16, 185, 129, 0.5);
    background: rgba(16, 185, 129, 0.1);
  }

  .footer-links {
    margin-top: auto;
  }

  /* --- Live Button Styling (Fixed Visibility) --- */
  .btn-live {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: #10b981 !important; /* FORCE GREEN */
    color: white !important; /* FORCE WHITE TEXT */
    padding: 12px 24px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  }

  .btn-live:hover {
    background-color: #059669 !important;
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(16, 185, 129, 0.3);
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
    }
    h2 {
      font-size: 2.2rem;
    }
    .card-inner {
      padding: 2rem;
    }
  }
</style>