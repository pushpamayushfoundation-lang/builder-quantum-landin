import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Factory, 
  Cpu, 
  Zap, 
  LayoutDashboard, 
  Settings2, 
  PlayCircle,
  FileSearch,
  Maximize2
} from "lucide-react";

export default function IndustrialGallery() {
  const categories = [
    {
      title: "PLC & SCADA Control Center",
      description: "Visualizing real-time automation logic and HMI interface designs developed by our engineers.",
      icon: LayoutDashboard,
      count: "15+ Projects",
      color: "bg-orange-500",
      // High-tech control room / screen interface
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Robotic Cell Deployments",
      description: "Documenting 6-axis arm path planning and collaborative robot (Cobot) safety integrations.",
      icon: Zap,
      count: "8 Live Cells",
      color: "bg-slate-900",
      // Robotic arm in motion
      image: "https://images.unsplash.com/photo-1565515186334-927702bc4904?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Smart Factory Prototypes",
      description: "Snapshots of our IIoT enabled miniature production lines and digital twin simulations.",
      icon: Factory,
      count: "12 Systems",
      color: "bg-orange-500",
      // Modern industrial production line
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1565465295423-68c959a593ba?auto=format&fit=crop&q=80&w=600", // Microchips/Electronics
    "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=600", // Metal fabrication
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600", // Factory worker with tablet
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600", // Circuitry
    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=600", // Electrical panel
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600", // Humanoid robot tech
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600", // Pipes/Infrastructure
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600"  // Software development/Dashboards
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-orange-500 font-black tracking-[0.3em] uppercase text-xs mb-4 block">
            Technical Showcase
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            Automation <span className="text-orange-500">Lab</span> Assets
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-slate-400 font-medium leading-relaxed">
            A visual documentation of high-precision engineering, industrial 
            programming, and autonomous system deployments at Ayush Industrial centers.
          </p>
        </div>
      </section>

      {/* Main Gallery Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-l-4 border-orange-500 pl-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Field Implementation Gallery</h2>
              <p className="text-slate-500 mt-2">Documenting real-world hardware configurations and software architecture from Delhi & Pune.</p>
            </div>
            <Button variant="outline" className="mt-6 md:mt-0 rounded-none border-slate-900 font-black uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all">
              Filter by Module
            </Button>
          </div>

          {/* Asset Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {categories.map((cat, index) => (
              <Card key={index} className="rounded-none border-slate-100 shadow-sm hover:shadow-2xl transition-all group overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-48 w-full overflow-hidden relative">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className={`absolute top-0 right-0 p-3 ${cat.color}`}>
                       <cat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-8 bg-white">
                    <h3 className="text-xl font-black text-slate-900 uppercase mb-3 tracking-tighter">{cat.title}</h3>
                    <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                      {cat.description}
                    </p>
                    <div className="flex items-center text-xs font-bold text-orange-600 tracking-widest uppercase">
                      <FileSearch className="w-4 h-4 mr-2" />
                      {cat.count}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Visual Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="aspect-square bg-slate-100 relative group overflow-hidden border border-slate-200">
                <img 
                  src={img} 
                  alt={`Industrial Asset ${i}`} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <Maximize2 className="text-orange-500 w-6 h-6 mb-2" />
                  <span className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                    Asset ID: IND-0{i + 1}
                  </span>
                  <span className="text-slate-400 text-[9px] uppercase font-bold tracking-widest">
                    Technical Data Sheet Available
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Documentation CTA */}
          <div className="mt-20 bg-slate-900 p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-orange-500" />
             <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full -mr-32 -mt-32" />
             <div className="relative z-10">
                <PlayCircle className="w-16 h-16 text-orange-500 mx-auto mb-6 animate-pulse" />
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4">Watch Technical Walkthroughs</h3>
                <p className="text-slate-400 max-w-xl mx-auto mb-8 font-medium">
                  Access our private archive of deep-dive sessions on Servo drive tuning, 
                  Profinet network troubleshooting, and industrial robot path programming.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-slate-900 font-black px-12 py-7 rounded-none tracking-widest text-xs transition-transform hover:scale-105 active:scale-95">
                  ACCESS VIDEO ARCHIVE
                </Button>
             </div>
          </div>
        </div>
      </section>

      {/* Media & Publication Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 block">Industry Recognition</span>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-30 grayscale contrast-125">
            <h4 className="text-xl font-black tracking-tighter italic">AUTOMATION TODAY</h4>
            <h4 className="text-xl font-black tracking-tighter italic">TECH-MANUFACTURING</h4>
            <h4 className="text-xl font-black tracking-tighter italic">ROBOTICS WORLD</h4>
            <h4 className="text-xl font-black tracking-tighter italic">ENGINEERING WEEKLY</h4>
          </div>
        </div>
      </section>
    </Layout>
  );
}