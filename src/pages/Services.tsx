import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Code, Briefcase, GraduationCap, Users, CheckCircle, Zap } from "lucide-react";
import heroImg from "../assets/images/abstract-techno-background-with-connecting-dots.jpg"
import { useNavigate } from "react-router-dom";

const Services = () => {
    const nativagate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background" style={{backgroundImage: `url(${heroImg})`}}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text leading-14 text-transparent bg-gradient-neon">Our Services</h1>
              <p className="text-lg text-background mb-8">
                Comprehensive learning solutions tailored to individual learners and organizations
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Online Courses */}
              <div className="bg-card border neon-border rounded-lg p-8 hover:shadow-glow transition-all">
                <GraduationCap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Online Courses</h3>
                <p className="text-muted-foreground mb-6">
                  Self-paced accredited courses with lifetime access and certification upon completion
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>24/7 access to course materials</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Expert instructor support</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>MICT SETA accreditation</span>
                  </li>
                </ul>
                <Button variant="neon" className="w-full">Explore Courses</Button>
              </div>

              {/* Corporate Training */}
              <div className="bg-card border neon-border rounded-lg p-8 hover:shadow-glow transition-all">
                <Briefcase className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Corporate Training</h3>
                <p className="text-muted-foreground mb-6">
                  Customized training programs designed to upskill your entire team
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Tailored curriculum</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Group licensing options</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Performance analytics</span>
                  </li>
                </ul>
                <Button variant="neon" className="w-full">Request Consultation</Button>
              </div>

              {/* Skills Development */}
              <div className="bg-card border neon-border rounded-lg p-8 hover:shadow-glow transition-all">
                <Code className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Skills Development</h3>
                <p className="text-muted-foreground mb-6">
                  Practical hands-on training focused on real-world application and job readiness
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Project-based learning</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Industry mentorship</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Job placement support</span>
                  </li>
                </ul>
                <Button variant="neon" className="w-full">Learn More</Button>
              </div>

              {/* Consulting */}
              <div className="bg-card border neon-border rounded-lg p-8 hover:shadow-glow transition-all">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Training Consulting</h3>
                <p className="text-muted-foreground mb-6">
                  Strategic guidance to build effective learning programs for your organization
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Needs assessment</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Custom curriculum design</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Implementation support</span>
                  </li>
                </ul>
                <Button variant="neon" className="w-full">Get Started</Button>
              </div>

              {/* Certification */}
              <div className="bg-card border neon-border rounded-lg p-8 hover:shadow-glow transition-all">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Fast-Track Certification</h3>
                <p className="text-muted-foreground mb-6">
                  Intensive programs designed to get you certified quickly without compromising quality
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Accelerated curriculum</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Exam preparation</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Recognized credentials</span>
                  </li>
                </ul>
                <Button variant="neon" className="w-full">View Programs</Button>
              </div>

              {/* Custom Solutions */}
              <div className="bg-card border neon-border rounded-lg p-8 hover:shadow-glow transition-all">
                <Briefcase className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
                <p className="text-muted-foreground mb-6">
                  Bespoke training solutions for unique organizational challenges and requirements
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Flexible delivery models</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Scalable pricing</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Ongoing support</span>
                  </li>
                </ul>
                <Button variant="neon" className="w-full">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30" >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our services can help you achieve your learning and development goals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="cursor-pointer" variant="neon" size="lg" onClick={() => nativagate("/contact")}>Contact Us</Button>
                <Button className="cursor-pointer" variant="outline" size="lg" onClick={() => nativagate("/courses")}>View All Courses</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
