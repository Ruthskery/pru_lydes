import React, { useState } from "react";
import { Package } from "lucide-react";
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

// Add categories to each card including rowCategory
const cards = [
  {
    image:
      "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/couple-with-daughter-picnic766x432.jpg",
    title: "<span class='text-red-500'>PRU</span>Link Assurance Account Plus",
    description:
      "An investment-linked life insurance plan that offers financial growth with maximum protection.",
    category: ["Category 1", "Category 2", "Category 3", "Category 5", "Category 6"],
    rowCategory: "Investment - Linked Plans",
  },
  {
    image:
      "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/girl-jogging-outdoors_766X432.jpg",
    title: "<span class='text-red-500'>PRU</span>Personal Accident",
    description:
      "Get a financial shield against the unexpected. PRU Personal Accident is an accident and disability plan designed to cover injury, disability, or death.",
    category: "Category 1",
    rowCategory: "Accident Plans",
  },
  {
    image:
      "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/family-outdoors766x432.jpg",
    title: "<span class='text-red-500'>PRU</span>Link Exact Protector",
    description:
      "An investment-linked life insurance plan that provides financial protection, exactly the way you want it.",
    category: ["Category 1", "Category 2", "Category 3", "Category 4"],
    rowCategory: "Investment - Linked Plans",
  },
  {
    image:
      "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/young-professionals-walking-down-stairs-766x432.jpg",
    title: "<span class='text-red-500'>PRU</span>Link Elite Protector Series",
    description:
      "Your financial goals become more manageable and attainable with the PRULink Elite Protector Series, an investment-linked life insurance plan with greater potential for wealth accumulation and maximum protection.",
    category: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6"],
    rowCategory: "Investment - Linked Plans",
  },
   {
    image: "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/young-man-hospital-bed.png",
    title: "<span class='text-red-500'>PRU</span>Health Prime",
    description: "PRUHealth Prime is an investment-linked life and health insurance plan designed to help ease the financial burden of having cancer.",
    category: ["Category 2", "Category 5"],
    rowCategory: "Investment - Linked Plans",
  },
  {
    image: "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/Product-Page-Web.png",
    title: "<span class='text-red-500'>PRU</span>Health FamLove",
    description: "An affordable yearly renewable term protection plan which enables you to share coverage against critical illnesses to eligible family members with just one plan.",
    category: "Category 5",
    rowCategory: "Traditional Plans",
  },
  {
    image: "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/PLW-CorpWeb-Assets_Revised_1366x560.jpg",
    title: "<span class='text-red-500'>PRU</span>Love Wealth",
    description: "A guarantee of earnings and legacy for your family whatever life takes you.",
    category: ["Category 1", "Category 2", "Category 3", "Category 6", "Category 7"],
    rowCategory: "Traditional Plans",
  },
  {
    image: "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/PLI-CorpWeb-Assets_Revised_1366x560.jpg",
    title: "<span class='text-red-500'>PRU</span>Lifetime Income",
    description: "Get 5% guaranteed annual payout for life and 200% lifetime coverage for you & your family!",
    category: ["Category 1", "Category 2", "Category 3", "Category 4", "Category 6"],
    rowCategory: "Traditional Plans",
  },
  {
    image: "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/PLFL-CorpWeb-Assets_Revised_1366x560.jpg",
    title: "<span class='text-red-500'>PRU</span>Love for Life",
    description: "Affordable premiums, payable in as easy as 5 years. Whole life insurance with guaranteed coverage till age 100 – That's PRULove for Life!",
    category: ["Category 1","Category 4"],
    rowCategory: "Traditional Plans",
  },
  {
    image: "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/man-smiling-at-phone.jpg",
    title: "<span class='text-red-500'>PRU</span>Life Your Term",
    description: "PRULife Your Term is our most affordable and yearly renewable term life insurance that lets you fully live your life.",
    category: ["Category 1", "Category 5"],
    rowCategory: "Traditional Plans",
  },
  {
    image: "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/PMF-CorpWeb-Assets_V1_766x432.jpg",
    title: "<span class='text-red-500'>PRU</span>Million Flex",
    description: "A 2-year pay plan that allocates more premiums to chosen fund. Pay month, quarterly, semi-annually, or annually!",
    category: ["Category 2", "Category 3", "Category 6"],
    rowCategory: "Investment - Linked Plans",
  },
  {
    image: "https://www.prulifeuk.com.ph/export/sites/prudential-ph/en/.galleries/images/businessman-thinking766x432.jpg",
    title: "<span class='text-red-500'>PRU</span>Millionaire",
    description: "An investment-linked life insurance plan that maximizes the value of investment with a superior selection of funds",
    category: "Category 4",
    rowCategory: "Investment - Linked Plans",
  },
];

