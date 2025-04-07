import React, { useState, useRef, useEffect } from "react";

const Home = () => {
  const carouselItems = [
    { image: "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/girl-jogging-outdoors_766X432.jpg", title: "<span class='text-red-500'>PRU</span>Personal Accident", description: "Get a financial shield against the unexpected. PRU Personal Accident is an accident and disability plan designed to cover injury, disability, or death." },
    { image: "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/couple-with-daughter-picnic766x432.jpg", title: "<span class='text-red-500'>PRU</span>Link Assurance Account Plus", description: "An investment-linked life insurance plan that offers financial growth with maximum protection." },
    { image: "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/family-outdoors766x432.jpg", title: "<span class='text-red-500'>PRU</span>Link Exact Protector", description: "An investment-linked life insurance plan that provides financial protection, exactly the way you want it." },
    { image: "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/young-professionals-walking-down-stairs-766x432.jpg", title: "<span class='text-red-500'>PRU</span>Link Elite Protector Series", description: "Your financial goals become more manageable and attainable with the PRULink Elite Protector Series, an investment-linked life insurance plan with greater potential for wealth accumulation and maximum protection." },
    { image: "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/mother-hugging-daughter.jpg", title: "<span class='text-red-500'>PRU</span>Wellness", description: "Focus on recovery and worry less about the finances with PRUWellness—a health insurance product that helps ease your financial burden of hospital confinement due to injury or dread disease." },
    { image: "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/young-man-hospital-bed.png", title: "<span class='text-red-500'>PRU</span>Health Prime", description: "PRUHealth Prime is an investment-linked life and health insurance plan designed to help ease the financial burden of having cancer." },
    { image: "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/Product-Page-Web.png", title: "<span class='text-red-500'>PRU</span>Health FamLove", description: "An affordable yearly renewable term protection plan which enables you to share coverage against critical illnesses to eligible family members with just one plan." },
    { image: "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/PLW-CorpWeb-Assets_Revised_1366x560.jpg", title: "<span class='text-red-500'>PRU</span>Love Wealth", description: "A guarantee of earnings and legacy for your family whatever life takes you." },
    { image: "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/PLI-CorpWeb-Assets_Revised_1366x560.jpg", title: "<span class='text-red-500'>PRU</span>Lifetime Income", description: "Get 5% guaranteed annual payout for life and 200% lifetime coverage for you & your family!" },
    { image: "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/PLFL-CorpWeb-Assets_Revised_1366x560.jpg", title: "<span class='text-red-500'>PRU</span>Love for Life", description: "Affordable premiums, payable in as easy as 5 years. Whole life insurance with guaranteed coverage till age 100 – That’s PRULove for Life!" }
  ];

  const loopItems = [...carouselItems, ...carouselItems];
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        if (scrollRef.current) {
          if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
            scrollRef.current.scrollLeft = 0; // Reset scroll position
          } else {
            scrollRef.current.scrollLeft += 3;
          }
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
                <h2 className="text-xl font-bold text-gray-800" dangerouslySetInnerHTML={{ __html: item.title }}></h2>
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
