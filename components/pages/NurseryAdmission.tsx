import React from 'react';

const NurseryAdmission: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 min-h-screen pt-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Instructions for Nursery Admission</h2>
          <div className="grid md:grid-cols-2 gap-8">
              <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-[#00adb5] pb-2">Eligibility Criteria</h3>
                  <p className="text-gray-600">The child should be <strong>3+ years</strong> of age as of 1st June of the academic year.</p>
              </div>
              <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 border-b-2 border-[#00adb5] pb-2">Required Documents</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Original Birth Certificate & Photocopy</li>
                      <li>Aadhaar Card of student & parents</li>
                      <li>Two recent passport-size photos</li>
                      <li>Proof of residence</li>
                  </ul>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NurseryAdmission;