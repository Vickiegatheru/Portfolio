<script>
  // No script needed here anymore! 
  // Theme logic is handled globally in your Navbar.
</script>

<div class="ambient-glow"></div>

<section class="hero-section">
  <div class="hero-card">
    
    <div class="badge">
      <span class="dot"></span>
      Available for new opportunities
    </div>
    
    <h1>Hi, I’m <span class="gradient-text">Vickie</span> 👋</h1>
    <h2>Frontend Software Engineer</h2>

    <p>
      Crafting high-performance web experiences with 
      <span class="highlight">SvelteKit</span>, <span class="highlight">React</span>, and <span class="highlight">JavaScript</span>.
    </p>

    <div class="actions">
      <a href="/projects" class="btn-primary">
        View Projects
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>

      <a href="https://github.com/Vickiegatheru" target="_blank" class="btn-secondary">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        GitHub
      </a>
    </div>

  </div>
</section>

<style>
  /* --- PAGE LAYOUT: FIT ONE SCREEN --- */
  .hero-section {
    /* Height calculation: 100vh minus header height (approx 80px) */
    min-height: calc(100vh - 80px);
    display: flex;
    align-items: center; /* Center vertically */
    justify-content: center; /* Center horizontally */
    padding: 1rem;
    font-family: 'Inter', system-ui, sans-serif;
  }

  /* --- GLASS CARD STYLING --- */
  .hero-card {
    position: relative;
    max-width: 750px;
    width: 100%;
    padding: 3.5rem 2.5rem; /* Balanced padding */
    text-align: center;
    
    /* Glass Effect using Global Variables */
    background: rgba(18, 18, 22, 0.6);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 40px;
    box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.5);
    
    /* Fade In Animation */
    animation: fadeIn 0.8s ease-out;
  }

  /* --- AMBIENT GLOW BACKGROUND --- */
  .ambient-glow {
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%);
    z-index: -1;
    pointer-events: none;
  }

  /* --- BADGE --- */
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 18px;
    background: rgba(16, 185, 129, 0.1);
    color: #10b981;
    border-radius: 100px;
    font-weight: 600;
    font-size: 0.85rem;
    margin-bottom: 2rem;
    border: 1px solid rgba(16, 185, 129, 0.2);
  }

  .dot {
    width: 6px; height: 6px;
    background: #10b981;
    border-radius: 50%;
    box-shadow: 0 0 8px #10b981;
  }

  /* --- TYPOGRAPHY --- */
  h1 { 
    font-size: 3.8rem; /* Slightly smaller to fit better */
    color: #f4f4f5; 
    margin: 0 0 0.5rem 0; 
    letter-spacing: -0.03em;
    font-weight: 800;
  }
  
  .gradient-text {
    background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 { 
    color: #f4f4f5; 
    font-size: 1.6rem; 
    font-weight: 400; 
    margin-bottom: 1.5rem; 
    opacity: 0.9; 
  }

  p { 
    color: #a1a1aa; 
    font-size: 1.15rem; 
    line-height: 1.6; 
    margin-bottom: 2.5rem; 
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .highlight { color: #f4f4f5; font-weight: 600; }

  /* --- BUTTONS --- */
  .actions { 
    display: flex; 
    gap: 1.5rem; 
    justify-content: center; 
    flex-wrap: wrap;
  }

  .btn-primary {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: #fff;
    padding: 14px 32px;
    border-radius: 14px;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.05rem;
    display: flex; align-items: center; gap: 8px;
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 25px -5px rgba(16, 185, 129, 0.4);
  }

  .btn-secondary {
    display: flex; align-items: center; gap: 10px;
    color: #f4f4f5;
    padding: 14px 32px;
    border-radius: 14px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.05rem;
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.1);
    transition: 0.3s;
  }

  .btn-primary:hover { 
    transform: translateY(-3px); 
    box-shadow: 0 15px 35px -5px rgba(16, 185, 129, 0.5); 
  }

  .btn-secondary:hover { 
    background: rgba(255,255,255,0.08); 
    transform: translateY(-3px);
    border-color: #10b981;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Mobile Adjustments */
  @media (max-width: 640px) {
    .hero-card { padding: 2rem 1.5rem; border-radius: 30px; }
    h1 { font-size: 2.8rem; }
    h2 { font-size: 1.4rem; }
    .actions { flex-direction: column; gap: 1rem; }
    .btn-primary, .btn-secondary { width: 100%; justify-content: center; }
  }
</style>