import React from 'react'
import heroImg from "../assets/images/network-data-structure.jpg"
import { ArrowRight, Award, BookOpen, Users } from 'lucide-react'
import { Button } from './ui/button'

const Hero = () => {
  return (
      <section className='pt-32 pb-20 overflow-hidden bg-cover h-full' style={
          {
            backgroundImage: `url(${heroImg})`,
        }
      }>
          <div className="mx-auto px-4 flex items-center justify-center flex-col">
                <div className="max-w-4xl mx-auto text-center">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-neon mb-6 animate-fade-in">
                    <Award className="w-4 h-4 text-blue-200" />
                    <span className="text-sm font-medium text-blue-200">MICT SETA Accredited Training Provider</span>
                  </div>

                  {/* Main Header */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 animate-fade-in leading-tight">
                    Empowering South Africans Through{" "}
                    <span className="gradient-neon bg-clip-text text-transparent bg-gradient-neon">
                    Accredited Digital Learning
                    </span>
                  </h1>

                  {/* Subheader */}
                   <p className="text-lg md:text-xl text-blue-50 translate-y-2 mb-10 animate-fade-in max-w-2xl mx-auto">
                      World-class IT training and skills development designed for individuals and corporate teams.
                      Learn at your own pace with expert instructors and earn recognized certifications.
                   </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in">
                    <Button size="lg" variant="neon" className="w-full sm:w-auto">
                      Browse Courses
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button size="lg" variant="glass" className="w-full sm:w-auto">
                      Corporate Solutions
                    </Button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-blue-100">
                    <div className="animate-fade-in bg-card rounded-lg p-4 border border-border">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Users className="w-5 h-5 text-accent" />
                        <span className="text-3xl font-bold text-foreground neon-text">5,000+</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Active Learners</p>
                    </div>
                    <div className="animate-fade-in bg-card rounded-lg p-4 border border-border">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <BookOpen className="w-5 h-5 text-accent" />
                        <span className="text-3xl font-bold text-foreground neon-text">50+</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Expert Courses</p>
                    </div>
                    <div className="animate-fade-in bg-card rounded-lg p-4 border border-border">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Award className="w-5 h-5 text-accent" />
                        <span className="text-3xl font-bold text-foreground neon-text">100%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Accredited Programs</p>
                    </div>
                  </div>
          
                </div>
          </div>
    </section>
  )
}

export default Hero