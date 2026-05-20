import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from './Footer';

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-charcoal text-white flex flex-col justify-between">
      {/* Header / Nav */}
      <header className="border-b border-white/10 py-6 bg-charcoal/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <Link to="/" className="text-xl font-black tracking-[0.2em] text-white hover:text-gold transition-colors duration-300">
            AUBREYS <span className="text-gold">BUILDING</span>
          </Link>
          <Link 
            to="/" 
            className="flex items-center gap-2 text-xs font-bold tracking-widest text-gold hover:text-white uppercase transition-colors duration-300"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-12 py-20 max-w-4xl flex-grow font-sans">
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
              Site<span className="text-gold">map</span>
            </h1>
            <p className="text-white/40 text-xs tracking-wider uppercase font-mono">Last Updated: May 20, 2026</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-white/80">
            {/* Main Sections */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">Main Sections</h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="hover:text-gold transition-colors duration-300 text-lg font-semibold flex items-center gap-2">
                    <span className="text-gold">//</span> Home Page
                  </Link>
                </li>
                <li>
                  <a href="/#portfolio" className="hover:text-gold transition-colors duration-300 text-lg font-semibold flex items-center gap-2">
                    <span className="text-gold">//</span> Recent Featured Builds
                  </a>
                </li>
                <li>
                  <a href="/#about" className="hover:text-gold transition-colors duration-300 text-lg font-semibold flex items-center gap-2">
                    <span className="text-gold">//</span> About Jacob Aubrey
                  </a>
                </li>
                <li>
                  <a href="/#concept" className="hover:text-gold transition-colors duration-300 text-lg font-semibold flex items-center gap-2">
                    <span className="text-gold">//</span> Concept to Reality Interactive Showcase
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="hover:text-gold transition-colors duration-300 text-lg font-semibold flex items-center gap-2">
                    <span className="text-gold">//</span> Request a Consultation
                  </a>
                </li>
              </ul>
            </div>

            {/* Individual Project Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">Project Details</h2>
              <ul className="space-y-3">
                <li>
                  <Link to="/back-entrance-renovation.html" className="hover:text-gold transition-colors duration-300 text-base font-medium flex items-center gap-2">
                    <span className="text-gold">•</span> Back Entrance Renovation & Gazebo
                  </Link>
                </li>
                <li>
                  <Link to="/pergola-replacement.html" className="hover:text-gold transition-colors duration-300 text-base font-medium flex items-center gap-2">
                    <span className="text-gold">•</span> Pergola Replacement Project
                  </Link>
                </li>
                <li>
                  <Link to="/lake-barrington-deck.html" className="hover:text-gold transition-colors duration-300 text-base font-medium flex items-center gap-2">
                    <span className="text-gold">•</span> Lake Barrington Deck & Balustrade
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Documents */}
            <div className="space-y-6 md:col-span-2">
              <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">Legal & Policies</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                <li>
                  <Link to="/privacy-policy.html" className="hover:text-gold transition-colors duration-300 text-base font-medium flex items-center gap-2">
                    <span className="text-gold">•</span> Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service.html" className="hover:text-gold transition-colors duration-300 text-base font-medium flex items-center gap-2">
                    <span className="text-gold">•</span> Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sitemap;
