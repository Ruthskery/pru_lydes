import React, { useRef, useState, useEffect } from "react";
import { Package } from "lucide-react";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

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
    title: "<span class='text-red-500'>PRU</span>Link Assurance Account Plus",
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
    title: "<span class='text-red-500'>PRU</span>Link Elite Protector Series",
    description:
      "Your financial goals become more manageable and attainable with the PRULink Elite Protector Series, an investment-linked life insurance plan with greater potential for wealth accumulation and maximum protection.",
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
  const isButtonClickRef = useRef(false); // Track if the button was clicked

  // Function to scroll and center the card
  const scrollToCard = (index: number) => {
    const container = scrollContainerRef.current;
    const el = cardRefs.current[index];

    if (el && container) {
      isButtonClickRef.current = true;

      const containerWidth = container.offsetWidth;
      const cardWidth = el.offsetWidth;
      const centerOffset = (containerWidth - cardWidth) / 2;

      // Apply left and right padding once to support centering first/last cards
      container.style.paddingLeft = `${centerOffset}px`;
      container.style.paddingRight = `${centerOffset}px`;

      // Calculate scroll position
      const scrollPosition = el.offsetLeft - centerOffset;

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        setActiveIndex(index);
        isButtonClickRef.current = false;
      }, 300);
    }
  };

  const nextCard = () => {
    if (isScrollingRef.current || isButtonClickRef.current) return;
    const newIndex = (activeIndex + 1) % cards.length;
    scrollToCard(newIndex);
  };

  const prevCard = () => {
    if (isScrollingRef.current || isButtonClickRef.current) return;
    const newIndex = (activeIndex - 1 + cards.length) % cards.length;
    scrollToCard(newIndex);
  };

  useEffect(() => {
    scrollToCard(0); // Center the first card on initial load
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isButtonClickRef.current) nextCard();
    }, 4000); // Auto-scroll every 4 seconds
    return () => clearInterval(interval);
  }, [activeIndex]);

  // Function to find the closest card to the center of the viewport
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container || isButtonClickRef.current) return;

    const center = container.scrollLeft + container.offsetWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((el, index) => {
      if (el) {
        const distance = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      }
    });

    // Set the active card to the closest one to the center
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
    <div
      className={`${montserrat.variable} ${roboto.variable} bg-[#14110F] dark:bg-[#FCF8EE] py-16 px-4`}
    >
      <div className="flex items-center md:mx-20 justify-center md:justify-start">
        <Package className="w-15 h-15 text-[#E1B951] mr-4" />
        <h2 className="text-white dark:text-[#14110f] text-4xl md:text-7xl  font-extrabold font-[Montserrat]">
          Our Products
        </h2>
      </div>
      <hr className="border-2 text-[#E1B951] mt-10 mx-5"/>
      <div className="relative flex flex-col items-center justify-center">
        <div
          ref={scrollContainerRef}
          className="relative flex items-center overflow-x-auto gap-6 scrollbar-hide w-full px-8 py-20"
          style={{
            scrollBehavior: isButtonClickRef.current ? "auto" : "smooth", // Disable snap on button click and enable on natural scroll
            scrollSnapType: isButtonClickRef.current ? "none" : "x mandatory", // Disable snap when using buttons
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
              className={`nap-center flex-shrink-0 w-80 h-[380px] transition-all duration-700 ease-in-out rounded-2xl flex flex-col items-center justify-start text-center p-5 overflow-hidden border border-white ${
                index === activeIndex ? "scale-110 z-10" : "scale-95 opacity-60"
              }`}
              style={{
                backgroundColor: "white",
                boxShadow: index === activeIndex ? "0px 6px 10px gray" : "none", // Apply dark gray backshadow only to the active card
                scrollSnapAlign: "center", // Ensures snapping to the center
              }}
            >
              <img
                src={card.image}
                alt="Card visual"
                className="w-full h-40 object-cover rounded-xl mb-3"
              />
              <h2
                className="text-lg font-bold font-[Montserrat]"
                dangerouslySetInnerHTML={{ __html: card.title }}
              />
              <p className="text-gray-600 text-sm font-[Roboto] mt-2">
                {card.description}
              </p>
            </div>
          ))}

          <div className="flex-shrink-0 w-[20%]" />
        </div>

        {/* Bottom centered arrows */}
        <div className="mt-5 flex gap-4 items-center justify-center">
          <button
            onClick={prevCard}
            className="bg-white dark:bg-black dark:text-white p-2 rounded-full hover:bg-gray-200 dark:hover:bg-black/80"
          >
            <MdArrowBack size={30} />
          </button>
          <button
            onClick={nextCard}
            className="bg-white dark:bg-black dark:text-white p-2 rounded-full hover:bg-gray-200 dark:hover:bg-black/80"
          >
            <MdArrowForward size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;