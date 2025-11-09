import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Import page components
import Index from "../pages/Index"
import Courses from '../pages/Courses';
import About from '../pages/About';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';


const AppRoutes = () => {
    return (
        <Router> 
            <Routes>
                {/* Index Page */}
                <Route path="/" element={<Index />} />

                {/* Courses Page */}
                <Route path="/courses" element={<Courses />} /> 

                {/* About Page */}
                <Route path="/about" element={<About />} />

                {/* Services */}
                <Route path="/services" element={<Services />} />

                {/* Contact */}
                <Route path="/contact" element={<Contact />} />
                
                {/* 404 PAGE */}
                <Route path="*" element={<h1 className='text-center'>404 - Page Not Found</h1>} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;  
