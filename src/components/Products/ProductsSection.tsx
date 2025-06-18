import React, { useEffect, useRef } from 'react';
import { Activity, Cpu, BarChart2, Database } from 'lucide-react';

const ProductsSection: React.FC = () => {
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
    <section id="products" className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10 animate relative after:content-[''] after:block after:w-20 after:h-1 after:bg-gradient-to-r after:from-blue-600 after:to-teal-600 after:mx-auto after:rounded after:mt-3">
          Solutions
        </h2>
        <div className="max-w-4xl mx-auto mb-10 animate">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            We specialize in delivering advanced data analysis solutions tailored to the unique
            machinery and processes of various manufacturing industries. Our services include the
            development of Industry 5.0 frameworks, seamlessly integrating human-centric automation
            and intelligent systems. We enable predictive maintenance through
            real-time monitoring and analytics, reducing downtime and maximizing asset life.
            Our customized OEE (Overall Equipment Effectiveness) solutions help identify
            performance gaps and boost operational efficiency. We also design intuitive interactive
            dashboards to visualize key production metrics, empowering decision-makers with
            actionable insights.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="bg-white rounded-xl shadow-lg p-7 flex flex-col hover:-translate-y-2 transition animate relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-t"></div>
            <div className="flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-700 rounded-full mb-4 mt-2">
              <Activity size={32} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Predictive Maintenance</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Enable predictive maintenance through advanced analytics, reducing downtime and maximizing asset life.
              Our AI-driven systems detect potential failures before they occur.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-7 flex flex-col hover:-translate-y-2 transition animate relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-t"></div>
            <div className="flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-700 rounded-full mb-4 mt-2">
              <Cpu size={32} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">OEE Solutions</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our customized OEE (Overall Equipment Effectiveness) solutions help identify performance gaps and
              boost operational efficiency through real-time monitoring.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-7 flex flex-col hover:-translate-y-2 transition animate relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-t"></div>
            <div className="flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-700 rounded-full mb-4 mt-2">
              <BarChart2 size={32} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Interactive Dashboards</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We design intuitive interactive dashboards to visualize key production metrics, empowering
              decision-makers with actionable insights.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-7 flex flex-col hover:-translate-y-2 transition animate relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-t"></div>
            <div className="flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-700 rounded-full mb-4 mt-2">
              <Database size={32} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Data Integration</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Seamlessly integrate data from diverse industrial systems and sensors to create a unified
              platform for comprehensive analysis and reporting.
            </p>
          </div>
        </div>
        <div className="text-center animate">
          <a
            href="#categories"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-md shadow transition"
          >
            View All Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;