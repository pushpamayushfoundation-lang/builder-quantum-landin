import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import {
  Clock,
  Users,
  Award,
  CheckCircle,
  Cpu,
  Zap,
  Radio,
  Cog,
  ArrowRight,
  BookOpen,
  Target,
  Lightbulb,
  Factory,
} from "lucide-react";

export default function IndustrialCourses() {
  const courses = [
    {
      id: 1,
      title: "Industrial Automation & PLC/SCADA",
      description: "Comprehensive training on Siemens, Rockwell, and Mitsubishi automation ecosystems",
      longDescription: "Master the brain of the modern factory. This course covers PLC programming (Ladder Logic, FBD), HMI design, and SCADA integration. You will learn to design, program, and troubleshoot automated control systems used in global manufacturing plants.",
      icon: Cpu,
      image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg", // Industrial PLC setup
      duration: "12 weeks",
      level: "Professional",
      students: "120+ certified",
      price: "₹35,000",
      features: [
        "Advanced PLC Programming (TIA Portal, RSLogix)",
        "SCADA Configuration & Data Acquisition",
        "VFD & Servo Drive Integration",
        "Control Panel Designing (EPLAN)",
        "Industrial Communication Protocols (Profinet, Modbus)",
        "Troubleshooting complex industrial faults",
      ],
      skills: ["PLC Logic", "HMI Design", "Control Systems", "Industrial Networking", "Automation Architecture"],
      projects: ["Automated Bottling Plant Simulation", "PID Control for Temperature Loops", "Remote SCADA Monitoring System"],
    },
    {
      id: 2,
      title: "Industry 4.0 & Industrial IoT (IIoT)",
      description: "Bridging the gap between OT and IT for the Smart Factory revolution",
      longDescription: "Learn how to implement the Fourth Industrial Revolution. This module focuses on connecting shop-floor machines to the cloud, predictive maintenance, and big data analytics in a manufacturing context.",
      icon: Radio,
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg", // Server/IoT visualization
      duration: "10 weeks",
      level: "Advanced",
      students: "85+ enrolled",
      price: "₹42,000",
      isNew: true,
      features: [
        "MQTT & OPC-UA Protocol Implementation",
        "Cloud Integration (AWS IoT / Azure IoT Central)",
        "Node-RED for Industrial Data Flow",
        "Predictive Maintenance Algorithms",
        "Cybersecurity in Industrial Control Systems",
        "Smart Sensor Integration (IO-Link)",
      ],
      skills: ["Cloud Computing", "IIoT Architecture", "Data Analytics", "Cybersecurity", "API Integration"],
      projects: ["Real-time OEE Dashboard", "Vibration-based Machine Health Monitor", "Cloud-linked Inventory Tracker"],
    },
    {
      id: 3,
      title: "Industrial Robotics & Cobots",
      description: "Programming and deployment of 6-Axis Robotic Arms and Collaborative Robots",
      longDescription: "Hands-on training with industrial robots (FANUC/ABB) and Cobots (Universal Robots). Learn path planning, gripper design, and safety systems for high-speed manufacturing lines.",
      icon: Zap,
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg", // Robotic arm
      duration: "14 weeks",
      level: "Professional",
      students: "60+ enrolled",
      price: "₹55,000",
      features: [
        "Robot Kinematics & Path Programming",
        "End-of-Arm Tooling (EOAT) Design",
        "Vision System Integration for Pick & Place",
        "Collaborative Robot (Cobot) Safety Standards",
        "Simulation using RoboGuide / RobotStudio",
        "Preventive Maintenance of Robotic Cells",
      ],
      skills: ["Robot Programming", "Kinematics", "Machine Vision", "Workcell Design", "Safety Protocols"],
      projects: ["Automated Welding Cell Design", "Vision-guided Sorting System", "Human-Robot Collaboration Task"],
    },
    {
      id: 4,
      title: "Advanced CNC & Mechatronics",
      description: "High-precision subtractive manufacturing and electromechanical system design",
      longDescription: "Go beyond basic machine operation. This course integrates mechanical design (CAD/CAM) with electronic control, focusing on VMC, HMC, and multi-axis CNC programming for aerospace and automotive standards.",
      icon: Cog,
      image: "https://images.pexels.com/photos/9242839/pexels-photo-9242839.jpeg", // CNC Machine
      duration: "16 weeks",
      level: "Professional",
      students: "45+ enrolled",
      price: "₹48,000",
      features: [
        "Advanced G-Code & M-Code Programming",
        "Mastercam / NX CAM for Multi-axis Machining",
        "Pneumatic & Hydraulic System Integration",
        "Precision Measurement (CMM / Digital Metrology)",
        "Tooling Selection & Optimization",
        "Mechatronic System Troubleshooting",
      ],
      skills: ["Multi-axis CNC", "CAM Programming", "Fluid Power", "Metrology", "Systems Integration"],
      projects: ["Aerospace Component Machining", "Electro-Pneumatic Sorting Rig", "Custom Gearbox Assembly & Test"],
    },
  ];

  const scrollToEnroll = () => {
    const enrollSection = document.getElementById("enroll");
    enrollSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge className="mb-4 bg-orange-500 hover:bg-orange-600 border-none">Industry 4.0 Center of Excellence</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Engineering the <span className="text-orange-500">Autonomous</span> Future
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-slate-300">
            Professional-grade training in Industrial Automation, Robotics, and IIoT. 
            Transition from a technician to an Automation Engineer with industry-certified curriculum.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-orange-500 text-white hover:bg-orange-600"
              onClick={scrollToEnroll}
            >
              Explore Course Catalog
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
              Download Industrial Prospectus
            </Button>
          </div>
        </div>
      </section>

      {/* Course Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-slate-900">Industrial Training Modules</h2>
                <p className="text-slate-600 mt-2">Specialized tracks designed in collaboration with manufacturing leaders.</p>
              </div>
              <div className="hidden md:flex gap-4">
                <Badge variant="outline" className="py-2 px-4">PLC</Badge>
                <Badge variant="outline" className="py-2 px-4">Robotics</Badge>
                <Badge variant="outline" className="py-2 px-4">IIoT</Badge>
              </div>
           </div>
          
          <div className="space-y-12">
            {courses.map((course, index) => (
              <Card
                key={course.id}
                className={`overflow-hidden border border-slate-100 shadow-2xl ${index % 2 === 0 ? "" : "lg:flex-row-reverse"} lg:flex lg:items-center`}
              >
                <div className="lg:w-1/2">
                  <div className="relative aspect-video lg:aspect-square overflow-hidden group">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
                  </div>
                </div>

                <div className="lg:w-1/2 p-10">
                  <CardHeader className="px-0 pt-0">
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-slate-200">
                        <course.icon className="w-7 h-7 text-orange-400" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-slate-900">
                          {course.title}
                        </CardTitle>
                        <p className="text-orange-600 font-semibold text-sm tracking-wider uppercase">
                          {course.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-0">
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {course.longDescription}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-slate-50 p-4 rounded-lg">
                      <div className="text-center border-r border-slate-200">
                        <Clock className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                        <div className="text-sm font-bold text-slate-900">{course.duration}</div>
                      </div>
                      <div className="text-center border-r border-slate-200">
                        <Target className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                        <div className="text-sm font-bold text-slate-900">{course.level}</div>
                      </div>
                      <div className="text-center border-r border-slate-200">
                        <Users className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                        <div className="text-sm font-bold text-slate-900">{course.students}</div>
                      </div>
                      <div className="text-center">
                        <Award className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                        <div className="text-sm font-bold text-slate-900">{course.price}</div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Curriculum Highlights</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6">
                        {course.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start text-sm text-slate-600">
                            <CheckCircle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100">
                      <Button className="bg-slate-900 text-white hover:bg-slate-800 flex-1 h-12">
                        Enroll in Module
                      </Button>
                      <Button variant="outline" className="flex-1 h-12 border-slate-200 text-slate-700">
                        Technical Specs
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Infrastructure Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Advanced Learning Ecosystem
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our lab facilities mirror actual industrial environments to ensure seamless transition to the shop floor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="h-2 bg-orange-500"></div>
                <div className="p-8">
                  <Factory className="w-12 h-12 text-slate-900 mb-6" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Live Industrial Benchmarks</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Work on Siemens S7-1500 PLCs, FANUC Robots, and Festo Pneumatic kits—standard equipment used in Fortune 500 plants.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="h-2 bg-slate-900"></div>
                <div className="p-8">
                  <Cpu className="w-12 h-12 text-slate-900 mb-6" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Digital Twin Integration</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Use simulation tools like Factory I/O and MATLAB/Simulink to design and test systems before physical deployment.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="h-2 bg-orange-500"></div>
                <div className="p-8">
                  <Award className="w-12 h-12 text-slate-900 mb-6" />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Professional Certification</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Earn certifications recognized by major manufacturing hubs and automation OEMs worldwide.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Placement Section */}
      <section id="enroll" className="py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready for Industry 4.0?</h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            Join the elite group of automation professionals. Admissions are now open for the 2026 Advanced Industrial Cohort.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-12 h-14 text-lg">
              Apply for Admission
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 px-12 h-14 text-lg">
              Contact Career Counselor
            </Button>
          </div>
          <p className="mt-8 text-slate-500 text-sm italic">
            * Corporate training batches for industrial teams are also available upon request.
          </p>
        </div>
      </section>
    </Layout>
  );
}