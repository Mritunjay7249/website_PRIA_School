import React from 'react';

const links = [
  { name: 'Admission Procedure', href: '#/admission/procedure', icon: 'fa-clipboard-list', description: 'Step-by-step guide to our admission process.' },
  { name: 'Admission Forms', href: '#/admission/forms', icon: 'fa-file-alt', description: 'Download the necessary forms for application.' },
  { name: 'Nursery Admission', href: '#/admission/nursery', icon: 'fa-baby', description: 'Specific instructions for our youngest learners.' },
  { name: 'Re-Admission (Sr.Kg to Std-1)', href: '#/admission/re-admission', icon: 'fa-redo', description: 'Information for current students transitioning to Std. 1.' },
  { name: 'Admission for Std. 1st - 8th', href: '#/admission/std1-8', icon: 'fa-school', description: 'Details for admissions into primary and middle school.' },
];

const AdmissionLanding: React.FC = () => (
  <section className="py-20 bg-gray-100 min-h-screen pt-32">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Admissions Hub</h2>
      <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">Welcome to the PRIA School admissions center. Find all the information you need to begin your journey with us.</p>
      <div className="h-1 w-24 bg-[#00adb5] mx-auto mb-12"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {links.map(link => (
          <a href={link.href} key={link.name} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center text-center">
            <i className={`fas ${link.icon} text-4xl text-[#00adb5] mb-4`}></i>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{link.name}</h3>
            <p className="text-gray-600">{link.description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default AdmissionLanding;