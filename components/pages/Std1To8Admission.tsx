
import React from 'react';

const Std1To8Admission: React.FC = () => {
    const documents = [
    "Original Birth Certificate for verification and a photocopy.",
    "Aadhaar Card of the student.",
    "Aadhaar Card of both parents.",
    "Two recent passport-size photographs of the student.",
    "Proof of residence (e.g., utility bill, rent agreement).",
    "Caste Certificate (if applicable).",
    "Previous year's report card.",
    "Original Transfer Certificate (TC) from the previous school."
  ];
  return (
    <section className="py-20 bg-gray-100 min-h-screen pt-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Admission for Std. 1st - 8th</h2>
          <p className="text-gray-600 mb-8 text-center text-lg">Admission to classes 1st to 8th is subject to the availability of seats and the candidate's performance in the entrance assessment.</p>
           <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b-2 border-[#00adb5] pb-2">Required Documents Checklist</h3>
           <div className="columns-1 md:columns-2 gap-x-8">
               <ul className="list-none space-y-3">
                 {documents.map((doc, index) => (
                    <li key={index} className="flex items-start">
                       <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                       <span className="text-gray-700">{doc}</span>
                    </li>
                 ))}
               </ul>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Std1To8Admission;