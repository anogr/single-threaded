import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>
      
      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6 text-balance">
            Software Architecture & Front-End Development
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            Independent consultant in Stockholm. Scalable solutions, decades of experience.
          </p>
          <a 
            href="#contact"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded transition-opacity duration-200 hover:opacity-90"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
