import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { 
  ArrowRight, 
  Users, 
  Award, 
  BookOpen, 
  Printer, 
  Megaphone, 
  Share2, 
  Cog,
  Star,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { number: "500+", label: "Students Trained", icon: Users },
    { number: "10+", label: "Workshops Conducted", icon: BookOpen },
    { number: "4", label: "Core Skill Programs", icon: Award },
  ];

  const courses = [
    {
      title: "3D Printing",
      description: "Learn 3D modeling, hands-on printing, and design-to-print pipeline",
      icon: Printer,
      image: "https://images.pexels.com/photos/7869239/pexels-photo-7869239.jpeg",
      features: ["3D Modeling Basics", "Hands-on with Printers", "Design Pipeline"]
    },
    {
      title: "Public Speaking",
      description: "Build confidence, structure speeches, and improve fluency",
      icon: Megaphone,
      image: "https://images.pexels.com/photos/8348462/pexels-photo-8348462.jpeg",
      features: ["Confidence Building", "Speech Structure", "English Fluency"]
    },
    {
      title: "Social Media Marketing",
      description: "Master Instagram, YouTube, content creation and growth strategies",
      icon: Share2,
      image: "https://images.pexels.com/photos/5905510/pexels-photo-5905510.jpeg",
      features: ["Content Creation", "Platform Strategy", "Growth Hacking"]
    },
    {
      title: "CNC & VMC Training",
      description: "Master precision machining, safety operations, and get industry exposure",
      icon: Cog,
      image: "https://images.pexels.com/photos/9242839/pexels-photo-9242839.jpeg",
      features: ["Precision Machining", "Safety Operations", "Industry Exposure"],
      isNew: true
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      course: "3D Printing",
      text: "The hands-on approach helped me understand complex concepts easily. Now I'm confident in 3D modeling!",
      rating: 5
    },
    {
      name: "Rahul Verma",
      course: "Public Speaking",
      text: "I was shy before joining, but now I can speak confidently in front of large audiences. Life-changing!",
      rating: 5
    },
    {
      name: "Ananya Singh",
      course: "Social Media Marketing",
      text: "Learned practical strategies that I immediately applied. My content engagement increased by 300%!",
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10" />
          <img 
            src="https://images.pexels.com/photos/7869239/pexels-photo-7869239.jpeg" 
            alt="Students learning technology"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Empowering Students with
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Skills for Tomorrow
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Upskilling 11th & 12th Grade Students in 3D Printing, Public Speaking, Social Media Marketing, and Industrial Training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg"
              onClick={scrollToContact}
            >
              Join Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
              asChild
            >
              <Link to="/courses">View Courses</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-700 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Skill Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully designed programs to build the skills that matter in today's world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="relative">
                  {course.isNew && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        NEW!
                      </span>
                    </div>
                  )}
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center mr-3">
                      <course.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800"
              asChild
            >
              <Link to="/courses">
                Explore All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from students who transformed their futures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-brand-600 text-sm">{testimonial.course} Student</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-brand-600 to-brand-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of students who are already building skills for tomorrow. Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-brand-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Enroll Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-brand-700 px-8 py-4 text-lg"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
