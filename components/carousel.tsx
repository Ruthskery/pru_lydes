import React, { useRef, useState, useEffect } from "react";
import { MdArrowForward, MdArrowBack } from "react-icons/md";

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
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const isScrollingRef = useRef(false);

  // Function to scroll and center the card
  const scrollToCard = (index: number) => {
    const container = scrollContainerRef.current;
    const el = cardRefs.current[index];
    if (el && container) {
      isScrollingRef.current = true;

      // Calculate the center offset for the card
      const containerWidth = container.offsetWidth;
      const cardWidth = el.offsetWidth;
      const centerOffset = (containerWidth - cardWidth) / 2;

      // For the first and last card, handle the scroll position carefully
      const scrollPosition =
        index === 0
          ? 0 // Center the first card
          : index === cards.length - 1
          ? container.scrollWidth - containerWidth // Center the last card
          : el.offsetLeft - centerOffset;

      // Scroll the container smoothly
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth", // Ensure smooth scroll behavior
      });

      setTimeout(() => {
        setActiveIndex(index);
        isScrollingRef.current = false;
      }, 500);
    }
  };

  const nextCard = () => {
    if (isScrollingRef.current) return;
    const newIndex = (activeIndex + 1) % cards.length;
    scrollToCard(newIndex);
  };

  const prevCard = () => {
    if (isScrollingRef.current) return;
    const newIndex = (activeIndex - 1 + cards.length) % cards.length;
    scrollToCard(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 4000); // Auto-scroll every 4 seconds
    return () => clearInterval(interval);
  }, [activeIndex]);

  // Function to find the closest card to the center of the viewport
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const center = container.scrollLeft + container.offsetWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    // Find the card that is closest to the center
    cardRefs.current.forEach((el, index) => {
      if (el) {
        const distance = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      }
    });

    // Set the active card to the closest one
    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  useEffect(() => {
    // Attach scroll listener to keep the center card active
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [activeIndex]);

  return (
    <div className="bg-[#14110F] py-16 px-4">
      <h2 className="text-white text-4xl font-bold mb-10 text-center">
        Our Products
      </h2>

      <div className="relative flex flex-col items-center justify-center">
        <div
          ref={scrollContainerRef}
          className="relative flex items-center overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 scrollbar-hide w-full px-8 py-20"
          style={{
            scrollBehavior: "smooth", // Ensure smooth scrolling is applied
          }}
        >
          <div className="flex-shrink-0 w-[20%]" />

          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              onClick={() => scrollToCard(index)}
              className={`nap-center flex-shrink-0 w-80 h-[350px] transition-all duration-700 ease-in-out rounded-2xl flex flex-col items-center justify-start text-center p-5 overflow-hidden border border-white ${
                index === activeIndex
                  ? "scale-110 z-10"
                  : "scale-95 opacity-60"
              }`}
              style={{
                backgroundColor: "white",
                boxShadow: "6px 6px 10px gold",
                // scrollSnapAlign: "center", // Ensures snapping to the center
              }}
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

          <div className="flex-shrink-0 w-[20%]" />
        </div>

        {/* Bottom centered arrows */}
        <div className="mt-5 flex gap-4 items-center justify-center">
          <button
            onClick={prevCard}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
          >
            <MdArrowBack size={30} />
          </button>
          <button
            onClick={nextCard}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
          >
            <MdArrowForward size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
