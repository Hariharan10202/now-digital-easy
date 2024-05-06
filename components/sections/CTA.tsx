import Image from "next/image";
import cta from "../../public/assets/CTA/image.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Box from "../ui/Box";

const CTA = () => {
  return (
    <Box>
      <div className="md:py-10 lg:px-20 md:px-10 p-5 flex justify-between rounded-3xl items-center bg-gradient-to-l from-[rgb(210,213,253)] to-[rgb(216,218,248)] via-[rgb(239,232,231)] to-[rgb(254,243,226)]">
        <div className="flex flex-col lg:gap-y-5 gap-y-2 w-[40%]">
          <span className="lg:text-[42px] text-[24px] leading-[50px] font-[900] font-sans">
            For What You Are Waiting for?
          </span>
          <span className="lg:text-[20px] text-[16px] font-serif">
            12,000+ global businesses found an empowering digital
            transformation. Its your turn.
          </span>
          <div>
            <button className="flex items-center justify-center gap-2 lg:px-10 px-5 lg:py-5 py-3 rounded-full bg-bg-primary">
              <span className="text-white lg:text-xl text-[14px] lg:font-extrabold font-bold">
                Start Now
              </span>
              <MdOutlineKeyboardArrowRight size={30} color="white" />
            </button>
          </div>
        </div>
        <div className="md:block hidden">
          <div className="relative lg:w-[280px] w-[200px] lg:h-[280px] h-[200px] justify-center flex items-center">
            <Image src={cta} alt="cta" />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default CTA;
