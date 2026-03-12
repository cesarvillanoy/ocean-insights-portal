import { Waves, Database, Globe, Clock, BarChart3, Download } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Waves,
    title: "Sea Level & Currents",
    description: "Real-time tidal predictions, storm surge forecasts, and ocean current velocity fields.",
  },
  {
    icon: Database,
    title: "Structured Data Access",
    description: "Browse and download model outputs in standard formats — NetCDF, GeoJSON, and interactive HTML maps.",
  },
  {
    icon: Globe,
    title: "Spatial Coverage",
    description: "High-resolution grids covering coastal zones, estuaries, and open ocean domains.",
  },
  {
    icon: Clock,
    title: "Forecast Windows",
    description: "Hourly updates with 72-hour forecast horizons and historical hindcast archives.",
  },
  {
    icon: BarChart3,
    title: "Validation Metrics",
    description: "Continuous skill assessment against tide gauges, buoys, and satellite altimetry.",
  },
  {
    icon: Download,
    title: "Bulk Downloads",
    description: "Automated data retrieval via API endpoints or scheduled delivery to your systems.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Model Capabilities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Access comprehensive hydrodynamic model outputs through a modern, intuitive interface.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
