import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Clock, Users, Star, BookOpen } from "lucide-react";
import heroImg from "../assets/images/abstract-techno-background-with-connecting-dots.jpg"

const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    category: "IT Skills",
    level: "Beginner",
    duration: "8 weeks",
    students: 1243,
    rating: 4.8,
    description: "Learn HTML, CSS, and JavaScript to build modern websites from scratch.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Data Analytics with Python",
    category: "Data Science",
    level: "Intermediate",
    duration: "10 weeks",
    students: 892,
    rating: 4.9,
    description: "Master data analysis, visualization, and reporting using Python and pandas.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Project Management Professional",
    category: "Management",
    level: "Advanced",
    duration: "12 weeks",
    students: 567,
    rating: 4.7,
    description: "Comprehensive project management training aligned with industry best practices.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Cybersecurity Essentials",
    category: "IT Skills",
    level: "Intermediate",
    duration: "6 weeks",
    students: 734,
    rating: 4.6,
    description: "Learn to protect systems and networks from digital attacks and threats.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "Digital Marketing Mastery",
    category: "Marketing",
    level: "Beginner",
    duration: "8 weeks",
    students: 1156,
    rating: 4.5,
    description: "Master SEO, social media marketing, and digital advertising strategies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    title: "Leadership & Management",
    category: "Management",
    level: "Advanced",
    duration: "10 weeks",
    students: 445,
    rating: 4.8,
    description: "Develop essential leadership skills and strategic management capabilities.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60",
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-blue-500/10 to-background" style={{backgroundImage: `url(${heroImg})`}}>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text leading-14 text-transparent bg-gradient-neon">Our Courses</h1>
              <p className="text-lg text-background">
                Accredited training programs designed to advance your career and skills
              </p>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-card border neon-border rounded-lg overflow-hidden hover:shadow-neon transition-smooth"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{course.category}</Badge>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{course.students}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                    <Button variant="neon" className="w-full">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Enroll Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;