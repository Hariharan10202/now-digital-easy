import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Carousel from "../Carousel/Carousel";
import { Button } from "primereact/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-[rgb(210,213,253)] to-[rgb(216,218,248)] via-[rgb(239,232,231)] to-[rgb(254,243,226)] p-20">
      <div className="pb-20">
        <div className="flex gap-10">
          <div className="flex-1 flex flex-col items-start gap-y-10">
            <span className="text-[60px] font-extrabold">
              Hey Business Owners Go Digital Effortlessly
            </span>
            <p className="text-2xl font-semibold leading-[40px]">
              Stop being static! Scale your business by going digital, the easy
              way, with NDE. We’re technology-enabled and structured for speed
              and efficiency to meet the ever-changing needs of today’s
              business.
            </p>
            <button className="flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-bg-primary">
              <span className="text-white text-xl font-extrabold">
                Get Started
              </span>
              <MdOutlineKeyboardArrowRight size={30} color="white" />
            </button>
          </div>
          <div className="flex-1 border-[15px] border-black rounded-[30px]"></div>
        </div>
      </div>
      <div className="p-10">
        <p className="text-2xl font-semibold text-center">
          12,000+ global businesses trust us to transform & grow digitally
        </p>
      </div>
      <Carousel />
    </div>
  );
};

export default Hero;
