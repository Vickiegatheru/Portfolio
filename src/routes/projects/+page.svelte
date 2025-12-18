<script>
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio website built to showcase my frontend projects and skills.",
      tech: ["SvelteKit", "JavaScript", "CSS"],
      link: "https://melodious-palmier-b3ca2f.netlify.app/",
      github: "https://github.com/Vickiegatheru/Portfolio"
    },
    {
      title: "Job Board UI",
      description: "A frontend UI that allows users to browse and filter job listings.",
      tech: ["React", "CSS"],
      link: "#",
      github: "#"
    }
  ];
</script>

<h1>Projects</h1>

<div class="grid">
  {#each projects as project}
    <div class="card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <ul>
        {#each project.tech as t}
          <li>{t}</li>
        {/each}
      </ul>

      <div class="links">
        <a href={project.link} target="_blank">Live</a>
        <a href={project.github} target="_blank">GitHub</a>
      </div>
    </div>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .card {
    border: 1px solid #ddd;
    padding: 1.2rem;
    border-radius: 8px;
  }

  ul {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    padding: 0;
    list-style: none;
  }

  li {
    background: #eee;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    font-size: 0.8rem;
  }

  .links {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
  }

  .links a {
    text-decoration: none;
    font-weight: bold;
  }
</style>
