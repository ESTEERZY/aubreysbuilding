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
                src="/images/director.jpg" 
                alt="Director of Aubreys Building" 
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
            <p className="text-xl text-white/90 leading-relaxed font-sans font-light tracking-wide italic">
              "I think some people are born to do certain things. Before I began my apprenticeship with my old man I asked him 'How am I supposed to figure all this out?' He said 'It'll just come to you one day, and then you'll understand.' Square, Level & Plumb he would always say and it really is that simple. My mission is to bring that same simplicity to your experience with us. Plan - Start - Finish & we worry about the in between."
            </p>

            <div className="pt-8 border-t border-white/10">
              <div className="text-white font-black tracking-widest uppercase text-sm mb-1">JACOB AUBREY RAY STEERS</div>
              <div className="text-gold font-bold text-xs tracking-widest uppercase">Licensed Builder & Founder</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle Background Architectural Framing Texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.03] mix-blend-overlay pointer-events-none -z-0"
        style={{ backgroundImage: "url('/images/luxury-estate-framing.png')" }}
      />
      
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full -z-0"></div>
    </section>
  );
};

export default About;
