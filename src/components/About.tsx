import andreasPhoto from "@/assets/andreas-ogren.jpg";

const About = () => {
  return (
    <section id="about" className="bg-card scroll-mt-8 md:scroll-mt-0">
      <div className="section-container">
        <p className="section-title">About</p>
        
        <div className="grid md:grid-cols-3 gap-12 items-start md:items-center">
          <div className="md:col-span-1 md:mt-16">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img 
                src={andreasPhoto} 
                alt="Andreas Ögren" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Andreas Ögren
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a civil engineer in computer science with 26 years of experience in software development and architecture.
              </p>

              <p>
                I specialize in front-end architecture, helping teams design and build scalable, maintainable web platforms in complex enterprise environments.
              </p>

              <p>
                I combine deep technical expertise with structured AI-assisted workflows to accelerate delivery while maintaining long-term clarity and quality.
              </p>

              <p>
                With extensive experience leading React-based initiatives at major Swedish companies, I bring a pragmatic, collaborative approach that turns architectural decisions into sustainable systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
