import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from './Footer';

const TermsOfService = () => {
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
              Terms of <span className="text-gold">Service</span>
            </h1>
            <p className="text-white/40 text-xs tracking-wider uppercase font-mono">Last Updated: May 20, 2026</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-white/80 leading-relaxed text-base">
            <p>
              Welcome to the website of Aubreys Building. By accessing our website or engaging our services, you agree to comply with and be bound by the following Terms of Service.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">1. Scope of Services</h2>
              <p>
                Aubreys Building provides licensed building and carpentry services (including decks, pergolas, renovations, and extensions) in Tasmania, Australia. All quotes, project scopes, and construction agreements are subject to separate signed contracts outlining exact specifications, schedules, and payment schedules.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">2. Website Content</h2>
              <p>
                All content, photographs, floorplans, and schematics displayed on this website are the property of Aubreys Building. You may not reproduce, distribute, or reuse any assets without our express prior written permission.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">3. Estimates and Quotes</h2>
              <p>
                Any estimates, pricing calculators, or verbal numbers provided during initial consultations are preliminary guides only. Formal, binding quotes are only issued following detailed onsite assessments, plan review, and written agreement.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">4. Governing Law</h2>
              <p>
                These Terms of Service and any dispute arising from your use of this site or our services are governed by and construed in accordance with the laws of Tasmania, Australia.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">5. Contact Details</h2>
              <p>
                For questions regarding these Terms, contact Jacob Aubrey Ray Steers:
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

export default TermsOfService;
