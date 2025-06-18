import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = Math.max(0.6, 1 - scrollPosition / 700);
        heroRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="relative flex items-center justify-center text-white h-screen min-h-[600px] bg-cover bg-center bg-fixed mt-[-120px] pt-[120px] overflow-hidden"
      style={{ backgroundImage: "url('/src/assets/banner1.png')" }}
      ref={heroRef}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-teal-900/80 z-10"></div>
      <div className="relative z-20 text-center max-w-2xl flex flex-col justify-center items-center h-full">
        <h1 className="text-5xl font-bold mb-3 mt-14 drop-shadow animate-fadeInUp">Advanced Industrial Solutions</h1>
        <p className="text-xl mb-10 opacity-90 animate-fadeInUp delay-200">Powering the future with Industry 5.0 technology</p>
        <div className="flex gap-4 justify-center animate-fadeInUp delay-400">
          <a href="#products" className="btn btn-primary px-6 py-3 text-base">Explore Solutions</a>
          <a href="#contact" className="btn btn-secondary px-6 py-3 text-base">Get in Touch</a>
        </div>
        <a
          href="https://www.linkedin.com/company/kanthar-industrial-solutions/about/?viewAsMember=true"
          className="btn bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 text-base rounded transition-colors mt-6 inline-block animate-fadeInUp delay-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      {/* Decorative tech elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute rounded-full bg-white/10 border border-white/20 w-[200px] h-[200px] top-[10%] left-[10%] animate-float"></div>
        <div className="absolute rounded-full bg-white/10 border border-white/20 w-[150px] h-[150px] top-[20%] right-[15%] animate-float delay-200"></div>
        <div className="absolute rounded-full bg-white/10 border border-white/20 w-[180px] h-[180px] bottom-[15%] left-[20%] animate-float delay-400"></div>
        <div className="absolute rounded-full bg-white/10 border border-white/20 w-[120px] h-[120px] bottom-[25%] right-[25%] animate-float delay-600"></div>
      </div>
    </section>
  );
};

export default Hero;