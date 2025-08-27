import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  Printer, 
  Megaphone, 
  Share2, 
  Cog,
  ArrowRight,
  BookOpen,
  Target,
  Lightbulb
} from "lucide-react";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "3D Printing Mastery",
      description: "Comprehensive program covering 3D modeling fundamentals to advanced printing techniques",
      longDescription: "Dive into the world of additive manufacturing with our hands-on 3D printing course. Learn industry-standard software, understand different printing technologies, and work on real projects that showcase your skills.",
      icon: Printer,
      image: "https://images.pexels.com/photos/7869239/pexels-photo-7869239.jpeg",
      duration: "8 weeks",
      level: "Beginner to Intermediate",
      students: "50+ enrolled",
      price: "₹12,000",
      features: [
        "Introduction to 3D modeling with Fusion 360",
        "Hands-on experience with FDM and SLA printers",
        "Material science and printer maintenance",
        "Design optimization for 3D printing",
        "Project-based learning with real applications",
        "Industry connections and internship opportunities"
      ],
      skills: ["3D Modeling", "CAD Software", "Printer Operation", "Material Selection", "Design Thinking"],
      projects: [
        "Custom phone case design",
        "Functional mechanical parts",
        "Architectural scale models",
        "Prototyping for local businesses"
      ]
    },
    {
      id: 2,
      title: "Public Speaking Excellence",
      description: "Transform your communication skills and build unshakeable confidence in public speaking",
      longDescription: "Overcome stage fright and become a confident speaker. This program combines proven techniques with practical exercises to help you communicate effectively in any situation.",
      icon: Megaphone,
      image: "https://images.pexels.com/photos/8348462/pexels-photo-8348462.jpeg",
      duration: "6 weeks",
      level: "All Levels",
      students: "100+ enrolled",
      price: "₹8,000",
      features: [
        "Confidence building exercises and techniques",
        "Speech structure and storytelling methods",
        "Voice modulation and body language training",
        "Impromptu speaking and Q&A handling",
        "Video analysis and personalized feedback",
        "Group practice sessions and peer support"
      ],
      skills: ["Public Speaking", "Presentation Skills", "Storytelling", "Voice Control", "Stage Presence"],
      projects: [
        "Personal story presentation",
        "Persuasive speech competition",
        "Impromptu speaking challenges",
        "Group debate participation"
      ]
    },
    {
      id: 3,
      title: "Social Media Marketing Pro",
      description: "Master modern digital marketing strategies and grow your online presence effectively",
      longDescription: "Learn to create compelling content, understand platform algorithms, and build engaged communities. Perfect for aspiring entrepreneurs and digital natives.",
      icon: Share2,
      image: "https://images.pexels.com/photos/5905510/pexels-photo-5905510.jpeg",
      duration: "10 weeks",
      level: "Beginner to Advanced",
      students: "80+ enrolled",
      price: "₹15,000",
      features: [
        "Instagram and YouTube growth strategies",
        "Content creation with Canva and mobile tools",
        "Video editing and storytelling techniques",
        "Analytics and performance measurement",
        "Influencer marketing and collaboration",
        "Personal brand development"
      ],
      skills: ["Content Creation", "Video Editing", "Analytics", "Brand Strategy", "Community Building"],
      projects: [
        "Personal brand Instagram account",
        "YouTube channel launch",
        "Viral content campaign",
        "Local business marketing project"
      ]
    },
    {
      id: 4,
      title: "CNC & VMC Machine Training",
      description: "Master precision manufacturing with hands-on industrial machine training",
      longDescription: "Get ready for the future of manufacturing with comprehensive training on Computer Numerical Control and Vertical Machining Centers. Perfect preparation for industry careers.",
      icon: Cog,
      image: "https://images.pexels.com/photos/9242839/pexels-photo-9242839.jpeg",
      duration: "12 weeks",
      level: "Beginner to Professional",
      students: "30+ enrolled",
      price: "₹25,000",
      isNew: true,
      features: [
        "Fundamentals of precision machining",
        "CNC programming and G-code basics",
        "Safety protocols and machine operation",
        "Quality control and measurement tools",
        "Industry-standard practices and workflows",
        "Direct placement assistance and internships"
      ],
      skills: ["CNC Programming", "Machine Operation", "Quality Control", "Safety Protocols", "Industrial Process"],
      projects: [
        "Precision component manufacturing",
        "Custom tooling creation",
        "Industrial automation basics",
        "Real-world manufacturing project"
      ]
    }
  ];

  const scrollToEnroll = () => {
    const enrollSection = document.getElementById('enroll');
    enrollSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 to-brand-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Master the Skills of Tomorrow
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Our comprehensive courses are designed to bridge the gap between traditional education 
            and real-world industry requirements. Choose your path to success.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-brand-700 hover:bg-gray-100"
            onClick={scrollToEnroll}
          >
            Find Your Course
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {courses.map((course, index) => (
              <Card key={course.id} className={`overflow-hidden border-0 shadow-xl ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} lg:flex lg:items-center`}>
                <div className="lg:w-1/2">
                  <div className="relative aspect-video lg:aspect-square overflow-hidden">
                    {course.isNew && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                          NEW!
                        </Badge>
                      </div>
                    )}
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="lg:w-1/2 p-8">
                  <CardHeader className="px-0 pt-0">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center mr-4">
                        <course.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-900">{course.title}</CardTitle>
                        <p className="text-brand-600 font-medium">{course.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="px-0">
                    <p className="text-gray-600 mb-6">{course.longDescription}</p>
                    
                    {/* Course Info */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center">
                        <Clock className="w-5 h-5 text-brand-600 mx-auto mb-1" />
                        <div className="text-sm font-medium text-gray-900">{course.duration}</div>
                        <div className="text-xs text-gray-500">Duration</div>
                      </div>
                      <div className="text-center">
                        <BookOpen className="w-5 h-5 text-brand-600 mx-auto mb-1" />
                        <div className="text-sm font-medium text-gray-900">{course.level}</div>
                        <div className="text-xs text-gray-500">Level</div>
                      </div>
                      <div className="text-center">
                        <Users className="w-5 h-5 text-brand-600 mx-auto mb-1" />
                        <div className="text-sm font-medium text-gray-900">{course.students}</div>
                        <div className="text-xs text-gray-500">Students</div>
                      </div>
                      <div className="text-center">
                        <Award className="w-5 h-5 text-brand-600 mx-auto mb-1" />
                        <div className="text-sm font-medium text-gray-900">{course.price}</div>
                        <div className="text-xs text-gray-500">Investment</div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Target className="w-4 h-4 mr-2 text-brand-600" />
                        What You'll Learn
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {course.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Lightbulb className="w-4 h-4 mr-2 text-brand-600" />
                        Skills You'll Gain
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="bg-brand-50 text-brand-700">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-700 hover:to-brand-800 flex-1">
                        Enroll Now
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Ayush Foundation?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing practical, industry-relevant education that prepares you for real success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-brand-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Instructors</h3>
                <p className="text-gray-600">Learn from industry professionals with years of practical experience in their fields.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hands-on Learning</h3>
                <p className="text-gray-600">Practice with real equipment and work on projects that matter to build practical skills.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Support</h3>
                <p className="text-gray-600">Get placement assistance, internship opportunities, and industry connections.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section id="enroll" className="py-20 bg-gradient-to-r from-brand-600 to-brand-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our next batch and take the first step towards mastering skills that will shape your future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-brand-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Enroll Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-brand-700 px-8 py-4 text-lg"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
