import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Carousel from "../Carousel/Carousel";
import { Button } from "primereact/button";
import Box from "../ui/Box";

const Hero = () => {
  return (
    <Box className="bg-gradient-to-r from-[rgb(210,213,253)] to-[rgb(216,218,248)] via-[rgb(239,232,231)] to-[rgb(254,243,226)]">
      <div className="lg:pb-20 pb-10">
        <div className="flex gap-10 flex-col-reverse lg:flex-row">
          <div className="flex-1 flex flex-col items-start gap-y-10">
            <span className="lg:text-[60px] text-[40px] font-extrabold font-sans">
              Hey Business Owners Go Digital Effortlessly
            </span>
            <p className="lg:text-2xl text-xl font-semibold leading-[40px] font-serif">
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
          <div className="lg:flex-1 border-[15px] h-[400px] border-black rounded-[30px]"></div>
        </div>
      </div>
      <div className="p-10">
        <p className="lg:text-2xl text-[18px] font-semibold text-center font-serif">
          12,000+ global businesses trust us to transform & grow digitally
        </p>
      </div>
      <Carousel />
    </Box>
  );
};

export default Hero;
