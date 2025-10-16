import React from 'react';

const AdmissionProcedure: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 min-h-screen pt-32">
      <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">Admission Procedure</h2>
            <ol className="relative border-l border-gray-300 space-y-10 ml-4">
              <li className="ml-8">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-[#00adb5] rounded-full -left-4 ring-8 ring-white">
                  <span className="text-white font-bold">1</span>
                </span>
                <h3 className="text-xl font-semibold text-gray-900">Enquiry</h3>
                <p className="mt-1 text-gray-600">Parents are welcome to visit the school office during working hours (9:00 AM to 1:00 PM) to inquire about the admission process and availability of seats.</p>
              </li>
              <li className="ml-8">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-[#00adb5] rounded-full -left-4 ring-8 ring-white">
                    <span className="text-white font-bold">2</span>
                </span>
                <h3 className="text-xl font-semibold text-gray-900">Application Form</h3>
                <p className="mt-1 text-gray-600">Obtain the admission form from the school office or download it from our website. The form must be filled out completely and accurately.</p>
              </li>
              <li className="ml-8">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-[#00adb5] rounded-full -left-4 ring-8 ring-white">
                    <span className="text-white font-bold">3</span>
                </span>
                <h3 className="text-xl font-semibold text-gray-900">Submission & Interaction</h3>
                <p className="mt-1 text-gray-600">Submit the completed form along with all required documents. An informal interaction for Nursery students or a basic entrance assessment for higher classes will be scheduled.</p>
              </li>
               <li className="ml-8">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-[#00adb5] rounded-full -left-4 ring-8 ring-white">
                    <span className="text-white font-bold">4</span>
                </span>
                <h3 className="text-xl font-semibold text-gray-900">Confirmation</h3>
                <p className="mt-1 text-gray-600">The list of selected students will be displayed on the school notice board. Parents will also be notified via email or phone.</p>
              </li>
            </ol>
          </div>
      </div>
    </section>
  );
};

export default AdmissionProcedure;