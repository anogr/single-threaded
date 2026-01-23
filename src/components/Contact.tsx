const Contact = () => {
  return (
    <section id="contact">
      <div className="section-container">
        <p className="section-title">Contact</p>
        
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
            Let's work together
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Available for consulting engagements in Stockholm and remotely.
          </p>
          
          <div className="space-y-4">
            <a 
              href="mailto:hello@singlethreaded.se"
              className="block p-4 rounded-lg border border-border card-hover"
            >
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <p className="text-foreground">hello@singlethreaded.se</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/andreasogren/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-lg border border-border card-hover"
            >
              <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
              <p className="text-foreground">linkedin.com/in/andreasogren</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
