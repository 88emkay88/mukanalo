import { Mail, Phone, MapPin } from "lucide-react";
import logo from '../assets/MUKANALO_LOGO.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-1">
               {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                  <img src={logo} alt="Mukanalo Logo" className="w-40" />
                </Link>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Empowering South Africans through accredited digital learning and skills development.
            </p>
            <p className="text-xs text-primary-foreground/60">
              MICT SETA Accredited
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Browse Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/corporate" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Service
                </Link>
              </li>
              {/* <li>
                <a href="#instructors" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Become an Instructor
                </a>
              </li> */}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#help" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#terms" className="text-primary-foresground/80 hover:text-primary-foreground transition-smooth">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <a href="mailto:info@mukanalo.co.za" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  info@mukanalo.co.za
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">078 175 6738 / 010 025 4100/1</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Mukanalo (Pty) Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;