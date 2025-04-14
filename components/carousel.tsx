import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const cards = [
  {
    image:
      "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/girl-jogging-outdoors_766X432.jpg",
    title: "<span class='text-red-500'>PRU</span>Personal Accident",
    description:
      "Get a financial shield against the unexpected. PRU Personal Accident is an accident and disability plan designed to cover injury, disability, or death.",
  },
  {
    image:
      "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/couple-with-daughter-picnic766x432.jpg",
    title:
      "<span class='text-red-500'>PRU</span>Link Assurance Account Plus",
    description:
      "An investment-linked life insurance plan that offers financial growth with maximum protection.",
  },
  {
    image:
      "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/family-outdoors766x432.jpg",
    title: "<span class='text-red-500'>PRU</span>Link Exact Protector",
    description:
      "An investment-linked life insurance plan that provides financial protection, exactly the way you want it.",
  },
  {
    image:
      "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/young-professionals-walking-down-stairs-766x432.jpg",
    title:
      "<span class='text-red-500'>PRU</span>Link Elite Protector Series",
    description:
      "Your financial goals become more manageable and attainable with the PRULink Elite Protector Series, an investment-linked life insurance plan with greater potential for wealth accumulation and maximum protection.",
  },
  {
    image:
      "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/mother-hugging-daughter.jpg",
    title: "<span class='text-red-500'>PRU</span>Wellness",
    description:
      "Focus on recovery and worry less about the finances with PRUWellness—a health insurance product that helps ease your financial burden of hospital confinement due to injury or dread disease.",
  },
  {
    image:
      "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/young-man-hospital-bed.png",
    title: "<span class='text-red-500'>PRU</span>Health Prime",
    description:
      "PRUHealth Prime is an investment-linked life and health insurance plan designed to help ease the financial burden of having cancer.",
  },
  {
    image:
      "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/Product-Page-Web.png",
    title: "<span class='text-red-500'>PRU</span>Health FamLove",
    description:
      "An affordable yearly renewable term protection plan which enables you to share coverage against critical illnesses to eligible family members with just one plan.",
  },
  {
    image:
      "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/PLW-CorpWeb-Assets_Revised_1366x560.jpg",
    title: "<span class='text-red-500'>PRU</span>Love Wealth",
    description:
      "A guarantee of earnings and legacy for your family whatever life takes you.",
  },
  {
    image:
      "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/PLI-CorpWeb-Assets_Revised_1366x560.jpg",
    title: "<span class='text-red-500'>PRU</span>Lifetime Income",
    description:
      "Get 5% guaranteed annual payout for life and 200% lifetime coverage for you & your family!",
  },
  {
    image:
      "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/PLFL-CorpWeb-Assets_Revised_1366x560.jpg",
    title: "<span class='text-red-500'>PRU</span>Love for Life",
    description:
      "Affordable premiums, payable in as easy as 5 years. Whole life insurance with guaranteed coverage till age 100 – That’s PRULove for Life!",
  },
];

const CardCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToCard = (index: number) => {
    const el = cardRefs.current[index];
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setTimeout(() => setActiveIndex(index), 300);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 3000); // auto-scroll every 3 seconds
  
    return () => clearInterval(interval); // cleanup on unmount
  }, [activeIndex]);

  const nextCard = () => {
    const newIndex = (activeIndex + 1) % cards.length;
    scrollToCard(newIndex);
  };

  const prevCard = () => {
    const newIndex = (activeIndex - 1 + cards.length) % cards.length;
    scrollToCard(newIndex);
  };

  const handleCardClick = (index: number) => {
    scrollToCard(index);
  };

  return (
    <div className="w-[95vw] mx-auto px-[10px] py-12 overflow-visible">
      <div className="flex items-center justify-between">
        <button
          onClick={prevCard}
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
          <ArrowLeft />
        </button>

        <div
          className="relative flex items-center overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 scrollbar-hide w-full"
          style={{
            overflowY: "visible",
            paddingTop: "20px",
            paddingBottom: "20px",
            scrollBehavior: "smooth",
          }}
        >
          <div className="flex-shrink-0 w-[50%]" />

          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className={`snap-center flex-shrink-0 w-80 h-auto transition-all duration-500 rounded-2xl flex flex-col items-center justify-start text-center p-5 bg-white overflow-hidden ${
                index === activeIndex
                  ? "scale-110 opacity-100 z-10 shadow-2xl bg-red-50"
                  : "scale-95 opacity-60"
              }`}
              onClick={() => handleCardClick(index)}  // Added click handler
            >
              <img
                src={card.image}
                alt="Card visual"
                className="w-full h-40 object-cover rounded-xl mb-3"
              />
              <h2
                className="text-lg font-bold"
                dangerouslySetInnerHTML={{ __html: card.title }}
              />
              <p className="text-gray-600 text-sm mt-2">{card.description}</p>
            </div>
          ))}

          <div className="flex-shrink-0 w-[50%]" />
        </div>

        <button
          onClick={nextCard}
          className="p-2 rounded-full hover:bg-gray-200 transition"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
