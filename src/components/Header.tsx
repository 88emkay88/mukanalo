import logo from '../assets/MUKANALO_LOGO.png'
import { Button } from './ui/button'
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-sm border-b border-border">
      <div className="container md:h-20 h-17 mx-auto md:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Mukanalo Logo" className="w-40" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/courses" className="text-sm font-medium text-foreground hover:text-blue-600 transition-smooth">
              Courses
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-blue-600 transition-smooth">
              About
            </Link>
            <Link to="/services" className="text-sm font-medium text-foreground hover:text-blue-600 transition-smooth">
              Services
            </Link>
            <Link to="/contact" className="text-sm font-medium text-foreground hover:text-blue-600 transition-smooth">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button className='hidden' variant="glass" size="sm">
              Sign In
            </Button>
            <Button className='cursor-pointer' onClick={() => navigate("/contact")} variant="neon" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden py-4 border-t w-full border-border bg-background/95 rounded-b-2xl backdrop-blur-sm animate-fade-in">
            <nav className="flex flex-col gap-4 px-4">
              <Link to="/courses" className="text-sm font-medium text-foreground hover:text-blue-600 transition-smooth py-2">
                Courses
              </Link>
              <Link to="/about" className="text-sm font-medium text-foreground hover:text-blue-600 transition-smooth py-2">
                About
              </Link>
              <a href="#corporate" className="text-sm font-medium text-foreground hover:text-blue-600 transition-smooth py-2">
                Corporate Training
              </a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-blue-600 transition-smooth py-2">
                Contact
              </a>

              {/* flex */}
              <div className="hidden flex-col gap-2 pt-4 border-t border-border">
                <Button className='hidden' variant="glass" size="sm">
                  Sign In
                </Button>
                <Button variant="neon" size="sm">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
