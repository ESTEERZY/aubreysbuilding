import { ArrowRight, MapPin, Ruler } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 'back-entrance-renovation',
      image: '/images/back-entrance-1.jpg',
      title: 'Renovation To Living & Entertainment Area.',
      location: 'Sheffield, Tasmania',
      scale: 'Residential Extension',
      status: 'In Progress',
      materials: 'Weatherboard, Timber Truss, Concrete Slab',
      intent: 'A previously dead space transformed into a full living zone — new lounge area, laundry, and WC accessed via cavity sliders, plus an Gazebo entertainment area with decorative truss and rustic Tas oak weatherboards sadly to be painted. Custom matt black intersection plates incoming for trusses.',
    },
    {
      id: 'pergola-replacement',
      image: '/images/pergola-1.jpg',
      title: 'Pergola Makeover',
      location: 'North West Coast, Tasmania',
      scale: 'Residential',
      status: 'Completed',
      materials: 'Treated Pine, Brick',
      intent: 'Out with the old, in with the new. A clean treated pine Pergola built to match the old one.',
    },
    {
      id: 'lake-barrington-deck',
      image: '/images/lake-barrington-1.jpg',
      title: 'Jarrah Deck',
      location: 'Lake Barrington, Tasmania',
      scale: 'Outdoor Living',
      status: 'Completed',
      materials: 'Hardwood Timber, Balustrade',
      intent: 'Definitely the spot to have a deck. With a spectacular view over Lake Barrington, this custom timber deck and balustrade was definitely a favorite job of 2024.',
    },
    {
      id: 'gazebo',
      image: '/images/gazebo-insta.jpg',
      title: 'Gazebo',
      location: 'North West Coast, Tasmania',
      scale: 'Outdoor Living',
      status: 'Completed',
      materials: '',
      intent: 'The client wanted a cool outdoor space to spend time with friends and kick back with a glass. The space was previously a pool that had a deck built over it, now what she envisioned.',
    },
  ]

  return (
    <section id="portfolio" className="py-32 bg-darkgray relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="space-y-6 max-w-3xl animate-fade-in">
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight animate-slide-up">
              Recent <span className="text-gold italic font-light">Featured Builds</span>
            </h2>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center animate-slide-up group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div 
                className="w-full lg:w-3/5 relative aspect-[16/10] overflow-hidden rounded-[2px] shadow-2xl border border-white/10 block"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Case Study Content */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <h3 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-8 group-hover:text-gold transition-colors duration-500">
                  {project.title}
                </h3>
                
                <div className="mb-10">
                  <h4 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase font-sans mb-3">Architectural Intent</h4>
                  <p className="text-lg text-white/70 font-sans leading-relaxed">
                    {project.intent}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-8 font-sans">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-2">
                      <MapPin size={14} className="text-gold" /> Location
                    </div>
                    <div className="text-base md:text-lg font-bold text-white">{project.location}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-2">
                      <Ruler size={14} className="text-gold" /> Scale & Status
                    </div>
                    <div className="text-base md:text-lg font-bold text-white">{project.scale} / {project.status}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Below Projects */}
        <div className="mt-32 text-center animate-slide-up border-t border-white/10 pt-24" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-4xl font-bold text-white mb-6">Ready to start your next build?</h3>
          <p className="text-xl text-white/60 font-sans font-medium mb-10 max-w-2xl mx-auto">
            Get in touch with Jacob to discuss your renovation, extension, or outdoor living space.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group bg-gold text-charcoal px-12 py-6 text-base font-bold tracking-widest uppercase hover:bg-white transition-all duration-500 inline-flex items-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] rounded-[2px] font-sans"
          >
            Request a Consultation
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={22} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
