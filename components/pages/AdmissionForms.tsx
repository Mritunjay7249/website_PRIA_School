import React from 'react';

const AdmissionForms: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 min-h-screen pt-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center bg-white p-8 md:p-12 rounded-lg shadow-lg">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Admission Forms</h2>
             <p className="text-gray-600 mb-8 text-lg">Click the button below to download the admission form for the upcoming academic year.</p>
             <a href="#" className="inline-block bg-[#00adb5] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#009a9f] transition-colors duration-300 shadow-md text-lg">
                <i className="fas fa-download mr-2"></i>
                Download Form
             </a>
          </div>
      </div>
    </section>
  );
};

export default AdmissionForms;