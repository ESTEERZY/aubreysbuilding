import { useRef, useCallback } from 'react'

const VIDEOS = ['/videos/hero2.mp4', '/videos/hero.mp4']

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const indexRef = useRef(0)

  const handleEnded = useCallback(() => {
    indexRef.current = (indexRef.current + 1) % VIDEOS.length
    const video = videoRef.current
    if (video) {
      video.src = VIDEOS[indexRef.current]
      video.load()
      video.play()
    }
  }, [])

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal"
    >
      <style>{`
        .animate-kinetic-zoom {
          animation: kineticZoom 30s linear infinite alternate;
          will-change: transform;
        }
        @keyframes kineticZoom {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.08) translate(-1%, -0.5%); }
        }
      `}</style>

      {/* Endless background video loop */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none bg-[#0c0c0c]">
        <video
          ref={videoRef}
          src={VIDEOS[0]}
          className="w-full h-full object-cover opacity-60"
          autoPlay
          muted
          playsInline
          onEnded={handleEnded}
        />
        {/* Rich gradient overlay for premium legibility and blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c]/85 via-transparent to-[#0c0c0c] z-[1]"></div>
      </div>

      {/* Centered content wrapper */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-32 flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          
          {/* The Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 leading-[1.02] animate-heading-breath">
            Structural Integrity.<br />
            <span className="text-gold">Residential Form.</span>
          </h1>

          {/* The Central Accent Line */}
          <div className="h-[2px] bg-gold mx-auto my-6 w-32" />

          {/* The Subtext Paragraph */}
          <p className="text-xl lg:text-2xl font-medium text-white/85 max-w-2xl mx-auto leading-relaxed animate-subtext-breath">
            Aim for perfection and you will come close. Meticulous local carpentry and building on the North West Coast of Tasmania.
          </p>

        </div>
      </div>

      {/* Bottom fade to next section (matches design system) */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-charcoal to-transparent z-[2]"></div>
    </section>
  );
};

export default Hero;