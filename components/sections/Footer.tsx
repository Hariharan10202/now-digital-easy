import Image from "next/image";

import Logo from "../../public/assets/navbar/logo.svg";

import FooterImage1 from "../../public/assets/Footer/footerimg1.svg";
import FooterImage2 from "../../public/assets/Footer/footerimg2.svg";
import FooterImage3 from "../../public/assets/Footer/footerimg3.svg";

import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="lg:pt-20 pt-10">
      <div className="w-full bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 lg:px-20 px-10 lg:pt-20 pt-10 lg:pb-10 pb-5">
        <div className="flex items-center justify-between lg:flex-row flex-col gap-y-5">
          <div className="flex lg:gap-20 md:justify-start justify-center gap-10">
            <div className="flex flex-col gap-y-2 text-center lg:text-left lg:[&_span]:text-[14px] [&_span]:text-[12px]">
              <h3 className="font-semibold lg:text-[18px] text-[14px] ">
                Company
              </h3>
              <span className="font-normal">About Us</span>
              <span className="font-normal">Payment method</span>
              <span className="font-normal">Refund Policy</span>
              <span className="font-normal">Contact Us</span>
            </div>
            <div className="flex flex-col gap-y-2 text-center lg:text-left lg:[&_span]:text-[14px] [&_span]:text-[12px]">
              <h3 className="font-semibold lg:text-[18px] text-[14px] ">
                SERVICES
              </h3>
              <span className="font-normal">Register Domains</span>
              <span className="font-normal">Transfer Domains</span>
              <span className="font-normal">Manage Domains</span>
              <span className="font-normal">Web Hosting</span>
              <span className="font-normal">Google Workspace</span>
            </div>
            <div className="flex flex-col gap-y-2 text-center lg:text-left lg:[&_span]:text-[14px] [&_span]:text-[12px]">
              <h3 className="font-semibold lg:text-[18px] text-[14px] ">
                PRODUCTS
              </h3>
              <span className="font-normal">NDE Mail</span>
              <span className="font-normal">Vision Now</span>
              <span className="font-normal">Peoples Now</span>
              <span className="font-normal">Spot Now</span>
              <span className="font-normal">Marketing Studio</span>
            </div>
            <div className="flex flex-col gap-y-2 text-center lg:text-left lg:[&_span]:text-[14px] [&_span]:text-[12px]">
              <h3 className="font-semibold lg:text-[18px] text-[14px] ">
                SUPPORT
              </h3>
              <span className="font-normal">Open Tickets</span>
              <span className="font-normal">Blog</span>
              <span className="font-normal">Live Chat</span>
              <span className="font-normal">Change Management</span>
              <span className="font-normal">Support</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 lg:items-end items-center">
            <h1 className="font-semibold">
              Transform Your Business into Digital Organisation
            </h1>
            <div className="flex gap-5 items-center justify-center">
              <div className="relative w-[60px] h-[60px] flex justify-center items-center">
                <Image src={FooterImage1} alt="google" />
              </div>
              <div className="relative w-[60px] h-[60px] flex justify-center items-center">
                <Image src={FooterImage2} alt="google" />
              </div>
              <div className="relative w-[60px] h-[60px] flex justify-center items-center">
                <Image src={FooterImage3} alt="google" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <div className="flex items-center gap-3">
            <div className="relative w-50 h-50 flex items-center justify-center">
              <Image src={Logo} alt="logo" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Now</span>
              <span className="font-semibold">Digital Easy</span>
            </div>
          </div>
        </div>
        <div className="h-[2px] mt-5 bg-white"></div>
        <div className="[&_p]:text-[#151D8C] mt-5 flex items-center justify-between lg:flex-row flex-col gap-y-3">
          <p className="">@2022 Nowdigitaleasy, Inc.All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <FaFacebook size={20} />
            <RiInstagramFill size={20} />
            <IoLogoLinkedin size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
