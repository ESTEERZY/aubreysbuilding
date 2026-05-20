import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-darkgray relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[2px] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
              <img 
                src="/images/director.png" 
                alt="Director of Aubrey's Building" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/10 mix-blend-multiply"></div>
            </div>
            {/* Decorative Gold Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold/20 -z-10 rounded-[2px]"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <h2 className="text-sm font-black tracking-[0.2em] text-gold uppercase mb-4">Visionary Leadership</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight">
                Crafting Legacies through <span className="text-gold">Precision.</span>
              </h3>
            </div>

            <p className="text-lg text-white/70 leading-relaxed font-sans">
              Founded by Jacob Aubrey, Aubrey's Building was born from a passion for quality residential carpentry and precision builds. Based in Sheffield and serving the North West Coast, Jacob leads a team dedicated to building beautiful, durable decks, pergolas, renovations, and extensions that stand the test of time.
            </p>

            <div className="space-y-6 pt-4 border-t border-white/10">
              <div className="flex gap-6 items-start">
                <div className="text-gold text-2xl font-black italic">01.</div>
                <div>
                  <h4 className="text-white font-bold mb-1">Uncompromising Standards</h4>
                  <p className="text-white/50 text-sm">Every joint, every framing cut, and every finish is built meticulously to ensure high-quality workmanship.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="text-gold text-2xl font-black italic">02.</div>
                <div>
                  <h4 className="text-white font-bold mb-1">Direct Builder Onsite</h4>
                  <p className="text-white/50 text-sm">We coordinate directly with you at every stage, providing straightforward local service you can trust.</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div className="text-white font-black tracking-widest uppercase text-xs mb-1">Jacob Aubrey</div>
              <div className="text-gold font-bold text-[10px] tracking-widest uppercase">Licensed Builder & Founder</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -z-0"></div>
    </section>
  );
};

export default About;
