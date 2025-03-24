import React, { useState, useRef, useEffect } from "react";

const Home = () => {
  const carouselItems = [
    { image: "https://source.unsplash.com/600x400/?nature", title: "Beautiful Nature", description: "Experience the serenity of nature with stunning landscapes." },
    { image: "https://source.unsplash.com/600x400/?technology", title: "Innovative Tech", description: "Explore the latest advancements in technology and innovation." },
    { image: "https://source.unsplash.com/600x400/?travel", title: "Travel the World", description: "Discover breathtaking destinations around the globe." },
    { image: "https://source.unsplash.com/600x400/?food", title: "Delicious Cuisine", description: "Taste mouth-watering dishes from different cultures." },
    { image: "https://source.unsplash.com/600x400/?city", title: "Urban Exploration", description: "Get lost in the vibrant life of bustling cities." },
    { image: "https://source.unsplash.com/600x400/?wildlife", title: "Wildlife Wonders", description: "Witness the beauty of wildlife in its natural habitat." },
    { image: "https://source.unsplash.com/600x400/?sports", title: "Sports and Action", description: "Feel the thrill of sports and extreme adventures." },
    { image: "https://source.unsplash.com/600x400/?architecture", title: "Architectural Marvels", description: "Admire the creativity and craftsmanship of structures." },
    { image: "https://source.unsplash.com/600x400/?ocean", title: "Mystical Oceans", description: "Dive deep into the mysterious and vast oceans." }
  ];

  const loopItems = [...carouselItems, ...carouselItems];
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += 3;
        }
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div className="max-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative w-full max-w-screen py-10 overflow-hidden bg-transparent" ref={scrollRef}>
        <div className="flex w-max space-x-6">
          {loopItems.map((item, index) => (
            <div
              key={index}
              className={`w-[90vw] max-w-[200px] md:max-w-md flex-shrink-0 bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 ${hoveredIndex === index ? 'scale-110 mx-6' : 'mx-4'}`}
              onMouseEnter={() => {
                setIsPaused(true);
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setIsPaused(false);
                setHoveredIndex(null);
              }}
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
