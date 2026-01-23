const services = [
  {
    title: "Software Architecture",
    description: "Scalable system design, documentation, and implementation guidance."
  },
  {
    title: "Front-End Development",
    description: "Modern web applications with React and TypeScript. Performance and accessibility."
  },
  {
    title: "Technical Leadership",
    description: "Team guidance, best practices, and engineering culture."
  },
  {
    title: "Code Review & Assessment",
    description: "Codebase evaluation and technical debt reduction."
  }
];

const Services = () => {
  return (
    <section id="services">
      <div className="section-container">
        <p className="section-title">Services</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border border-border card-hover"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
