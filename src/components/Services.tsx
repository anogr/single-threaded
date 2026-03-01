const services = [
  {
    title: "Software Architecture",
    description: "Design and structure front-end platforms for maintainable, robust, and adaptable solutions."
  },
  {
    title: "Front-End Development",
    description: "Build modern web applications with React and TypeScript. Use structured AI-assisted workflows to accelerate development and maintainability."
  },
  {
    title: "Technical Leadership",
    description: "Guide teams in architectural decisions, best practices, and engineering culture to improve collaboration and delivery quality."
  },
  {
    title: "Code Review & Assessment",
    description: "Review codebases, identify technical debt, and provide recommendations to improve reliability and maintainability."
  }
];

const Services = () => {
  return (
    <section id="services" className="scroll-mt-8 md:scroll-mt-0">
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
