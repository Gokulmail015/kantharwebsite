import React, { useRef, useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const APPSCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwkoecmbHKQHDxFsU6cO9EUQwzUROZTJvOqV7RJaTxUPXSp6ODVtVJiszeNefW1Yi_Y/exec';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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

  // JSONP callback must be global
  (window as any).jsonpContactCallback = (result: any) => {
    if (result && result.status === 'success') {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Build query string
    const params = new URLSearchParams({
      ...formData,
      callback: 'jsonpContactCallback',
    }).toString();
    // Remove any previous script
    const prevScript = document.getElementById('jsonp-contact-script');
    if (prevScript) prevScript.remove();
    // Create script tag
    const script = document.createElement('script');
    script.id = 'jsonp-contact-script';
    script.src = `${APPSCRIPT_URL}?${params}`;
    script.onerror = () => setStatus('error');
    document.body.appendChild(script);
  };

  return (
    <section id="contact" className="relative py-16 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10 animate">
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto text-center mb-10 animate">
          <p className="text-lg md:text-xl font-semibold text-gray-700">
            Have questions about our industrial solutions? Reach out to our team of experts today.
            We're here to help you optimize your manufacturing processes with cutting-edge technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-br from-blue-700 to-blue-400 rounded-xl shadow-lg overflow-hidden">
          {/* Contact Info */}
          <div className="col-span-1 bg-white/10 text-white p-8 flex flex-col gap-6 min-w-[220px]">
            <h3 className="text-xl font-bold mb-2">Contact Information</h3>
            <div className="flex items-start gap-4 border-b border-white/20 pb-4">
              <div className="w-9 h-9 flex items-center justify-center bg-blue-800/20 rounded-full mt-1">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Phone</h4>
                <p className="text-white/90 text-sm">TEXT: 99999999</p>
                <p className="text-white/90 text-sm">TOLL FREE: 00000000</p>
              </div>
            </div>
            <div className="flex items-start gap-4 border-b border-white/20 pb-4">
              <div className="w-9 h-9 flex items-center justify-center bg-blue-800/20 rounded-full mt-1">
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Email</h4>
                <p className="text-white/90 text-sm">consultancy@kantharindustrialsolutions.in</p>
              </div>
            </div>
            <div className="flex items-start gap-4 border-b border-white/20 pb-4">
              <div className="w-9 h-9 flex items-center justify-center bg-blue-800/20 rounded-full mt-1">
                <MapPin size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Address</h4>
                <p className="text-white/90 text-sm">123 Industrial Avenue</p>
                <p className="text-white/90 text-sm">Tech Park, Innovation District</p>
                <p className="text-white/90 text-sm">Chennai, India 600046</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 flex items-center justify-center bg-blue-800/20 rounded-full mt-1">
                <Clock size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                <p className="text-white/90 text-sm">Mon-Fri: 9:00 AM - 6:00 PM</p>
                <p className="text-white/90 text-sm">Sat: 10:00 AM - 2:00 PM</p>
                <p className="text-white/90 text-sm">Sunday: Closed</p>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="col-span-2 bg-white p-8 flex flex-col justify-center animate">
            <h3 className="text-xl font-bold text-blue-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input id="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} required className="px-4 py-3 border border-gray-300 rounded-md text-gray-800" />
              <input id="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="px-4 py-3 border border-gray-300 rounded-md text-gray-800" />
              <input id="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="px-4 py-3 border border-gray-300 rounded-md text-gray-800" />
              <input id="company" type="text" placeholder="Company Name" value={formData.company} onChange={handleChange} className="px-4 py-3 border border-gray-300 rounded-md text-gray-800" />
              <input id="subject" type="text" placeholder="Subject" value={formData.subject} onChange={handleChange} className="md:col-span-2 px-4 py-3 border border-gray-300 rounded-md text-gray-800" />
              <textarea id="message" rows={5} placeholder="Message" value={formData.message} onChange={handleChange} className="md:col-span-2 px-4 py-3 border border-gray-300 rounded-md text-gray-800 resize-y" />
              <button type="submit" className="md:col-span-2 flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md shadow transition">
                <Send size={16} />
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {status === 'success' && <p className="mt-4 text-green-600">Message sent successfully!</p>}
            {status === 'error' && <p className="mt-4 text-red-600">Failed to send message. Please try again later.</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
