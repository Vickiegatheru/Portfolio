<script>
  // Replace this with your actual email address
  const email = "vickiegatheru@gmail.com"; 
</script>

<section class="contact-section">
  <div class="header">
    <span class="subtitle">Next Steps</span>
    <h2>Get In Touch</h2>
    <div class="underline"></div>
  </div>

  <div class="container-narrow">
    <div class="card contact-card">
      <p class="intro-text">
        I'm currently open to new opportunities, freelance projects, or just a friendly chat about technology.
      </p>

      <div class="action-buttons">
        <a href="mailto:{email}" class="btn-primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          Send me an Email
        </a>

        <a href="https://linkedin.com/in/vickiegatheru" target="_blank" class="btn-secondary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          LinkedIn
        </a>
        
        <a href="https://github.com/Vickiegatheru" target="_blank" class="btn-secondary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          GitHub
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  /* Base Container */
  .contact-section {
    max-width: 1200px;
    margin: 6rem auto;
    padding: 0 2rem;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
  }

  .container-narrow {
    max-width: 600px;
    margin: 0 auto;
  }

  /* Header Styles */
  .header {
    text-align: center;
    margin-bottom: 4rem;
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

  /* Card Styling */
  .card {
    background: #18181b; /* Hardcoded Dark Gray */
    border: 1.5px solid rgba(255, 255, 255, 0.12);
    border-radius: 28px;
    padding: 3rem;
    text-align: center;
    transition: border-color 0.3s ease;
  }

  .card:hover {
    border-color: #10b981;
    box-shadow: 0 0 25px rgba(16, 185, 129, 0.1);
  }

  .intro-text {
    color: #a1a1aa; /* Visible Gray */
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2.5rem;
  }

  /* Action Buttons Grid */
  .action-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* Primary Button (Green) */
  .btn-primary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: #10b981 !important; /* Force Green */
    color: white !important; /* Force White */
    font-weight: 700;
    padding: 16px;
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.2s;
    font-size: 1.1rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  }

  .btn-primary:hover {
    background-color: #059669 !important;
    transform: translateY(-2px);
  }

  /* Secondary Button (Outline) */
  .btn-secondary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: transparent;
    color: #e4e4e7 !important; /* Force Light Gray */
    border: 1.5px solid #3f3f46;
    font-weight: 600;
    padding: 14px;
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.2s;
  }

  .btn-secondary:hover {
    border-color: #10b981;
    color: #10b981 !important;
    background: rgba(16, 185, 129, 0.05);
  }

  /* Responsive */
  @media (max-width: 768px) {
    h2 {
      font-size: 2.2rem;
    }
    .card {
      padding: 2rem;
    }
  }
</style>