import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import {
  ArrowRight,
  Users,
  Settings,
  Cpu,
  Factory,
  Zap,
  ShieldCheck,
  CheckCircle,
  BarChart3,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function IndustrialIndex() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { number: "1,200+", label: "Automation Engineers Trained", icon: Users },
    { number: "50+", label: "Corporate Partners", icon: Factory },
    { number: "ISO 9001", label: "Certified Training Standards", icon: ShieldCheck },
  ];

  const courses = [
    {
      title: "PLC & SCADA Systems",
      description: "Master Siemens TIA Portal and Rockwell Automation for large-scale factory control.",
      icon: Cpu,
      image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg",
      features: [
        "Ladder Logic & FBD",
        "HMI/SCADA Integration",
        "VFD Control Systems",
      ],
    },
    {
      title: "Industrial IoT (IIoT)",
      description: "Implementing Industry 4.0 protocols like MQTT, OPC-UA, and Cloud Analytics.",
      icon: Globe,
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
      features: ["Cloud Data Logging", "Edge Computing", "Predictive Maintenance"],
    },
    {
      title: "Robotics & Cobots",
      description: "Programming 6-Axis FANUC arms and Universal Robots for automated assembly.",
      icon: Zap,
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
      features: ["Path Programming", "Vision Systems", "Safety Integration"],
    },
    {
      title: "Additive Manufacturing",
      description: "Industrial 3D Printing (SLA/SLS) for rapid prototyping and functional parts.",
      icon: Settings,
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      features: [
        "Generative Design",
        "Material Science",
        "Post-Processing Tech",
      ],
      isNew: true,
    },
  ];

  const testimonials = [
    {
      name: "Vikram Mehta",
      course: "PLC Automation",
      text: "The transition from electrical basics to PLC logic was seamless. I secured a role at a major automotive plant immediately after.",
      rating: 5,
    },
    {
      name: "Sandeep Rao",
      course: "Robotics",
      text: "Hands-on experience with actual FANUC arms made all the difference. This isn't just a course; it's a career shift.",
      rating: 5,
    },
    {
      name: "Meera Iyer",
      course: "Industry 4.0",
      text: "Finally, a program that explains how to actually connect shop-floor machines to the cloud securely.",
      rating: 5,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        {/* Background with darker industrial overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-900/80 z-10" />
          <img
            src="https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg"
            alt="Automated Production Line"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Badge className="mb-6 bg-orange-500 hover:bg-orange-500 text-slate-900 font-bold px-4 py-1">
            2026 ADMISSIONS OPEN
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter uppercase">
            The Hub of
            <span className="block text-orange-500">
              Industrial Mastery
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-slate-300 font-medium">
            Bridging the gap between engineering theory and Industry 4.0 reality. 
            Advanced training in Automation, Robotics, and Smart Manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-slate-900 font-bold px-10 py-7 text-xl rounded-none transition-all transform hover:scale-105"
              onClick={scrollToContact}
            >
              ENROLL IN MODULE
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-slate-900 px-10 py-7 text-xl rounded-none backdrop-blur-sm"
              asChild
            >
              <Link to="/courses">VIEW CURRICULUM</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section with Industrial Styling */}
      <section className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-slate-800 border border-orange-500/30 flex items-center justify-center flex-shrink-0">
                  <stat.icon className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <div className="text-3xl font-black text-white leading-none mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl text-left">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">
                Core Training <span className="text-orange-500">Sectors</span>
              </h2>
              <p className="text-lg text-slate-600">
                Aggressive, hands-on modules designed to produce ready-to-deploy Automation Professionals.
              </p>
            </div>
            <Link to="/courses" className="text-orange-600 font-bold flex items-center hover:underline">
              BROWSE ALL MODULES <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="group border border-slate-100 bg-slate-50/50 rounded-none overflow-hidden transition-all duration-300 hover:border-orange-500"
              >
                <div className="relative aspect-[4/3]">
                  {course.isNew && (
                    <div className="absolute top-0 left-0 z-10">
                      <span className="bg-orange-500 text-slate-900 px-4 py-1 text-xs font-black uppercase tracking-tighter">
                        NEW SPEC
                      </span>
                    </div>
                  )}
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-black text-slate-900 uppercase mb-3 tracking-tighter">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-2">{course.description}</p>
                  <ul className="space-y-3">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs font-bold uppercase tracking-wide text-slate-500">
                        <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Advantage Section (Replacing simple testimonials) */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-none">
                The Ayush <span className="text-orange-500">Engineering</span> Advantage
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Live Automation Lab", desc: "Train on active PLC benches and robotic cells, not just simulations.", icon: Settings },
                  { title: "Industry 4.0 Standard", desc: "Our curriculum is audited annually to meet global smart-factory specs.", icon: BarChart3 },
                  { title: "Placement Pipeline", desc: "Direct interview access to our network of 50+ manufacturing partners.", icon: Users },
                ].map((item, i) => (
                  <div key={i} className="flex space-x-6">
                    <item.icon className="w-10 h-10 text-orange-500 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold uppercase mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-slate-800/50 p-8 border-l-4 border-orange-500">
                  <p className="text-slate-300 italic mb-4">"{t.text}"</p>
                  <div className="font-black uppercase tracking-tighter text-sm">{t.name}</div>
                  <div className="text-orange-500 text-xs font-bold uppercase">{t.course} Alumnus</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-24 bg-orange-500"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 uppercase tracking-tighter">
            Request Technical Prospectus
          </h2>
          <p className="text-xl text-slate-900 mb-10 font-medium">
            Join the elite group of certified automation professionals. 
            Corporate and individual training batches available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-slate-900 text-white hover:bg-slate-800 px-12 py-7 text-xl font-black rounded-none"
            >
              APPLY NOW
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-12 py-7 text-xl font-black rounded-none"
              asChild
            >
              <Link to="/contact">TALK TO AN ENGINEER</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Simple Badge component if not available in your UI library
function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${className}`}>
      {children}
    </span>
  );
}