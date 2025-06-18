import React, { useRef, useEffect } from 'react';
import { HardDrive, GitBranch, Layers, Cog, Radio, LineChart, Cpu, Earth } from 'lucide-react';

const CategoriesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      id="categories"
      className="relative py-16 bg-gray-100 overflow-hidden"
      ref={sectionRef}
    >
      {/* Background image with low opacity */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/src/assets/banner2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10 animate">
          Solution Categories
        </h2>
        <div className="max-w-3xl mx-auto text-center mb-10 animate">
          <p className="text-lg md:text-xl font-semibold text-gray-800">
            Our comprehensive suite of industrial solutions is categorized to address specific needs
            across various manufacturing sectors. Explore our solution categories to find the perfect
            fit for your industrial challenges.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 z-10 relative">
          {/* Category Card */}
          <div className="bg-white rounded-xl shadow-lg p-7 flex flex-col hover:-translate-y-2 transition animate">
            <div className="flex items-center justify-center w-14 h-14 bg-teal-50 text-teal-700 rounded-lg mb-4">
              <HardDrive size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Machine Monitoring</h3>
            <ul className="flex-1 mb-4 space-y-2 text-gray-600 text-sm">
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Real-time equipment monitoring</li>
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Performance analytics</li>
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Custom alert systems</li>
            </ul>
            <a href="#" className="text-teal-700 font-semibold hover:text-teal-900 transition">Explore Solutions →</a>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-7 flex flex-col hover:-translate-y-2 transition animate">
            <div className="flex items-center justify-center w-14 h-14 bg-teal-50 text-teal-700 rounded-lg mb-4">
              <GitBranch size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Process Optimization</h3>
            <ul className="flex-1 mb-4 space-y-2 text-gray-600 text-sm">
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Workflow analysis</li>
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Bottleneck identification</li>
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Optimization algorithms</li>
            </ul>
            <a href="#" className="text-teal-700 font-semibold hover:text-teal-900 transition">Explore Solutions →</a>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-7 flex flex-col hover:-translate-y-2 transition animate">
            <div className="flex items-center justify-center w-14 h-14 bg-teal-50 text-teal-700 rounded-lg mb-4">
              <Layers size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Data Integration</h3>
            <ul className="flex-1 mb-4 space-y-2 text-gray-600 text-sm">
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Multi-system connectivity</li>
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Legacy system integration</li>
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Data warehouse solutions</li>
            </ul>
            <a href="#" className="text-teal-700 font-semibold hover:text-teal-900 transition">Explore Solutions →</a>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-7 flex flex-col hover:-translate-y-2 transition animate">
            <div className="flex items-center justify-center w-14 h-14 bg-teal-50 text-teal-700 rounded-lg mb-4">
              <Cog size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Automation Systems</h3>
            <ul className="flex-1 mb-4 space-y-2 text-gray-600 text-sm">
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Robotic process automation</li>
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Human-machine interfaces</li>
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Smart factory solutions</li>
            </ul>
            <a href="#" className="text-teal-700 font-semibold hover:text-teal-900 transition">Explore Solutions →</a>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-7 flex flex-col hover:-translate-y-2 transition animate">
            <div className="flex items-center justify-center w-14 h-14 bg-teal-50 text-teal-700 rounded-lg mb-4">
              <Radio size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">IoT Implementations</h3>
            <ul className="flex-1 mb-4 space-y-2 text-gray-600 text-sm">
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Sensor networks</li>
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Edge computing</li>
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Cloud connectivity</li>
            </ul>
            <a href="#" className="text-teal-700 font-semibold hover:text-teal-900 transition">Explore Solutions →</a>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-7 flex flex-col hover:-translate-y-2 transition animate">
            <div className="flex items-center justify-center w-14 h-14 bg-teal-50 text-teal-700 rounded-lg mb-4">
              <LineChart size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Analytics & AI</h3>
            <ul className="flex-1 mb-4 space-y-2 text-gray-600 text-sm">
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Predictive modeling</li>
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Machine learning systems</li>
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Decision support tools</li>
            </ul>
            <a href="#" className="text-teal-700 font-semibold hover:text-teal-900 transition">Explore Solutions →</a>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-7 flex flex-col hover:-translate-y-2 transition animate">
            <div className="flex items-center justify-center w-14 h-14 bg-teal-50 text-teal-700 rounded-lg mb-4">
              <Cpu size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">FPGA Solutions</h3>
            <ul className="flex-1 mb-4 space-y-2 text-gray-600 text-sm">
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Custom logic design</li>
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">High-speed data processing</li>
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">VHDL/Verilog development</li>
            </ul>
            <a href="#" className="text-teal-700 font-semibold hover:text-teal-900 transition">Explore Solutions →</a>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-7 flex flex-col hover:-translate-y-2 transition animate">
            <div className="flex items-center justify-center w-14 h-14 bg-teal-50 text-teal-700 rounded-lg mb-4">
              <Earth size={28} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">SDG's</h3>
            <ul className="flex-1 mb-4 space-y-2 text-gray-600 text-sm">
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Clean energy initiatives</li>
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Inclusive economic growth</li>
              <li className="pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-teal-500">Climate action strategies</li>
            </ul>
            <a href="#" className="text-teal-700 font-semibold hover:text-teal-900 transition">Explore Solutions →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;