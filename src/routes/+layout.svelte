<script>
  import { page } from '$app/stores';
</script>

<header>
  <nav class="nav">
    <a href="/" class:selected={$page.url.pathname === '/'}>Home</a>
    <a href="/projects" class:selected={$page.url.pathname === '/projects'}>Projects</a>
    <a href="/about" class:selected={$page.url.pathname === '/about'}>About</a>
    <a href="/contact" class:selected={$page.url.pathname === '/contact'}>Contact</a>
  </nav>
</header>

<main>
  <slot />
</main>

<footer>
  <p>© 2025 Vickie Gatheru</p>
</footer>

<style>
  .nav {
    display: flex;
    gap: 1.5rem;
    padding: 1rem 2rem;
    border-bottom: 1px solid #ddd;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  .selected {
    font-weight: bold;
    border-bottom: 2px solid black;
  }

  main {
    padding: 2rem;
    min-height: 80vh;
  }

  footer {
    text-align: center;
    padding: 1rem;
    border-top: 1px solid #ddd;
  }
</style>
