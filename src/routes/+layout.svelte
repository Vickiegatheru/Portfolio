<script>
  import '../app.css';  
  import { page } from '$app/stores';
  let open = false;
</script>

<header>
  

  <nav class:open>
    <a href="/" class:selected={$page.url.pathname === '/'}>Home</a>
    <a href="/projects" class:selected={$page.url.pathname === '/projects'}>Projects</a>
    <a href="/about" class:selected={$page.url.pathname === '/about'}>About</a>
    <a href="/contacts" class:selected={$page.url.pathname === '/contacts'}>Contact</a>
  </nav>
</header>

<main>
  <slot />
</main>

<footer>
  <p>© 2025 Vickie Gatheru</p>
</footer>

<style>

  :root {
  /* This tells Chrome/Edge/Safari/Firefox to use their dark system theme */
  color-scheme: dark; 
}

  header {
    position: fixed;
    top: 0; 
    left: 0; 
    width: 100%;
    
    height: 10vh; 
    
    background: rgba(9, 9, 11, 0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    z-index: 1000;
    
    padding: 0 20px; 

    display: flex;          
    align-items: center;    
}

  
  
  nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  nav a {
    text-decoration: none;
    color: #a1a1aa; /* Muted Gray */
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 0.3s ease;
  }

  nav a:hover { color: #f4f4f5; }

  /* Active Link Style */
  nav a.selected {
    color: #10b981;
    font-weight: 700;
  }

  

  
  main {
    padding-top: 80px; /* Push content down below fixed header */
    min-height: 80vh;

  }

  footer {
    text-align: center;
    padding: 2rem;
    color: #52525b;
    font-size: 0.9rem;
    border-top: 1px solid rgba(255,255,255,0.05);
    margin-top: 4rem;
  }

  /* --- Mobile Responsive Styling --- */
  @media (max-width: 768px) {

    nav {
      position: absolute;
      top: 70px; left: 0; width: 100%;
      background: #18181b;
      flex-direction: column;
      padding: 2rem 0;
      gap: 1.5rem;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      
      /* Hidden by default */
      display: none; 
    }

    nav.open { display: flex; }

    /* Adjust button on mobile */
    
  }
</style>