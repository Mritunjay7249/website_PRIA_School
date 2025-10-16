import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <div className="h-1 w-24 bg-[#00adb5] mx-auto mb-12"></div>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/3 flex-shrink-0">
            <img className="rounded-lg shadow-xl mx-auto w-full max-w-sm" src="https://images.cdn-files-a.com/uploads/1885192/400_filter_boost_5c5dac03ac565.jpg" alt="About PRIA School" />
          </div>
          <div className="text-left text-gray-700 leading-relaxed space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Our Heritage and Growth</h3>
              <p>Established on June 18, 1984, PRIA School began its journey with a humble 10 students and two dedicated teachers. Under the management of the Patalganga Rasayani Industries Association, Mohopada, our institution has grown exponentially. As a government-recognized, non-aided school, we offer a complete English-medium education from Nursery to Standard X, strictly adhering to the curriculum prescribed by the Government of Maharashtra.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">A Commitment to Academic and Holistic Excellence</h3>
              <p>Our excellent, devoted, and highly qualified faculty are the cornerstone of our academic success, consistently achieving 100% results in the SSC Examinations since 1993. Beyond academics, we cultivate a vibrant environment where students excel in sports, cultural, and social activities, earning accolades at the district, state, and even national levels.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">State-of-the-Art Facilities for Modern Learning</h3>
              <p>We believe in providing our students with the best resources to thrive, including a marvelous library, a fully-equipped gymnasium, modern science and computer labs, and a dedicated music room. Supported by the unwavering encouragement of the PRIA Committee, we continuously strive for excellence, dedicated to shaping well-rounded individuals prepared for a bright and successful future.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;