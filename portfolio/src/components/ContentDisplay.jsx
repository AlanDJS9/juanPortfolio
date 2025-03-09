import { useEffect, useState } from "react";
import { fetchXMLData } from "../utils/parseXML";
import { theme } from "../utils/theme";
import { RiCloseCircleFill, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const ContentDisplay = () => {
  const [content, setContent] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchXMLData();
      setContent(data);
    };
    loadData();
  }, []);

  const openImage = (images, index) => {
    setSelectedImage(images);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const prevImage = () => {
    if (!selectedImage) return;
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : selectedImage.length - 1));
  };

  const nextImage = () => {
    if (!selectedImage) return;
    setCurrentIndex((prevIndex) => (prevIndex < selectedImage.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <section className="container mx-auto px-6 py-10">
      {content.map((item, index) => (
        <div key={index} className={`${theme.secondary} ${theme.textPrimary} p-6 rounded-lg shadow-lg mb-10`}>
          {/* Title & Subtitle */}
          <h2 className="text-3xl font-bold">{item.title}</h2>
          <h3 className={`text-xl ${theme.textSecondary} mt-2`}>{item.subtitle}</h3>

          {/* Description */}
          <p className={`mt-4 ${theme.textSecondary}`}>{item.description}</p>

          {/* Static Grid Layout for Images */}
          {item.images.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
              {item.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Preview ${i}`}
                  className="w-full h-40 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => openImage(item.images, i)}
                />
              ))}
            </div>
          )}

          {/* YouTube Video Embed */}
          {item.video && (
            <div className="mt-6">
              <iframe
                className="w-full max-w-3xl h-64 md:h-96 mx-auto rounded-lg"
                src={item.video}
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      ))}

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          {/* Close Button (Fixed at Top Right) */}
          <button
            onClick={closeImage}
            className="absolute top-6 right-6 text-white text-5xl hover:text-gray-300 transition-transform z-50"
          >
            <RiCloseCircleFill />
          </button>

          {/* Previous Button (Left Side) */}
          <button
            onClick={prevImage}
            className={`absolute left-6 text-5xl text-white cursor-pointer p-4 ${theme.secondary} rounded-full z-50`}
          >
            <RiArrowLeftSLine />
          </button>

          {/* Image (Real Size, Centered) */}
          <div className="max-w-full max-h-full flex justify-center items-center">
            <img
              src={selectedImage[currentIndex]}
              alt="Expanded View"
              className="max-w-full max-h-full"
            />
          </div>

          {/* Next Button (Right Side) */}
          <button
            onClick={nextImage}
            className={`absolute right-6 text-5xl text-white cursor-pointer p-4 ${theme.secondary} rounded-full z-50`}
          >
            <RiArrowRightSLine />
          </button>
        </div>
      )}
    </section>
  );
};

export default ContentDisplay;
