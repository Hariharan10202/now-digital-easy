import Image from "next/image";
import Platform from "../../public/assets/platform.svg";
import Box from "../ui/Box";

const Testimonials = () => {
  return (
    <Box className="flex flex-col gap-y-10">
      <div className="text-center md:w-[70%] w-full m-auto flex flex-col gap-y-5">
        <span className="lg:text-[60px] text-[30px] font-extrabold font-sans">
          Gateway to Digital Success
        </span>
        <p className="md:text-2xl text-[16px] font-semibold text-center font-serif">
          &apos;Create&apos; your digital footprint seamlessly,
          &apos;Manage&apos; your operations and connections effectively, and
          &apos;Grow&apos; your outreach exponentially. Experience the power of
          streamlined solutions designed to Launch, Organize, and Amplify your
          business in the digital landscape.
        </p>
      </div>
      <div className="relative flex items-center justify-center w-full 2xl:h-[100vh] xl:h-[80vh] lg:h-[60vh] h-fit overflow-hidden p-4">
        <Image src={Platform} alt="platform" className="lg:w-[80%] w-full" />
      </div>
    </Box>
  );
};

export default Testimonials;
