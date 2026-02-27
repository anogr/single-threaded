const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-base md:text-lg font-semibold text-foreground">
          Single Threaded
        </a>
        <ul className="flex items-center gap-1 md:gap-8 text-sm">
          <li>
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 px-1 py-1"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 px-1 py-1"
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 px-1 py-1"
            >
              Experience
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 px-1 py-1"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
