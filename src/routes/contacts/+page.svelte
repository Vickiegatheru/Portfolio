<script>
  const emailAddress = "vickiegitahi@gmail.com";
  const phoneNumber = "+254 115 663 645"; 
</script>

<section class="contact-section">
  <div class="header">
    <span class="subtitle">Next Steps</span>
    <h2>Get In Touch</h2>
    <div class="underline"></div>
  </div>

  <div class="container-wide">
    <div class="card contact-grid">
      
      <div class="info-column">
        <h3>Let's Chat</h3>
        <p class="intro-text">
          I'm currently open to new opportunities. Feel free to reach out directly or send a message.
        </p>

        <div class="direct-contact">
          <div class="contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <a href="tel:{phoneNumber}" class="contact-link">{phoneNumber}</a>
          </div>

          <div class="contact-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <a href="mailto:{emailAddress}" class="contact-link">{emailAddress}</a>
          </div>
        </div>

        <div class="social-buttons">
          <a href="https://www.linkedin.com/in/vickie-gatheru-692a942bb" target="_blank" class="btn-secondary">
            LinkedIn
          </a>
          <a href="https://github.com/Vickiegatheru" target="_blank" class="btn-secondary">
            GitHub
          </a>
        </div>
      </div>

      <div class="form-column">
        <form name="contact" method="POST" data-netlify="true" class="contact-form">
          <input type="hidden" name="form-name" value="contact" />

          <div class="form-row">
            <div class="form-group">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div class="form-group">
              <input type="tel" name="phone" placeholder="Phone (Optional)" />
            </div>
          </div>

          <div class="form-group">
            <input type="email" name="email" placeholder="Email Address" required />
          </div>

          <div class="form-group">
            <textarea name="message" rows="3" placeholder="How can I help you?" required></textarea>
          </div>

          <button type="submit" class="btn-primary">
            Send Message
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
          </button>
        </form>
      </div>

    </div>
  </div>
</section>

<style>
  /* Reduced margins to fit on one screen */
  .contact-section {
    max-width: 1000px; /* Wider container for 2 columns */
    margin: 2rem auto; /* Reduced from 6rem */
    padding: 0 1.5rem;
    font-family: 'Inter', system-ui, sans-serif;
  }

  .header {
    text-align: center;
    margin-bottom: 2rem; /* Reduced from 4rem */
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
    font-size: 2.5rem;
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

  /* --- 2-COLUMN LAYOUT --- */
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr; /* Info takes less space, Form takes more */
    background: #18181b;
    border: 1.5px solid rgba(255, 255, 255, 0.12);
    border-radius: 24px;
    overflow: hidden;
  }

  /* Left Column: Info */
  .info-column {
    background: rgba(255, 255, 255, 0.02);
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid rgba(255,255,255,0.05);
  }

  /* Right Column: Form */
  .form-column {
    padding: 2.5rem;
  }

  h3 { color: #f4f4f5; margin-top: 0; }
  
  .intro-text {
    color: #a1a1aa;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  /* Direct Contact Items */
  .direct-contact {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 12px;
    color: #e4e4e7;
  }

  .contact-link {
    color: #e4e4e7;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.9rem;
  }
  .contact-link:hover { color: #10b981; }

  /* Social Buttons */
  .social-buttons { display: flex; gap: 0.8rem; }

  .btn-secondary {
    padding: 10px 20px;
    border: 1px solid #3f3f46;
    border-radius: 8px;
    color: #a1a1aa;
    text-decoration: none;
    font-size: 0.85rem;
    transition: all 0.2s;
    text-align: center;
  }
  .btn-secondary:hover {
    border-color: #10b981;
    color: #10b981;
  }

  /* --- FORM STYLES --- */
  .contact-form { display: flex; flex-direction: column; gap: 1rem; }
  
  /* Puts Name & Phone on same row */
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  input, textarea {
    width: 100%;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 12px;
    color: white;
    font-family: inherit;
    font-size: 0.9rem;
    box-sizing: border-box; /* Fixes padding issues */
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: #10b981;
    background: rgba(16, 185, 129, 0.05);
  }

  .btn-primary {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    font-weight: 700;
    padding: 12px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    transition: transform 0.2s;
    margin-top: 0.5rem;
  }

  .btn-primary:hover { transform: translateY(-2px); }

  /* Responsive Mobile */
  @media (max-width: 768px) {
    .contact-grid { grid-template-columns: 1fr; }
    .info-column { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.05); padding: 2rem; }
    .form-column { padding: 2rem; }
    .form-row { grid-template-columns: 1fr; }
  }
</style>