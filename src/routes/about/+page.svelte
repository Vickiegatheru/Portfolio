<script>
  // You can add or remove skills here
  const skills = [
    "JavaScript (ES6+)", 
    "Svelte / SvelteKit", 
    "React.js", 
    "TypeScript",
    "Tailwind CSS", 
    "Node.js", 
    "Git & GitHub", 
    "Figma / UI Design"
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
      <p>
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
  /* Base Container */
  .about-section {
    max-width: 1000px;
    margin: 6rem auto;
    padding: 0 2rem;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
  }

  /* Header Styles */
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
  .content-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr; /* Bio gets slightly more space */
    gap: 2.5rem;
  }

  /* Card Styling (Consistent with Projects Page) */
  .card {
    background: #18181b; /* Hardcoded Dark Gray */
    border: 1.5px solid rgba(255, 255, 255, 0.12);
    border-radius: 28px;
    padding: 2.5rem;
    transition: transform 0.3s ease, border-color 0.3s ease;
  }

  .card:hover {
    transform: translateY(-8px);
    border-color: #10b981;
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
  }

  h3 {
    color: #f4f4f5; /* Hardcoded White */
    font-size: 1.5rem;
    margin-top: 0;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }

  p {
    color: #a1a1aa; /* Hardcoded Visible Gray */
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.05rem;
  }

  strong {
    color: #10b981; /* Hardcoded Green Highlight */
  }

  /* Skills Grid */
  .skills-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .skill-item {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #e4e4e7; /* Light Gray */
    font-weight: 500;
    padding: 10px;
    background: rgba(255,255,255,0.03);
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.05);
  }

  .check-icon {
    color: #10b981; /* Green Checkmark */
    font-weight: bold;
  }

  /* Responsive Adjustments */
  @media (max-width: 768px) {
    .content-grid {
      grid-template-columns: 1fr;
    }
    h2 {
      font-size: 2.2rem;
    }
    .card {
      padding: 2rem;
    }
    .skills-grid {
        grid-template-columns: 1fr; /* Stack skills on mobile */
    }
  }
</style>