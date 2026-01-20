<script>
  const skills = [
    "JavaScript (ES6+)", "Svelte / SvelteKit", "React.js", "TypeScript",
    "Tailwind CSS", "Node.js", "Git & GitHub", "Figma / UI Design"
  ];
</script>

<section class="about-section">
  <div class="header">
    <span class="subtitle">Who I Am</span>
    <h2>About Me</h2>
    <div class="underline"></div>
  </div>

  <div class="content-grid">
    <div class="card bio-card">
      <h3>Frontend Engineer & Designer</h3>
      <p>
        Hello! I'm <strong>Vickie Gatheru</strong>, a passionate developer focused on building accessible, pixel-perfect, and performant web experiences.
      </p>
      <p>
        I bridge the gap between design and engineering. With a strong foundation in modern JavaScript frameworks and a keen eye for aesthetics, I transform complex problems into intuitive, interactive interfaces.
      </p>
      <p class="last-p">
        When I'm not coding, I'm exploring new UI trends, optimizing web performance, or experimenting with digital electronics.
      </p>
    </div>

    <div class="card skills-card">
      <h3>Technical Arsenal</h3>
      <div class="skills-grid">
        {#each skills as skill}
          <div class="skill-item">
            <span class="check-icon">✓</span>
            {skill}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  /* Base Container - Compact Layout */
  .about-section {
    max-width: 1100px;
    margin: 0 auto; 
    padding: 0 1.5rem;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    
    /* Center content vertically on the screen */
    min-height: 85vh; 
    display: flex;
    flex-direction: column;
    justify-content: center; 
  }

  /* Header Styles - Reduced Spacing */
  .header {
    text-align: center;
    margin-bottom: 2.5rem; /* Reduced from 5rem */
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
    font-size: 2.5rem; /* Reduced from 3rem */
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

  /* Grid Layout - Tighter Gaps */
  .content-grid {
    display: grid;
    grid-template-columns: 1.3fr 1fr; /* Bio gets space, Skills stay compact */
    gap: 1.5rem; /* Reduced from 2.5rem */
  }

  /* Card Styling - Compact Padding */
  .card {
    background: #18181b;
    border: 1.5px solid rgba(255, 255, 255, 0.12);
    border-radius: 24px;
    padding: 2rem; /* Reduced from 2.5rem */
    transition: transform 0.3s ease, border-color 0.3s ease;
  }

  .card:hover {
    border-color: #10b981;
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  }

  h3 {
    color: #f4f4f5;
    font-size: 1.3rem;
    margin-top: 0;
    margin-bottom: 1.2rem;
    font-weight: 700;
  }

  p {
    color: #a1a1aa;
    line-height: 1.6; /* Slightly tighter line height */
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  .last-p { margin-bottom: 0; }

  strong { color: #10b981; }

  /* Skills Grid - Compact */
  .skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.8rem; /* Reduced gap */
  }

  .skill-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #e4e4e7;
    font-weight: 500;
    font-size: 0.9rem;
    padding: 8px 12px;
    background: rgba(255,255,255,0.03);
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.05);
  }

  .check-icon {
    color: #10b981;
    font-weight: bold;
    font-size: 0.8rem;
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .content-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    .about-section {
        justify-content: flex-start;
        padding-top: 2rem;
    }
    .card { padding: 1.5rem; }
  }
</style>