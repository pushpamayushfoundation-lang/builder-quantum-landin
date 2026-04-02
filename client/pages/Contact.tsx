import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Cpu, 
  ShieldCheck, 
  HeadphonesIcon,
  Factory,
  Globe
} from "lucide-react";

export default function IndustrialContact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-orange-500 font-black tracking-[0.3em] uppercase text-sm mb-4 block">
            Technical Consultation
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            Connect with our <span className="text-orange-500">Engineers</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-slate-400">
            Discuss your automation roadmap, career transition, or corporate training 
            requirements with our Industry 4.0 specialists.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Consultation Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 p-8 md:p-12 border border-slate-100 shadow-sm">
                <h2 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tighter">
                  Submit a Request
                </h2>
                <p className="text-slate-600 mb-10">
                  Fill out the technical inquiry form below for a response within 12 business hours.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">Full Name</label>
                      <Input className="rounded-none border-slate-200 focus:border-orange-500" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">Organization / Institute</label>
                      <Input className="rounded-none border-slate-200 focus:border-orange-500" placeholder="e.g. IIT Delhi" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">Professional Email</label>
                      <Input type="email" className="rounded-none border-slate-200 focus:border-orange-500" placeholder="john@industry.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-500">Inquiry Type</label>
                      <select className="w-full h-10 px-3 border border-slate-200 bg-white text-sm focus:outline-none focus:ring-1 focus:ring-orange-500">
                        <option>Industrial Automation Training</option>
                        <option>Robotics Certification</option>
                        <option>Corporate Training (B2B)</option>
                        <option>Technical Support</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Project / Query Details</label>
                    <Textarea className="rounded-none border-slate-200 focus:border-orange-500 min-h-[150px]" placeholder="Describe your technical goals or specific module requirements..." />
                  </div>

                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black py-7 rounded-none transition-all">
                    TRANSMIT INQUIRY
                  </Button>
                </form>
              </div>
            </div>

            {/* Side Info */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <h3 className="text-xs font-black text-orange-500 uppercase tracking-[0.3em] mb-6">HQ Contact Details</h3>
                <div className="space-y-8">
                  
                  <div className="flex items-start space-x-5">
                    <div className="w-12 h-12 bg-slate-900 flex items-center justify-center shrink-0">
                      <MapPin className="text-orange-500 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase text-sm mb-1">Regional Training Center (Delhi)</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        B-25, Phase III, Okhla Industrial Estate,<br />
                        New Delhi, Delhi 110020<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="w-12 h-12 bg-slate-900 flex items-center justify-center shrink-0">
                      <Phone className="text-orange-500 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase text-sm mb-1">Technical Line</h4>
                      <p className="text-slate-600 text-sm">+91 8076151938</p>
                      <p className="text-slate-400 text-[11px] font-bold uppercase mt-1">Available: 09:00 - 18:00 IST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="w-12 h-12 bg-slate-900 flex items-center justify-center shrink-0">
                      <Mail className="text-orange-500 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 uppercase text-sm mb-1">Official Correspondence</h4>
                      <p className="text-slate-600 text-sm">pushpam.ayushfoundation@gmail.com</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Lab Hours */}
              <div className="p-8 bg-slate-900 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="text-orange-500 w-5 h-5" />
                  <h3 className="font-bold uppercase tracking-widest text-xs">Lab Availability</h3>
                </div>
                <div className="space-y-2 text-sm font-medium">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Mon - Fri</span>
                    <span>08:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Saturday</span>
                    <span>10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between text-orange-500">
                    <span>Sunday</span>
                    <span className="font-black uppercase">Emergency Maintenance Only</span>
                  </div>
                </div>
              </div>

              {/* Technical Ecosystem */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 border border-slate-100">
                  <Cpu className="w-6 h-6 text-slate-300 mx-auto mb-2" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">PLC Labs</span>
                </div>
                <div className="text-center p-4 border border-slate-100">
                  <Factory className="w-6 h-6 text-slate-300 mx-auto mb-2" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Smart Mfg</span>
                </div>
                <div className="text-center p-4 border border-slate-100">
                  <Globe className="w-6 h-6 text-slate-300 mx-auto mb-2" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Remote IIoT</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Global Support CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-8">
            Looking for Immediate Support?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="rounded-none border-none shadow-none bg-white p-8 group hover:bg-orange-500 transition-all duration-300">
               <HeadphonesIcon className="w-10 h-10 text-orange-500 group-hover:text-slate-900 mx-auto mb-4" />
               <h4 className="font-bold text-slate-900 uppercase text-sm mb-2">Student Hotline</h4>
               <p className="text-slate-500 group-hover:text-slate-900 text-xs">Direct support for active module students.</p>
            </Card>
            
            <Card className="rounded-none border-none shadow-none bg-white p-8 group hover:bg-orange-500 transition-all duration-300">
               <ShieldCheck className="w-10 h-10 text-orange-500 group-hover:text-slate-900 mx-auto mb-4" />
               <h4 className="font-bold text-slate-900 uppercase text-sm mb-2">Partner Inquiries</h4>
               <p className="text-slate-500 group-hover:text-slate-900 text-xs">For OEM and industrial equipment collaboration.</p>
            </Card>

            <Card className="rounded-none border-none shadow-none bg-white p-8 group hover:bg-orange-500 transition-all duration-300">
               <Globe className="w-10 h-10 text-orange-500 group-hover:text-slate-900 mx-auto mb-4" />
               <h4 className="font-bold text-slate-900 uppercase text-sm mb-2">Overseas Ops</h4>
               <p className="text-slate-500 group-hover:text-slate-900 text-xs">Consultation for international certification paths.</p>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}