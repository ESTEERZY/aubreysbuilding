import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Ruler, Layers } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 'back-entrance-renovation',
      image: '/images/gazebo-renovation.png',
      title: 'Back Entrance Renovation & Entertainment Area',
      location: 'Sheffield, Tasmania',
      scale: 'Residential Extension',
      status: 'In Progress',
      materials: 'Weatherboard, Timber Truss, Concrete Slab',
      intent: 'A previously dead back entrance transformed into a full living zone — new lounge area, laundry, and WC accessed via cavity sliders, plus an onsite-built Gazebo with decorative truss and rustic weatherboard cladding. Custom matt black intersection plates incoming.',
    },
    {
      id: 'pergola-replacement',
      image: '/images/pergola-replacement.png',
      title: 'Pergola Replacement',
      location: 'North West Coast, Tasmania',
      scale: 'Residential',
      status: 'Completed',
      materials: 'Treated Pine, Brick',
      intent: 'Helped out Lynette with a full pergola replacement — out with the old, in with a clean new treated pine frame built to last. Sadly forgot to take a before pic. 😆',
    },
    {
      id: 'lake-barrington-deck',
      image: '/images/lake-barrington-deck.png',
      title: 'Lake Barrington Deck & Balustrade',
      location: 'Lake Barrington, Tasmania',
      scale: 'Outdoor Living',
      status: 'Completed',
      materials: 'Hardwood Timber, Balustrade',
      intent: 'Definitely the spot to have a deck. With a spectacular view over Lake Barrington, this custom timber deck and balustrade installation was a clear favorite job of 2024.',
    },
    {
      id: 'modern-villa-complex',
      image: '/images/villa-complex.png',
      title: 'Modern Villa Complex',
      location: 'North West Coast, Tasmania',
      scale: '1,450 sqm',
      status: 'Completed',
      materials: 'Concrete & Hardwood',
      intent: 'Merging contemporary form with Tasmanian landscape. Seamless indoor-outdoor living designed for the local climate.',
    },
    {
      id: 'luxury-estate',
      image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Rural Lifestyle Retreat',
      location: 'Sheffield, Tasmania',
      scale: '2,100 sqm',
      status: 'Completed',
      materials: 'Timber & Stone',
      intent: 'A private rural retreat built to sit naturally within the Tasmanian countryside. Sustainably sourced local materials throughout.',
    },
    {
      id: 'architectural-masterpiece',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Custom Home Build',
      location: 'North West Coast, Tasmania',
      scale: '950 sqm',
      status: 'Completed',
      materials: 'Colorbond, Weatherboard',
      intent: 'A bespoke family home built to exacting standards. Clean geometry, quality finishes, and built to last the Tasmanian seasons.',
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
              Technical <span className="text-gold italic font-light">Case Studies</span>
            </h2>
            <p className="text-xl text-white/60 font-sans font-medium animate-slide-up max-w-2xl" style={{ animationDelay: '0.1s' }}>
              Defining masterworks. Meticulous exploration of form, light, and context.
            </p>
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
              {/* Project Image wrapped in Link */}
              <Link 
                to={`/${project.id}.html`}
                className="w-full lg:w-3/5 relative aspect-[16/10] overflow-hidden rounded-[2px] shadow-2xl border border-white/10 block cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </Link>

              {/* Case Study Content */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <Link to={`/${project.id}.html`} className="inline-block group-hover:text-gold transition-colors duration-500">
                  <h3 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-8 group-hover:text-gold transition-colors duration-500">
                    {project.title}
                  </h3>
                </Link>
                
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
                  <div className="col-span-2">
                    <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-white/50 uppercase mb-3">
                      <Layers size={14} className="text-gold" /> Materials
                    </div>
                    <div className="inline-flex px-5 py-2.5 bg-white/5 border border-white/10 text-sm font-bold tracking-[0.15em] text-gold uppercase rounded-[2px]">
                      {project.materials}
                    </div>
                  </div>
                </div>

                {/* Explore Case Study CTA Link */}
                <div className="mt-10 border-t border-white/5 pt-8">
                  <Link
                    to={`/${project.id}.html`}
                    className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.25em] text-gold hover:text-white uppercase transition-all duration-300 group/link"
                  >
                    <span>View Architectural Case Study</span>
                    <ArrowRight className="group-hover/link:translate-x-1.5 transition-transform duration-300 text-gold group-hover/link:text-white" size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Below Projects */}
        <div className="mt-32 text-center animate-slide-up border-t border-white/10 pt-24" style={{ animationDelay: '0.3s' }}>
          <h3 className="text-4xl font-bold text-white mb-6">Ready to realize your vision?</h3>
          <p className="text-xl text-white/60 font-sans font-medium mb-10 max-w-2xl mx-auto">
            Schedule a private consultation with our architectural directors to begin shaping your legacy.
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
