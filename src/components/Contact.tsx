import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          budget: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-charcoal border-t border-white/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white/5 via-charcoal to-charcoal"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >

            <h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight">
              Begin Your <span className="text-gold">Journey.</span>
            </h2>

            <p className="text-xl text-white/60 font-medium leading-relaxed tracking-tight">
              Tell us about your project. Our consultants will respond within one business day.
            </p>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 bg-white/5 p-10 lg:p-12 border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.3)] rounded-[2px]"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-16 h-16 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white">Request Received</h3>
                <p className="text-lg text-white/60 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. We have sent a confirmation email to your address. A design and building consultant will review your vision and get in touch within one business day.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 bg-transparent border border-white/20 text-white/80 px-8 py-3 text-sm font-bold tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300 rounded-[2px]"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-3xl font-bold text-white mb-2">Request a Consultation</h3>
                <p className="text-lg text-white/60 mb-8 font-medium tracking-tight">Share your vision. We will be in touch.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-5 bg-red-500/10 border border-red-500/30 text-red-200 text-sm rounded-[2px] flex flex-col gap-3"
                    >
                      <p className="font-semibold">Submission failed. Our server is currently unreachable.</p>
                      <p className="text-xs text-red-300/80">
                        You can attempt to send again, or click below to submit your details directly via your email client:
                      </p>
                      <a
                        href={`mailto:jacob@aubreysbuilding.com.au?subject=${encodeURIComponent(`New Build Project Inquiry from ${formData.name}`)}&body=${encodeURIComponent(
                          `Name: ${formData.name}\nEmail: ${formData.email}\nEstimated Budget: ${formData.budget}\n\nProject Details:\n${formData.message}`
                        )}`}
                        className="self-start underline font-bold text-gold hover:text-white transition-colors"
                      >
                        Submit via Email Client (jacob@aubreysbuilding.com.au)
                      </a>
                    </motion.div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-white/70 uppercase tracking-widest mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
                        className="w-full px-5 py-4 bg-white/5 text-white text-base border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all rounded-[2px] disabled:opacity-50"
                        placeholder="Jane Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-white/70 uppercase tracking-widest mb-3">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
                        className="w-full px-5 py-4 bg-white/5 text-white text-base border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all rounded-[2px] disabled:opacity-50"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-bold text-white/70 uppercase tracking-widest mb-3">
                      Estimated Budget *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      disabled={status === 'submitting'}
                      className="w-full px-5 py-4 bg-white/5 text-white text-base border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all rounded-[2px] disabled:opacity-50"
                    >
                      <option value="" disabled>Select a range</option>
                      <option value="under_50k">Under $50k</option>
                      <option value="50k_150k">$50k – $150k</option>
                      <option value="150k_350k">$150k – $350k</option>
                      <option value="over_350k">$350k+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-white/70 uppercase tracking-widest mb-3">
                      Tell Us Your Vision *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      disabled={status === 'submitting'}
                      className="w-full px-5 py-4 bg-white/5 text-white text-base border border-white/10 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none rounded-[2px] disabled:opacity-50"
                      placeholder="Describe your dream home, location, style preferences..."
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="group w-full bg-transparent border border-gold/50 text-gold px-4 md:px-10 py-4 md:py-5 text-sm md:text-base font-bold tracking-widest uppercase hover:bg-gold hover:text-charcoal transition-all duration-500 inline-flex items-center justify-center gap-2 md:gap-3 shadow-[0_0_15px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(197,160,89,0.5)] rounded-[2px] whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <span>Sending Request...</span>
                          <svg className="animate-spin h-5 w-5 text-gold group-hover:text-charcoal" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                        </>
                      ) : (
                        <>
                          Start My Project
                          <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" size={20} />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex justify-center pt-4">
                    <p className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-[2px] text-xs font-semibold text-white tracking-wide">
                      <span className="text-gold font-black tracking-tighter">//</span>
                      YOUR DATA IS ENCRYPTED AND CONFIDENTIAL. WE RESPECT YOUR PRIVACY.
                    </p>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
