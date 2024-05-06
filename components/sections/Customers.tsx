import Image from "next/image";
import customer1 from "../../public/assets/customers/customer1.svg";
import customer2 from "../../public/assets/customers/customer2.svg";
import customer3 from "../../public/assets/customers/customer3.svg";
import customer4 from "../../public/assets/customers/customer4.svg";
import Box from "../ui/Box";

const Customers = () => {
  return (
    <Box>
      <div className="flex flex-col gap-y-2 md:mb-10 mb-4">
        <span className="md:text-3xl text-xl text-[#494F57] font-extrabold">
          People just love working with us!
        </span>
        <span className="md:text-4xl text-xl font-extrabold">
          Digitalized Business Happy Customers That’s Impact
        </span>
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="flex gap-5 lg:flex-row flex-col">
          {/* Customer 1 */}
          <div className="md:h-[300px] h-fit bg-gradient-to-r from-[rgb(210,213,253)] to-[rgb(216,218,248)] via-[rgb(239,232,231)] to-[rgb(254,243,226)] relative flex-[1.2]">
            <div className="right-0 absolute sm:w-[180px] sm:h-[180px] w-[130px] h-[130px]">
              <Image className="w-full" src={customer1} alt="Anandh Michel" />
            </div>
            <div className="p-5 flex h-full flex-col justify-around gap-y-5">
              <div className="flex">
                <p className="text-[16px] font-semibold lg:lg:w-[70%] w-[50%]">
                  “Now Digital Easy has the best customer support I have ever
                  experienced. Their team is very responsive and knowledgeable.
                  I highly recommend their products and services”
                </p>
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-extrabold">
                  Anandh Michel
                </span>
                <span>Sales Coordinator</span>
              </div>
            </div>
          </div>

          {/* Customer 2 */}
          <div className="bg-gradient-to-r from-[rgb(210,213,253)] to-[rgb(216,218,248)] via-[rgb(239,232,231)] to-[rgb(254,243,226)] relative flex-1">
            <div className="right-0 absolute sm:w-[180px] sm:h-[180px] w-[130px] h-[130px]">
              <Image className="w-full" src={customer2} alt="Anandh Michel" />
            </div>
            <div className="p-5 flex h-full flex-col justify-around gap-y-5">
              <div className="flex">
                <p className="text-[16px] font-semibold lg:w-[70%] w-[50%]">
                  “Now Digital Easy has the best customer support I have ever
                  experienced. Their team is very responsive and knowledgeable.
                  I highly recommend their products and services”
                </p>
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-extrabold">
                  Anandh Michel
                </span>
                <span>Sales Coordinator</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-5 lg:flex-row flex-col">
          {/* Customer 3 */}
          <div className="h-fit bg-gradient-to-r from-[rgb(210,213,253)] to-[rgb(216,218,248)] via-[rgb(239,232,231)] to-[rgb(254,243,226)] relative flex-1">
            <div className="right-0 absolute sm:w-[180px] sm:h-[180px] w-[130px] h-[130px]">
              <Image className="w-full" src={customer3} alt="Anandh Michel" />
            </div>
            <div className="p-5 flex h-full flex-col justify-around gap-y-5">
              <div className="flex">
                <p className="text-[16px] font-semibold lg:w-[70%] w-[50%]">
                  “Now Digital Easy has the best customer support I have ever
                  experienced. Their team is very responsive and knowledgeable.
                  I highly recommend their products and services”
                </p>
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-extrabold">
                  Anandh Michel
                </span>
                <span>Sales Coordinator</span>
              </div>
            </div>
          </div>

          {/* Customer 4 */}
          <div className="h-fit bg-gradient-to-r from-[rgb(210,213,253)] to-[rgb(216,218,248)] via-[rgb(239,232,231)] to-[rgb(254,243,226)] relative flex-[1.2]">
            <div className="right-0 absolute sm:w-[180px] sm:h-[180px] w-[130px] h-[130px]">
              <Image className="w-full" src={customer4} alt="Anandh Michel" />
            </div>
            <div className="p-5 flex h-full flex-col justify-around gap-y-5">
              <div className="flex">
                <p className="text-[16px] font-semibold lg:w-[70%] w-[50%]">
                  “Now Digital Easy has the best customer support I have ever
                  experienced. Their team is very responsive and knowledgeable.
                  I highly recommend their products and services”
                </p>
              </div>
              <div className="flex flex-col">
                <span className="text-[16px] font-extrabold">
                  Anandh Michel
                </span>
                <span>Sales Coordinator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Customers;
