import ExploreButton from "./explorebtn";
import { FaShieldAlt, FaPiggyBank, FaGraduationCap, FaChartPie, FaFileAlt } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Insurance Planning",
      icon: <FaShieldAlt />,
      caption:
        "Insurance planning is essential to safeguard your assets and loved ones. It provides financial security and peace of mind in times of uncertainty. Our tailored plans ensure you are prepared for life's unexpected events. Start planning today to secure your future. Protect what matters most with our expert guidance. With us, you can navigate life's uncertainties confidently.",
    },
    {
      title: "Retirement Planning",
      icon: <FaPiggyBank />,
      caption:
        "Retirement planning helps you achieve financial independence in your golden years. By investing wisely today, you can enjoy a comfortable and stress-free retirement. Let us guide you in building a secure future. Your retirement dreams are within reach. Begin your journey to financial freedom now. Together, we can make your retirement aspirations a reality.",
    },
    {
      title: "College Educational Fund",
      icon: <FaGraduationCap />,
      caption:
        "A college education is a valuable investment in your child's future. Our educational fund plans help you save systematically to cover tuition and other expenses. Start planning today to give your child the best opportunities. Education is the key to a brighter future. Secure their success with our support. Empower your child to achieve their dreams with confidence.",
    },
    {
      title: "Lifetime Pension Funder",
      icon: <FaChartPie />,
      caption:
        "Ensure a steady income stream throughout your retirement years with out Lifetime Pension Funder.",
    },
    {
      title: "Estate Planning",
      icon: <FaFileAlt />,
      caption:
        "Estate planning ensures your assets are distributed according to your wishes. It minimizes taxes and legal complications for your heirs. Secure your legacy with our expert guidance. Plan today to protect tomorrow. Leave a lasting impact for generations to come. Ensure your loved ones are cared for with a well-structured plan.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-3 grid-rows-4 gap-6">
          {/* Card 1 - spans two rows, top right */}
          <div className="col-start-1 row-start-1 col-span-2">
            <h2 className="font-[Montserrat] text-6xl font-bold mb-4">
              Insurance <span className="text-yellow-500">Plans</span>
            </h2>
            <p className="font-[Roboto] text-lg text-gray-300">
              Explore our tailored insurance solutions designed to protect your
              future and provide peace of mind for you and your loved ones. Our
              services are crafted to meet the unique needs of individuals and
              families alike. We are committed to delivering exceptional value
              and personalized support every step of the way.
            </p>
          </div>
          <div className="col-start-1 row-start-2 flex flex-col gap-4">
            <ExploreButton />
            <p className="text-4xl font-bold leading-tight font-[Montserrat]">
              <span className="text-yellow-500 italic">Secure</span> your{" "}
              <span className="text-yellow-500 italic">family’s future</span>{" "}
              <br /> with confidence.
            </p>
          </div>
          <div className="col-start-3 row-start-1 row-span-2">
            <ServiceCard {...services[0]} />
          </div>

          {/* Card 2 - top middle */}
          <div className="col-start-2 row-start-2 row-span-2">
            <ServiceCard {...services[1]} />
          </div>

          {/* Bottom row */}
          <div className="col-start-1 row-start-3 row-span-2">
            <ServiceCard {...services[2]} />
          </div>
          <div className="col-start-2 row-start-4">
            <ServiceCard {...services[3]} />
          </div>
          <div className="col-start-3 row-start-3 row-span-2">
            <ServiceCard {...services[4]} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({
  title,
  icon,
  caption,
}: {
  title: string;
  icon: React.ReactNode;
  caption: string;
}) {
  return (
    <div className="bg-[#1f1f1f] p-7 rounded-xl shadow-md h-full flex flex-col">
      <div className="flex items-center mb-4 text-yellow-500 text-3xl">
        {icon}
        <h3 className="text-2xl font-semibold ml-2 text-white">{title}</h3>
      </div>
      <p className="text-gray-300 text-lg">{caption}</p>
    </div>
  );
}