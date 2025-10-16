import React, { useState } from 'react';
import { galleryImages } from '../constants';

const ImageModal: React.FC<{ imageUrl: string; onClose: () => void }> = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div className="relative" onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt="Enlarged view" className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" />
        <button onClick={onClose} className="absolute -top-4 -right-4 bg-white text-black rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold">×</button>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">PRIA SCHOOL Portfolio</h2>
        <div className="h-1 w-24 bg-[#00adb5] mx-auto mb-12"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div key={index} className="group relative overflow-hidden rounded-full shadow-lg cursor-pointer aspect-square" onClick={() => setSelectedImage(src)}>
              <img src={src} alt={`PRIA School gallery image ${index + 1}`} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center">
                 <i className="fa fa-search-plus text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && <ImageModal imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />}
    </section>
  );
};

export default Gallery;