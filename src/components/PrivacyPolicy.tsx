import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-charcoal text-white flex flex-col justify-between">
      {/* Header / Nav */}
      <header className="border-b border-white/10 py-6 bg-charcoal/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <Link to="/" className="text-xl font-black tracking-[0.2em] text-white hover:text-gold transition-colors duration-300">
            AUBREY'S <span className="text-gold">BUILDING</span>
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
              Privacy <span className="text-gold">Policy</span>
            </h1>
            <p className="text-white/40 text-xs tracking-wider uppercase font-mono">Last Updated: May 20, 2026</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-white/80 leading-relaxed text-base">
            <p>
              At Aubrey's Building, we are committed to protecting your privacy. This Privacy Policy details how we collect, use, and safeguard your personal information when you visit our website or engage our building and carpentry services.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">1. Information We Collect</h2>
              <p>
                We may collect personal information that you voluntarily provide to us, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/70">
                <li>Your name, email address, and phone number.</li>
                <li>Your site location or project address.</li>
                <li>Details regarding your building, renovation, deck, or pergola requirements.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-white/70">
                <li>Provide accurate project consultations and construction quotes.</li>
                <li>Coordinate onsite inspections and building phases.</li>
                <li>Respond to your requests, questions, or comments.</li>
                <li>Comply with local Tasmanian building laws, licensing, and insurance requirements.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">3. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, rent, or trade your personal information. We may share information with trusted subcontractors (such as plumbers, electricians, or draftsmen) only to the extent necessary to perform work on your project, or when required by Australian law.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">4. Data Security</h2>
              <p>
                We implement appropriate electronic and physical safety standards to ensure the security of your personal data. However, please be aware that no transmission over the internet can be guaranteed as 100% secure.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">5. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us directly:
              </p>
              <p className="font-mono text-gold">
                Email: jacob@aubreysbuilding.com.au<br />
                Phone: 0476 119 012
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
