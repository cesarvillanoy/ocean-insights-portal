import { motion } from "framer-motion";
import { MapPin, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const results = [
  {
    domain: "North Sea",
    date: "2026-03-12",
    type: "Storm Surge Forecast",
    status: "Available",
    variables: ["Sea Level", "Currents", "Wind Setup"],
  },
  {
    domain: "Baltic Sea",
    date: "2026-03-12",
    type: "Tidal Analysis",
    status: "Available",
    variables: ["Water Level", "Harmonic Constituents"],
  },
  {
    domain: "English Channel",
    date: "2026-03-11",
    type: "Current Forecast",
    status: "Processing",
    variables: ["U-velocity", "V-velocity", "Transport"],
  },
];

const ResultsPreview = () => {
  return (
    <section className="py-24 bg-muted/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Results
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse the most recent model runs and download results in your preferred format.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {results.map((result, index) => (
            <motion.div
              key={result.domain}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl border border-border p-6 hover:border-accent/40 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {result.domain}
                </div>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    result.status === "Available"
                      ? "bg-accent/10 text-accent"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {result.status}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {result.type}
              </h3>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="w-3.5 h-3.5" />
                {result.date}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {result.variables.map((v) => (
                  <span
                    key={v}
                    className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md"
                  >
                    {v}
                  </span>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-center text-accent group-hover:bg-accent/5"
              >
                View Report
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsPreview;
