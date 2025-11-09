import { Award, Video, Download, Users, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Accredited Certifications",
    description: "Earn MICT SETA recognized certificates upon completion of your courses.",
  },
  {
    icon: Video,
    title: "Expert-Led Videos",
    description: "Learn from industry professionals with real-world experience.",
  },
  {
    icon: Download,
    title: "Downloadable Resources",
    description: "Access course materials, assignments, and references anytime.",
  },
  {
    icon: Users,
    title: "Corporate Training",
    description: "Tailored programs for teams with progress tracking and analytics.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    description: "Monitor your learning journey with detailed progress dashboards.",
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "All courses meet the highest industry standards and best practices.",
  },
];

const Features = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text leading-14 text-transparent bg-gradient-neon mb-4">
            Why Choose Mukanalo?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to delivering exceptional learning experiences that drive real career growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border hover:border-blue-400/50 hover:shadow-blue-300 transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mx-auto mb-4 gradient-neon rounded-xl flex items-center justify-center shadow-neon">
                  <Icon className="w-7 h-7 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;