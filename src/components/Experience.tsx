const clients = [
  { name: "Atlas Copco", description: "Industrial manufacturing" },
  { name: "Tele2", description: "Telecommunications" },
  { name: "Svenska Spel", description: "Sports betting" },
  { name: "SEB", description: "Banking & finance" }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-card scroll-mt-8 md:scroll-mt-0">
      <div className="section-container">
        <p className="section-title">Selected Clients</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="text-center p-6"
            >
              <p className="text-lg font-semibold text-foreground mb-1">
                {client.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {client.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.linkedin.com/in/andreasogren/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-primary hover:text-primary/80 transition-colors duration-200"
          >
            View full profile on LinkedIn →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
