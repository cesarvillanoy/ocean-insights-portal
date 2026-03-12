import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navigation, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-ocean-deep">
      {/* Animated wave layers */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full animate-wave-drift opacity-20"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ height: "40%" }}
        >
          <path
            fill="hsl(195 70% 35%)"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,229.3C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <svg
          className="absolute bottom-0 w-full animate-wave-drift-slow opacity-10"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ height: "35%" }}
        >
          <path
            fill="hsl(170 50% 75%)"
            d="M0,288L48,272C96,256,192,224,288,208C384,192,480,192,576,202.7C672,213,768,235,864,234.7C960,235,1056,213,1152,208C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(190 80% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(190 80% 50%) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-wave-glow animate-shimmer"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <Navigation className="w-5 h-5 text-seafoam" />
            <span className="text-seafoam text-sm font-medium tracking-wider uppercase">
              Operational Hydrodynamic Model
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Ocean forecast{" "}
            <span className="text-wave-glow">results,</span>
            <br />
            delivered.
          </h1>

          <p className="text-lg md:text-xl text-seafoam/80 mb-10 max-w-xl leading-relaxed">
            Access real-time hydrodynamic model outputs — sea levels, currents,
            and wave fields — through interactive HTML reports and downloadable datasets.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" className="text-base px-8">
              Browse Latest Results
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base px-8">
              View Documentation
            </Button>
          </div>

          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-12 flex items-center gap-3 text-sm text-seafoam/60"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Model running — last update 15 min ago
            </span>
            <span className="text-seafoam/30">|</span>
            <span>72h forecast horizon</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
