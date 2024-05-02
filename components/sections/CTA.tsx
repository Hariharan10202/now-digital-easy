import Image from "next/image";
import cta from "../../public/assets/CTA/image.svg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const CTA = () => {
  return (
    <div className="py-10 px-20">
      <div className="py-10 px-20 px flex justify-between rounded-3xl items-center bg-gradient-to-r from-[rgb(210,213,253)] to-[rgb(216,218,248)] via-[rgb(239,232,231)] to-[rgb(254,243,226)]">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-[42px] font-extrabold">
            For what you are waiting for?
          </h1>
          <span className="text-[20px]">
            12,000+ global businesses found an empowering digital
            transformation. Its your turn.
          </span>
          <div>
            <button className="flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-bg-primary">
              <span className="text-white text-xl font-extrabold">
                Start Now
              </span>
              <MdOutlineKeyboardArrowRight size={30} color="white" />
            </button>
          </div>
        </div>
        <div className="relative w-[280px] h-[280px] justify-center flex items-center">
          <Image src={cta} alt="cta" />
        </div>
      </div>
    </div>
  );
};

export default CTA;
