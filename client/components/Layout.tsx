import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Linkedin, Twitter, MessageSquare, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Industrial Modules", href: "/courses" },
  { name: "Automation Lab", href: "/gallery" },
  { name: "Our Expertise", href: "/about" },
  { name: "Technical Support", href: "/contact" },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function IndustrialLayout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Industrial Logo with Ayush.png */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg overflow-hidden p-1 shadow-lg shadow-orange-500/10 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/Ayush.png" 
                  alt="Ayush Industrial Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter uppercase leading-none">
                  Ayush <span className="text-orange-500">Industrial</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                  Automation & Robotics
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-xs uppercase tracking-widest font-bold transition-all hover:text-orange-500",
                    location.pathname === item.href
                      ? "text-orange-500"
                      : "text-slate-300",
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-orange-500 hover:bg-orange-600 text-slate-900 font-bold rounded-none px-6">
                GET A QUOTE
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-slate-800"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800 animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-md",
                    location.pathname === item.href
                      ? "text-slate-900 bg-orange-500"
                      : "text-slate-300 hover:bg-slate-800",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-orange-500 text-slate-900 font-bold py-6">
                  ENROLL NOW
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative">{children}</main>

      {/* Industrial Footer */}
      <footer className="bg-slate-900 text-white pt-16 border-t-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Logo and mission */}
            <div className="md:col-span-5">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 bg-slate-800 rounded-md p-1">
                  <img 
                    src="/Ayush.png" 
                    alt="Ayush Logo" 
                    className="w-full h-full object-contain brightness-0 invert" 
                  />
                </div>
                <span className="text-2xl font-black uppercase tracking-tighter">Ayush Industrial</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-md">
                We are a Tier-1 technical training provider specializing in Industry 4.0 integration. 
                From PLC logic to robotic workcell deployment, we bridge the gap between 
                theoretical engineering and high-output industrial performance.
              </p>
              <div className="flex space-x-5">
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-orange-500 hover:text-slate-900 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-orange-500 hover:text-slate-900 transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-orange-500 hover:text-slate-900 transition-all">
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Modules Links */}
            <div className="md:col-span-3">
              <h3 className="text-xs uppercase tracking-[0.2em] font-black text-orange-500 mb-6">Training Tracks</h3>
              <ul className="space-y-3 text-sm font-medium">
                <li><Link to="/courses" className="text-slate-400 hover:text-white transition-colors">PLC & SCADA Systems</Link></li>
                <li><Link to="/courses" className="text-slate-400 hover:text-white transition-colors">Industrial Robotics</Link></li>
                <li><Link to="/courses" className="text-slate-400 hover:text-white transition-colors">IIoT & Data Science</Link></li>
                <li><Link to="/courses" className="text-slate-400 hover:text-white transition-colors">Mechatronics Engineering</Link></li>
              </ul>
            </div>

            {/* Headquarters */}
            <div className="md:col-span-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-black text-orange-500 mb-6">Industrial Center</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3 text-slate-400">
                  <span className="text-orange-500">LOC:</span>
                  <p>B-25, Phase III, Okhla Industrial Estate, New Delhi, 110020</p>
                </div>
                <div className="flex items-start space-x-3 text-slate-400">
                  <span className="text-orange-500">TEL:</span>
                  <p>+91 8076151938</p>
                </div>
                <div className="flex items-start space-x-3 text-slate-400">
                  <span className="text-orange-500">ISO:</span>
                  <div className="flex items-center space-x-1">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    <span>9001:2015 Certified Center</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
              © 2026 Ayush Industrial Foundation. Future-Proofing Global Manufacturing.
            </p>
            <div className="flex space-x-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
              <a href="#" className="hover:text-orange-500 transition-colors">Compliance</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Security</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}