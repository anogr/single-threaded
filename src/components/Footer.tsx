const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Single Threaded AB</p>
          <p>Org.nr: 559400-8558</p>
          <p>Approved for F-tax </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
