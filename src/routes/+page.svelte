<script>
  let isDarkMode = true; // Defaulting to dark for that premium feel

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.documentElement.classList.toggle('light-theme');
  }
</script>

<div class="ambient-glow"></div>

<section class="hero">
  <button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle theme">
    {isDarkMode ? '🌙' : '☀️'}
  </button>

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
    <a href="/projects" class="btn-primary">View Projects</a>
    <a href="https://github.com/Vickiegatheru" target="_blank" class="btn-secondary">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      GitHub
    </a>
  </div>
</section>

<style>
  :root {
    /* Dark Mode (Default) - Deep Obsidian & Emerald */
    --bg-page: #0a0a0c;
    --card-bg: rgba(18, 18, 22, 0.8);
    --text-main: #f4f4f5;
    --text-muted: #a1a1aa;
    --accent: #10b981; /* Emerald */
    --accent-gradient: linear-gradient(135deg, #10b981 0%, #34d399 100%);
    --border: rgba(255, 255, 255, 0.06);
    --glow-color: rgba(16, 185, 129, 0.1);
  }

  :global(.light-theme) {
    --bg-page: #f9fafb;
    --card-bg: rgba(255, 255, 255, 0.9);
    --text-main: #111827;
    --text-muted: #4b5563;
    --accent: #059669;
    --accent-gradient: linear-gradient(135deg, #059669 0%, #10b981 100%);
    --border: rgba(0, 0, 0, 0.08);
    --glow-color: rgba(5, 150, 105, 0.05);
  }

  /* Smooth body transition */
  :global(body) {
    background-color: var(--bg-page);
    margin: 0;
    transition: background-color 0.4s ease;
    font-family: 'Inter', system-ui, sans-serif;
  }

  .ambient-glow {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(circle at 50% -10%, var(--glow-color) 0%, transparent 60%);
    z-index: -1;
    pointer-events: none;
  }

  .hero {
    position: relative;
    max-width: 750px;
    margin: 10rem auto;
    padding: 4rem 3rem;
    text-align: center;
    background: var(--card-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--border);
    border-radius: 40px;
    box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.5);
  }

  .theme-toggle {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background: var(--border);
    border: none;
    padding: 0.6rem;
    border-radius: 12px;
    cursor: pointer;
    color: var(--text-main);
    transition: transform 0.2s;
  }

  .theme-toggle:hover { transform: scale(1.1); }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 18px;
    background: rgba(16, 185, 129, 0.1);
    color: var(--accent);
    border-radius: 100px;
    font-weight: 500;
    font-size: 0.85rem;
    margin-bottom: 2.5rem;
    border: 1px solid rgba(16, 185, 129, 0.2);
  }

  .dot {
    width: 6px;
    height: 6px;
    background: var(--accent);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--accent);
  }

  h1 { 
    font-size: 4rem; 
    color: var(--text-main); 
    margin: 0 0 1rem 0; 
    letter-spacing: -0.03em;
  }
  
  .gradient-text {
    background: var(--accent-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h2 { color: var(--text-main); font-size: 1.8rem; font-weight: 400; margin-bottom: 1.5rem; opacity: 0.9; }

  p { color: var(--text-muted); font-size: 1.2rem; line-height: 1.8; margin-bottom: 3rem; }

  .highlight { color: var(--text-main); font-weight: 600; }

  .actions { display: flex; gap: 1.5rem; justify-content: center; }

  .btn-primary {
    background: var(--accent);
    color: #fff;
    padding: 1rem 2.5rem;
    border-radius: 16px;
    text-decoration: none;
    font-weight: 600;
    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 25px -5px rgba(16, 185, 129, 0.4);
  }

  .btn-secondary {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-main);
    padding: 1rem 2.5rem;
    border-radius: 16px;
    text-decoration: none;
    font-weight: 600;
    border: 1px solid var(--border);
    transition: 0.3s;
  }

  .btn-primary:hover { 
    transform: translateY(-4px); 
    box-shadow: 0 20px 30px -10px rgba(16, 185, 129, 0.5); 
  }

  .btn-secondary:hover { 
    background: var(--border); 
    transform: translateY(-4px);
  }

  @media (max-width: 640px) {
    .hero { margin: 4rem 1rem; padding: 3rem 1.5rem; }
    h1 { font-size: 2.8rem; }
    .actions { flex-direction: column; }
  }
</style>