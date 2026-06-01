import React from 'react';
import { profileData } from '../data';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-8 md:px-24 bg-bg-main border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-4 mb-12 justify-center">
          <div className="w-12 h-0.5 bg-gray-300"></div>
          <span className="text-xs font-bold tracking-widest text-accent-red uppercase">Get In Touch</span>
          <div className="w-12 h-0.5 bg-gray-300"></div>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-16 text-center">
          Let's Talk <span className="text-gray-400">Together</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-16">
          {/* Info Kontak Kiri */}
          <div className="md:w-1/3 space-y-8">
            <div className="flex items-start space-x-5">
              <div className="w-12 h-12 bg-white border border-gray-100 flex shrink-0 items-center justify-center text-accent-red shadow-sm">
                <FaEnvelope size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email</h4>
                <p className="text-text-main font-medium text-sm">{profileData.contact.email}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-5">
              <div className="w-12 h-12 bg-white border border-gray-100 flex shrink-0 items-center justify-center text-accent-red shadow-sm">
                <FaPhoneAlt size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Phone</h4>
                <p className="text-text-main font-medium text-sm">{profileData.contact.phone}</p>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <div className="w-12 h-12 bg-white border border-gray-100 flex shrink-0 items-center justify-center text-accent-red shadow-sm">
                <FaMapMarkerAlt size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Location</h4>
                <p className="text-text-main font-medium text-sm leading-relaxed">{profileData.contact.location}</p>
              </div>
            </div>
          </div>

          {/* Form Kontak Kanan */}
          <div className="md:w-2/3">
            {/* Action form diarahkan ke formspree agar fungsi email berjalan tanpa backend */}
            <form action="https://formspree.io/f/mbdbvabn" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required
                  className="w-full px-5 py-4 bg-white border border-gray-100 focus:outline-none focus:border-accent-red transition-colors text-sm shadow-sm"
                />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required
                  className="w-full px-5 py-4 bg-white border border-gray-100 focus:outline-none focus:border-accent-red transition-colors text-sm shadow-sm"
                />
              </div>
              <input 
                type="text" 
                name="subject" 
                placeholder="Subject" 
                required
                className="w-full px-5 py-4 bg-white border border-gray-100 focus:outline-none focus:border-accent-red transition-colors text-sm shadow-sm"
              />
              <textarea 
                name="message" 
                rows="5" 
                placeholder="Your Message" 
                required
                className="w-full px-5 py-4 bg-white border border-gray-100 focus:outline-none focus:border-accent-red transition-colors text-sm resize-none shadow-sm"
              ></textarea>
              <button 
                type="submit"
                className="px-10 py-4 bg-text-main text-white text-xs font-bold tracking-widest uppercase hover:bg-accent-red transition-colors duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;