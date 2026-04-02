import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ShieldCheck, 
  Target, 
  Users, 
  Cpu, 
  Factory, 
  Globe, 
  ChevronRight,
  Quote
} from "lucide-react";

export default function IndustrialAbout() {
  return (
    <Layout>
      {/* Hero Section - Industrial Aesthetic */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-orange-500 font-black tracking-[0.3em] uppercase text-sm mb-4 block">
            Our Foundation
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
            Architects of <span className="text-orange-500">Industry 4.0</span>
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-slate-400 font-medium leading-relaxed">
            From precision machining to autonomous systems, we are redefining 
            technical education for the global manufacturing workforce.
          </p>
        </div>
      </section>

      {/* Leadership Section - Featuring Santosh Gosavi */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Leadership Image */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-orange-500 z-0" />
              <div className="relative z-10 overflow-hidden shadow-2xl border border-slate-200">
                <img 
                  src="/Santosh Pune.jpeg" 
                  alt="Santosh Gosavi - Director of Operations" 
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-slate-900 p-6 text-white z-20 hidden md:block">
                <p className="text-orange-500 font-black uppercase tracking-widest text-xs mb-1">Directorate</p>
                <p className="font-bold text-xl uppercase tracking-tighter">Maharashtra Operations</p>
              </div>
            </div>

            {/* Leadership Text */}
            <div className="lg:col-span-7">
              <Quote className="w-12 h-12 text-slate-100 mb-6" />
              <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-6">
                Driving Industrial <span className="text-orange-500">Excellence</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Under the leadership of <strong className="text-slate-900">Santosh Gosavi</strong>, our Maharashtra operations have become the 
                  benchmark for technical upskilling in India's primary industrial corridors.
                </p>
                <p>
                  With decades of combined experience in mechanical engineering and industrial automation, our mission is clear: 
                  to eliminate the skill deficit in the manufacturing sector through rigorous, hardware-first training modules.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-6">
                  <div className="flex items-center space-x-3">
                    <ShieldCheck className="text-orange-500 w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-widest text-slate-800">ISO 9001 Certified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Factory className="text-orange-500 w-5 h-5" />
                    <span className="text-xs font-black uppercase tracking-widest text-slate-800">50+ Industrial Partners</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Grid Layout */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Our Operational Pillars</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="rounded-none border-0 shadow-sm hover:shadow-xl transition-all group">
              <CardContent className="p-10">
                <div className="w-14 h-14 bg-slate-900 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <Cpu className="text-orange-500 group-hover:text-slate-900 w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 uppercase mb-4 tracking-tighter">Hardware First</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We invest in actual industrial equipment—Siemens PLCs, FANUC Robotics, and VMC centers—so students train on what factories actually use.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-none border-0 shadow-sm hover:shadow-xl transition-all group">
              <CardContent className="p-10">
                <div className="w-14 h-14 bg-slate-900 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <Target className="text-orange-500 group-hover:text-slate-900 w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 uppercase mb-4 tracking-tighter">Industry Alignment</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our curriculum is updated semi-annually in collaboration with our corporate partners to stay ahead of Industry 4.0 trends.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-none border-0 shadow-sm hover:shadow-xl transition-all group">
              <CardContent className="p-10">
                <div className="w-14 h-14 bg-slate-900 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <Globe className="text-orange-500 group-hover:text-slate-900 w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 uppercase mb-4 tracking-tighter">Global Standards</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We prepare technicians and engineers to work in any smart factory environment, from Mumbai to Munich.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Board */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-black text-orange-500 mb-2 tracking-tighter">1.2K+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Technicians Trained</div>
            </div>
            <div>
              <div className="text-5xl font-black text-orange-500 mb-2 tracking-tighter">50+</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Partner Factories</div>
            </div>
            <div>
              <div className="text-5xl font-black text-orange-500 mb-2 tracking-tighter">14</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Industrial Modules</div>
            </div>
            <div>
              <div className="text-5xl font-black text-orange-500 mb-2 tracking-tighter">98%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-none">
            Scale Your <span className="text-orange-500">Workforce</span> Efficiency
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Partner with Ayush Industrial for specialized corporate training 
            and talent acquisition in Automation and Robotics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-slate-900 text-white hover:bg-slate-800 px-10 py-7 text-lg font-black rounded-none">
              CORPORATE TIE-UP
            </Button>
            <Button variant="outline" className="border-slate-900 text-slate-900 px-10 py-7 text-lg font-black rounded-none hover:bg-slate-900 hover:text-white">
              VIEW CASE STUDIES
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}