import { motion } from 'framer-motion';

const ProcessBreakdown = () => {
  const steps = [
    {
      id: "01",
      title: "Specialise in Custom Homes",
      description: "From custom residential timber framing to complex home extensions and renovations, we build with precision, ensuring structural excellence on every plan.",
      image: "/images/back-entrance-1.jpg"
    },
    {
      id: "02",
      title: "Direct Consultation",
      description: "Work directly with Jacob to plan your build. We walk through your layout, review site topography, and draft an honest quote.",
      image: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: "03",
      title: "Onsite Quality Build",
      description: "Meticulous onsite construction and carpentry built to last. We keep you updated at every stage of the building process.",
      image: "/images/pergola-1.jpg"
    }
  ];

  return (
    <section id="process" className="py-24 bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold"></div>
            <h2 className="text-xs md:text-sm font-black tracking-[0.4em] text-gold uppercase">03 // Our Process</h2>
          </div>
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
            From Idea to <span className="text-gold">Reality.</span>
          </h3>
          <p className="text-xl md:text-2xl font-bold text-white/90 leading-relaxed max-w-2xl border-l-4 border-gold/30 pl-8">
            A straightforward, transparent, and hands-on building approach designed to make renovating or extending your home a stress-free experience.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } } }}
              className="bg-darkgray border border-white/5 rounded-[2px] p-8 hover:border-gold/30 transition-all duration-300 group hover:-translate-y-2 relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full -z-10 group-hover:bg-gold/10 transition-colors duration-500"></div>

              <div className="text-6xl font-black text-white/20 mb-6 group-hover:text-gold/50 transition-colors duration-300">
                {step.id}
              </div>

              <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300 min-h-[64px] flex items-center">
                {step.title}
              </h4>
              <p className="text-white/60 mb-8 min-h-[72px]">
                {step.description}
              </p>

              <div className="mt-auto relative rounded-[2px] overflow-hidden border border-white/10 shadow-lg aspect-[4/3] w-full">
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default ProcessBreakdown;
