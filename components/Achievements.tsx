 
import React from 'react';

const achievementsList = [
  {
    icon: 'fas fa-user-graduate',
    title: 'Consistent Academic Excellence',
    description: 'We have proudly maintained a 100% success rate in the SSC Examinations since 1993, with an ever-increasing number of students securing distinctions.'
  },
  {
    icon: 'fas fa-trophy',
    title: 'Sporting Champions',
    description: 'Our students actively participate and excel in sports, achieving recognition and winning accolades at the district, state, and national levels.'
  }
];

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">School Achievements</h2>
        <div className="h-1 w-24 bg-[#00adb5] mx-auto mb-12"></div>
        <div className="max-w-4xl mx-auto text-left">
          <ul className="space-y-8">
            {achievementsList.map((item, index) => (
              <li key={index} className="bg-gray-50 p-6 rounded-lg shadow-md flex items-start space-x-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#00adb5] text-white flex items-center justify-center">
                    <i className={`${item.icon} text-3xl`}></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Achievements;