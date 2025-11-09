import Header from "../components/Header";
import Footer from "../components/Footer";
import { Users, Target, Award, Heart } from "lucide-react";
import heroImg from "../assets/images/abstract-techno-background-with-connecting-dots.jpg"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
import DOCG from "../assets/images/DOCG.jpg"
import DOH from "../assets/images/DOH.jpg"
import SANParks from "../assets/images/SANP.jpg"
import ZEISS from "../assets/images/zeiss.jpg"
import BALTEK from "../assets/images/BALTEK_ENGINEERING.jpg"
import EZIBALENI from "../assets/images/EZIBELENI SCHOOL.jpg"


const Clients = [
    {
        id: 1, 
        name: "Department of Cooperative Governance",
        image: DOCG
    },
    {
        id: 2, 
        name: "Department of Health",
        image: DOH
    },
    {
        id: 3, 
        name: "South African National Parks",
        image: SANParks
    },
    {
        id: 4, 
        name: "ZEISS",
        image: ZEISS
    },
    {
        id: 5, 
        name: "BALTEK ENGINEERING PTY (LTD)",
        image: BALTEK
    },
    {
        id: 6, 
        name: "EZIBELENI SCHOOL",
        image: EZIBALENI
    },
]

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-primary/10 to-background" style={{backgroundImage: `url(${heroImg})`}}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text leading-14 text-transparent bg-gradient-neon">About Mukanalo</h1>
              <p className="text-lg text-background">
                A South African training and skills development company specializing in IT services, accredited training, and stationery supply.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-card border border-blue-400 rounded-lg p-8">
                <Target className="w-12 h-12 text-blue-500 mb-4" />
                <h2 className="text-2xl font-bold mb-4 bg-clip-text leading-14 text-transparent bg-gradient-neon">Our Mission</h2>
                <p className="text-muted-foreground">
                  To empower South Africans through accessible, accredited digital learning and skills development programs that transform careers and lives.
                </p>
              </div>
              <div className="bg-card border border-blue-400 rounded-lg p-8">
                <Heart className="w-12 h-12 text-blue-500 mb-4" />
                <h2 className="text-2xl font-bold mb-4 bg-clip-text leading-14 text-transparent bg-gradient-neon">Our Vision</h2>
                <p className="text-muted-foreground">
                  To be the leading provider of quality IT training and skills development in South Africa, creating opportunities for growth and excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text leading-14 text-transparent bg-gradient-neon">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">Committed to delivering the highest quality training and services</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Empowerment</h3>
                <p className="text-muted-foreground">Enabling individuals and organizations to reach their full potential</p>
              </div>
              <div className="text-center">
                <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">Embracing modern technology and teaching methods</p>
              </div>
            </div>
          </div>
              </section>
              
                 {/* Our clients */}
        <section className="py-20">
            <div className="container mx-auto px-4">
                      <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text leading-14 text-transparent bg-gradient-neon">Our Clients</h2> 
                      <Carousel opts={{
                          align: "start", 
                          loop: true
                      }}
                          className="w-full max-w-5xl mx-auto"
                      >
                          <CarouselContent>
                              {Clients.map((clients) => (
                                  <CarouselItem key={clients.id} className="md:basis-1/2 lg:basis-1/3">
                                      <div className="flex flex-col bg-card border border-blue-400 rounded-lg p-2 items-center justify-around">
                                          <img src={clients.image} alt={clients.name} className="h-55" />
                                          <span className="mt-4 text-center text-sm font-medium bg-clip-text leading-14 text-transparent bg-gradient-neon">{clients.name}</span>
                                      </div>
                                  </CarouselItem>
                              ))}
                          </CarouselContent>
                          <CarouselNext />
                          <CarouselPrevious />
                      </Carousel>        
            </div>
        </section>

        {/* Accreditation */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Award className="w-16 h-16 text-blue-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6 bg-clip-text leading-14 text-transparent bg-gradient-neon">Accredited Training Provider</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Mukanalo is proudly accredited by MICT SETA, ensuring our courses meet the highest industry standards and provide recognized qualifications.
              </p>
              <p className="text-muted-foreground">
                Our learners receive certificates that are valued by employers across South Africa and beyond.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
