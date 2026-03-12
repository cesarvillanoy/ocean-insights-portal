import { Waves } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ocean-deep py-12 border-t border-ocean-mid/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Waves className="w-5 h-5 text-seafoam" />
            <span className="text-seafoam font-semibold">HydroForecast</span>
          </div>

          <nav className="flex gap-8 text-sm text-seafoam/60">
            <a href="#" className="hover:text-seafoam transition-colors">Data Access</a>
            <a href="#" className="hover:text-seafoam transition-colors">Documentation</a>
            <a href="#" className="hover:text-seafoam transition-colors">API</a>
            <a href="#" className="hover:text-seafoam transition-colors">Contact</a>
          </nav>

          <p className="text-sm text-seafoam/40">
            © 2026 HydroForecast. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
