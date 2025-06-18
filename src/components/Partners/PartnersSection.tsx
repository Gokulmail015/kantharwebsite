import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const partners = [
  {
    id: 1,
    name: 'Tech Partner 1',
    logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Tech Partner 2',
    logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Tech Partner 3',
    logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    name: 'Tech Partner 4',
    logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 5,
    name: 'Tech Partner 5',
    logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 6,
    name: 'Tech Partner 6',
    logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

const getVisibleCount = () => {
  if (window.innerWidth >= 1024) return 4;
  if (window.innerWidth >= 768) return 3;
  if (window.innerWidth >= 480) return 2;
  return 1;
};

const PartnersSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slideCount = Math.ceil(partners.length / visibleCount);

  useEffect(() => {
    if (currentSlide >= slideCount) setCurrentSlide(0);
  }, [slideCount, currentSlide]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    const animatedElements = sectionRef.current?.querySelectorAll('.animate');
    if (animatedElements) {
      animatedElements.forEach((el) => observer.observe(el));
    }
    return () => {
      if (animatedElements) {
        animatedElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slideCount);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);

  // Calculate which partners to show
  const startIdx = currentSlide * visibleCount;
  const visiblePartners = partners.slice(startIdx, startIdx + visibleCount);

  // For infinite loop, fill with start if needed
  let displayPartners = visiblePartners;
  if (visiblePartners.length < visibleCount) {
    displayPartners = [
      ...visiblePartners,
      ...partners.slice(0, visibleCount - visiblePartners.length),
    ];
  }

  return (
    <section className="py-16 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10 animate">
          Our Technology Partners
        </h2>
        <div className="max-w-2xl mx-auto text-center mb-10 animate">
          <p className="text-lg md:text-xl font-semibold text-gray-700">
            We collaborate with leading technology providers to deliver cutting-edge industrial solutions.
            Our strategic partnerships enable us to implement the most advanced technologies for our clients.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 animate">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow hover:bg-blue-100 text-blue-700 transition disabled:opacity-50"
            onClick={prevSlide}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex-1 overflow-hidden">
            <div className={`flex transition-transform duration-500`} style={{ width: '100%' }}>
              {displayPartners.map((partner, idx) => (
                <div
                  key={partner.id + '-' + idx}
                  className="flex flex-col items-center justify-center px-4"
                  style={{
                    minWidth: `${100 / visibleCount}%`,
                    maxWidth: `${100 / visibleCount}%`,
                  }}
                >
                  <div className="flex items-center justify-center h-28 w-full mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-20 max-w-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-gray-700">{partner.name}</h3>
                </div>
              ))}
            </div>
          </div>
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow hover:bg-blue-100 text-blue-700 transition disabled:opacity-50"
            onClick={nextSlide}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: slideCount }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition ${index === currentSlide ? 'bg-blue-700 scale-110' : 'bg-gray-300'}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;