// Mapping categories to labels
const categoryLabels: Record<
  "Category 1" | "Category 2" | "Category 3" | "Category 4" | "Category 5" | "Category 6" | "Category 7",
  string
> = {
  "Category 1": "Protection",
  "Category 2": "Children's Education",
  "Category 3": "Retirement",
  "Category 4": "Medium to Long Term Goals",
  "Category 5": "Ready Fund for Critical Illness",
  "Category 6": "Estate Conservation",
  "Category 7": "Short Term Goals",
};

type CategoryKey = keyof typeof categoryLabels | null;
type Card = typeof cards[number];

const CardCarousel = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("Category 1");
  const [selectedRowCategory, setSelectedRowCategory] = useState<string | null>(null);
  const [showAllCategories, setShowAllCategories] = useState(false);

  // Number of categories to show initially
  const initialCategoriesCount = 4;

  // Get relevant row categories for selected category
  const getRelevantRowCategories = (category: CategoryKey) => {
    if (!category) return [];
    return Array.from(
      new Set(
        cards
          .filter(card => {
            const categories = Array.isArray(card.category) ? card.category : [card.category];
            return categories.includes(category);
          })
          .map(card => card.rowCategory)
      )
    );
  };

  // Get categories to display based on showAllCategories state
  const displayedCategories = showAllCategories 
    ? Object.entries(categoryLabels)
    : Object.entries(categoryLabels).slice(0, initialCategoriesCount);

  // Group cards by category, then by rowCategory
  const groupedCards = cards.reduce<Record<string, Record<string, Card[]>>>(
    (acc, card) => {
      const rowCategory = card.rowCategory ?? "Uncategorized";
      const categories = Array.isArray(card.category) ? card.category : [card.category];
      categories.forEach((cat) => {
        if (!acc[cat]) acc[cat] = {};
        if (!acc[cat][rowCategory]) acc[cat][rowCategory] = [];
        acc[cat][rowCategory].push(card);
      });
      return acc;
    },
    {}
  );

  // Filter cards based on selections
  let filteredCards = selectedCategory
    ? { [selectedCategory]: groupedCards[selectedCategory] || {} }
    : groupedCards;

  if (selectedRowCategory) {
    filteredCards = Object.fromEntries(
      Object.entries(filteredCards).map(([category, rowGroups]) => [
        category,
        Object.fromEntries(
          Object.entries(rowGroups).filter(([rowCat]) => rowCat === selectedRowCategory)
        ),
      ])
    );
  }

  return (
    <div className={`${montserrat.variable} ${roboto.variable} bg-[#14110F] dark:bg-[#FCF8EE] py-8 sm:py-12 md:py-14 lg:py-16 xl:py-20 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-20`}>
      {/* Header Section */}
      <div className="flex items-center justify-center md:justify-start md:mx-4 lg:mx-8 xl:mx-20">
        <Package className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-[#E1B951] mr-3 sm:mr-4" />
        <h2 className="text-white dark:text-[#14110f] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-[Montserrat]">
          Our Products
        </h2>
      </div>
      
      <hr className="border-2 border-[#E1B951] mt-6 sm:mt-8 md:mt-10 lg:mt-12 mx-2 sm:mx-4 md:mx-5" />

      {/* Filter Buttons Section */}
      <div className="mt-6 sm:mt-8 md:mt-10">
        {/* Category Section */}
        <div className="bg-[#1A1512] dark:bg-[#EACD86] rounded-xl p-4 sm:p-6 md:p-8 border border-[#E1B951]/20">
          <h3 className="text-[#E1B951] dark:text-[#14110F] text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-center">
            Select Your Financial Goal
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSelectedRowCategory(null);
              }}
              className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg border-2 font-semibold text-xs sm:text-sm md:text-base 
                transition-all duration-300 ${
                !selectedCategory
                  ? "bg-[#E1B951] dark:bg-black dark:text-[#EACD86] border-[#E1B951] dark:border-[#14110F] text-black"
                  : "bg-transparent  border-[#E1B951] dark:border-[#14110F] text-[#E1B951] dark:text-[#14110F] hover:bg-[#E1B951]/10"
              }`}
            >
              Show All
            </button> 
            {displayedCategories.map(([categoryKey, label]) => (
              <button
                key={categoryKey}
                onClick={() => {
                  setSelectedCategory(categoryKey as CategoryKey);
                  setSelectedRowCategory(null);
                }}
                className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg border-2 font-semibold text-xs sm:text-sm md:text-base 
                  transition-all duration-300 ${
                  selectedCategory === categoryKey
                    ? "bg-[#E1B951] dark:bg-black border-[#E1B951] dark:border-[#14110F] text-black dark:text-[#EACD86]"
                    : "bg-transparent border-[#E1B951] dark:border-[#14110F] text-[#E1B951] dark:text-[#14110F] hover:bg-[#E1B951]/10"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* See More Button */}
          {Object.keys(categoryLabels).length > initialCategoriesCount && (
            <div className="mt-4 text-center">
              <button
                onClick={() => setShowAllCategories(!showAllCategories)}
                className="text-[#E1B951] dark:text-[#14110F] hover:text-[#E1B951]/80 text-sm sm:text-base font-semibold 
                  flex items-center gap-2 mx-auto transition-all duration-300"
              >
                {showAllCategories ? (
                  <>
                    Show Less
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  </>
                ) : (
                  <>
                    See More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Row Category Section - Only show when a category is selected */}
        {selectedCategory && (
          <div className="mt-4 sm:mt-6 md:mt-8">
            <h3 className="text-[#E1B951] dark:text-[#14110F] text-base sm:text-lg md:text-xl font-semibold mb-4 text-center">
              Choose Product Type
            </h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
              {getRelevantRowCategories(selectedCategory).map((rowCategory) => (
                <button
                  key={rowCategory}
                  onClick={() => setSelectedRowCategory(rowCategory)}
                  className={`text-xs sm:text-sm md:text-base font-semibold transition-all duration-300 relative
                    ${selectedRowCategory === rowCategory
                      ? "text-[#E1B951]"
                      : "text-[#E1B951] dark:text-[#14110F]"
                    }
                    after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] 
                    after:bg-red-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300
                    ${selectedRowCategory === rowCategory ? "after:scale-x-100" : ""}`}
                >
                  {rowCategory}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Cards Section */}
      {selectedCategory === null ? (
        // Show all cards in a single grid when "Show All" is clicked
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-[#1f1d1b] dark:bg-[#F3E3BA] rounded-xl shadow-lg p-3 sm:p-4 md:p-5 text-center 
                  transform transition duration-300 hover:scale-[1.02]"
              >
                <img
                  src={card.image}
                  alt="Card visual"
                  className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded-lg mb-3 sm:mb-4"
                />
                <h2
                  className="text-sm sm:text-base md:text-lg font-bold font-[Montserrat] text-white dark:text-[#14110F] mb-2"
                  dangerouslySetInnerHTML={{ __html: card.title }}
                />
                <p className="text-gray-400 dark:text-[#14110F] text-xs sm:text-sm md:text-base font-[Roboto]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Show cards grouped by rowCategory when a category is selected
        Object.entries(filteredCards).map(([categoryKey, rowGroups]) => (
          <div
            key={categoryKey}
            className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-20"
          >
            {Object.entries(rowGroups).map(([rowCategory, cards]) => (
              <div key={rowCategory} className="mb-6 sm:mb-8 md:mb-10">
                <h4 className="text-yellow-400 dark:text-[#14110F] text-base sm:text-lg md:text-xl font-semibold font-[Montserrat] mb-3 sm:mb-4 md:mb-6">
                  {rowCategory}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                  {cards.map((card, index) => (
                    <div
                      key={index}
                      className="bg-[#1f1d1b] dark:bg-[#F3E3BA] rounded-xl shadow-lg p-3 sm:p-4 md:p-5 text-center 
                        transform transition duration-300 hover:scale-[1.02]"
                    >
                      <img
                        src={card.image}
                        alt="Card visual"
                        className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded-lg mb-3 sm:mb-4"
                      />
                      <h2
                        className="text-sm sm:text-base md:text-lg font-bold font-[Montserrat] text-white dark:text-black mb-2"
                        dangerouslySetInnerHTML={{ __html: card.title }}
                      />
                      <p className="text-gray-400 dark:text-[#14110F] text-xs sm:text-sm md:text-base font-[Roboto]">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default CardCarousel;