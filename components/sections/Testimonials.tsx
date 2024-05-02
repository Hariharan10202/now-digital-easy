import Image from "next/image";
import Platform from "../../public/assets/platform.svg";

const Testimonials = () => {
  return (
    <div className="px-20 py-10">
      <div className="text-center w-[70%] m-auto">
        <h1 className="text-[60px] font-extrabold">
          Gateway to Digital Success
        </h1>
        <p className="text-2xl font-semibold text-center">
          'Create' your digital footprint seamlessly, 'Manage' your operations
          and connections effectively, and 'Grow' your outreach exponentially.
          Experience the power of streamlined solutions designed to Launch,
          Organize, and Amplify your business in the digital landscape.
        </p>
      </div>
      <div className="relative flex items-center justify-center w-full h-[70vh] mt-10">
        <Image src={Platform} alt="platform" fill />
      </div>
    </div>
  );
};

export default Testimonials;
