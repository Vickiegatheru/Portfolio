<script>
  import { page } from '$app/stores';
  let open = false;
</script>

<header>
  <button class="menu" on:click={() => open = !open}>
    ☰
  </button>

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
  header {
    padding: 1rem;
    border-bottom: 1px solid #ddd;
  }

  .menu {
    display: none;
    font-size: 1.5rem;
    background: none;
    border: none;
  }

  nav {
    display: flex;
    gap: 1rem;
  }

  .selected {
    font-weight: bold;
    border-bottom: 2px solid black;
  }

  @media (max-width: 600px) {
    .menu {
      display: block;
    }

    nav {
      display: none;
      flex-direction: column;
      margin-top: 1rem;
    }

    nav.open {
      display: flex;
    }
  }
</style>
