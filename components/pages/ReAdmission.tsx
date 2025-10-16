import React from 'react';

const ReAdmission: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 min-h-screen pt-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Re-Admission from Sr.Kg to Std-1</h2>
          <p className="text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">All students currently studying in Sr. Kg. in our school will be automatically considered for admission to Std. 1. Parents are requested to complete the re-admission formalities at the school office as per the circular issued at the end of the academic year to confirm their child's seat.</p>
        </div>
      </div>
    </section>
  );
};

export default ReAdmission;