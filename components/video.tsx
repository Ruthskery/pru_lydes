import dynamic from 'next/dynamic'
import { montserrat, roboto } from '../styles/font'; // adjust as needed

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const Video = () => {
  return (
    <section className="justify-center items-center h-auto bg-[#14110F] dark:bg-[#FCF8EE] grid xl:grid-cols-2">
      
      {/* Video Container */}
      <div className="relative w-full max-w-full aspect-video overflow-hidden p-5 sm:p-8 md:p-10">
        <div className="border-4 border-[#E1B951] rounded-xl overflow-hidden relative w-full h-full">
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=2ZcQLw1Q2ZU"}
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>


      {/* Text Content */}
      <div className="flex flex-col justify-center items-start p-5 sm:p-8 md:p-10 space-y-5">
        <p className={`${montserrat.className} font-extrabold text-[#FBFCFF] dark:text-[#14110F] text-5xl sm:text-6xl text-center md:text-7xl`}>Our Reason is You</p>
        <p className={`${roboto.className} font-extralight text-[#FBFCFF] dark:text-[#14110F] text-justify text-lg sm:text-xl md:text-3xl`}>
          Pru Life UK is an insurance provider that prioritizes customer trust
          and support. The company offers financial assistance and peace of
          mind, especially during challenging times, such as a cancer diagnosis.
          Customers share positive experiences with their advisers, who provide
          personalized guidance without pressure, helping them choose the right
          insurance plans for their needs. PR Life UK emphasizes that their
          customers are at the heart of their mission, aiming to make a
          meaningful difference in their lives.
        </p>
      </div>
    </section>
  );
};

export default Video;
