import { Card, CardContent, CardFooter, CardHeader } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Clock, Users, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "IT Fundamentals & CompTIA A+",
    category: "IT Certification",
    duration: "12 weeks",
    students: 450,
    rating: 4.8,
    level: "Beginner",
    description: "Master the essentials of IT hardware, software, and troubleshooting. Prepare for CompTIA A+ certification.",
  },
  {
    id: 2,
    title: "Project Management Essentials",
    category: "Management",
    duration: "8 weeks",
    students: 320,
    rating: 4.9,
    level: "Intermediate",
    description: "Learn proven project management methodologies and tools to lead successful projects.",
  },
  {
    id: 3,
    title: "Digital Marketing & Social Media",
    category: "Skills Development",
    duration: "6 weeks",
    students: 580,
    rating: 4.7,
    level: "Beginner",
    description: "Develop in-demand digital marketing skills including SEO, content marketing, and social media strategy.",
  },
];

const FeaturedCourses = () => {

  const nativagate = useNavigate();

  return (
    <section id="courses" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-blue-500 text-blue-700 backdrop-blur-sm">
            Featured Courses
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-neon bg-clip-text leading-14 text-transparent mb-4">
            Start Your Learning Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our selection of accredited courses designed by industry experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card 
              key={course.id} 
              className="bg-card hover:shadow-blue-300 transition-smooth animate-fade-in hover-scale hover:border-blue-300/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="bg-gradient-neon text-white border-0 shadow-blue-300">
                    {course.category}
                  </Badge>
                  <Badge variant="outline" className="border-blue-400/50">{course.level}</Badge>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {course.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-blue-500 text-blue-500" />
                    <span>{course.rating}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button variant="glass" className="w-full">
                  View Course
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="cursor-pointer" size="lg" variant="neon" onClick={() => nativagate('/courses')}>
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
