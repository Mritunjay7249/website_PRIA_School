
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Contact</h2>
            <div className="h-1 w-24 bg-[#00adb5] mx-auto mb-12"></div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="h-full bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start">
                  <i className="fas fa-map-marker-alt text-[#00adb5] text-xl mt-1 mr-4"></i>
                  <span>PATALGANGA & RASAYANI INDUSTRIES’ ASSOCIATION (PRIA) SCHOOL</span>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-envelope text-[#00adb5] text-xl mt-1 mr-4"></i>
                  <a href="mailto:priaschoolmohopada@rediffmail.com" className="hover:text-[#00adb5] transition-colors">priaschoolmohopada@rediffmail.com</a>
                </div>
              </div>
              <div className="mt-8 h-64 bg-gray-300 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/73.1847,18.8942,14/600x400?access_token=pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p0MG01MXRqMW45cjQzb2R6b2ptc3J4MSJ9.zA2W0IkI0cI4ic2G3TqaTw')"}}>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="h-full bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00adb5]" required />
                  <input type="tel" placeholder="Phone" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00adb5]" />
                </div>
                <div className="mb-4">
                  <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00adb5]" required />
                </div>
                <div className="mb-4">
                  <textarea placeholder="Message" rows={5} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00adb5]"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#00adb5] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#009a9f] transition-colors duration-300">
                  Contact Us
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
