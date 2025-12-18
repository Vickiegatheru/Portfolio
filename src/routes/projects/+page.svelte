<script>
  const projects = [
    {
      title: "Portfolio Website",
      tech: "SvelteKit, JavaScript",
      description: "Personal portfolio showcasing projects and skills."
    },
    {
      title: "Job Board UI",
      tech: "React, CSS",
      description: "Frontend UI for browsing and filtering job listings."
    }
  ];
</script>

<h1>Projects</h1>

<div class="grid">
  {#each projects as project}
    <div class="card">
      <h3>{project.title}</h3>
      <p><strong>Tech:</strong> {project.tech}</p>
      <p>{project.description}</p>
    </div>
  {/each}
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  .card {
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 8px;
  }
</style>
