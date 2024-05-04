"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import Box from "../ui/Box";

import styles from "./styles.module.css";
import { IoMailOpen } from "react-icons/io5";
import "./swiper.css";

const Lists = [
  {
    id: 1,
    title: "Mails Now",
    subtitle: "Simple Emails Better Conversions",
    desc: "Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain warm-up, and in-depth analytics. ",
    link: "/",
  },
  {
    id: 2,
    title: "Vision Now",
    subtitle: "Save Time Get More Done",
    desc: "Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain warm-up, and in-depth analytics. ",
    link: "/",
  },
  {
    id: 3,
    title: "Google Ads",
    subtitle: "Unify. Connect. Thrive",
    desc: "Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain warm-up, and in-depth analytics. ",
    link: "/",
  },
  {
    id: 4,
    title: "Mails Now",
    subtitle: "Simple Emails Better Conversions",
    desc: "Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain warm-up, and in-depth analytics. ",
    link: "/",
  },
  {
    id: 5,
    title: "Vision Now",
    subtitle: "Save Time Get More Done",
    desc: "Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain warm-up, and in-depth analytics. ",
    link: "/",
  },
  {
    id: 6,
    title: "Google Ads",
    subtitle: "Unify. Connect. Thrive",
    desc: "Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain warm-up, and in-depth analytics. ",
    link: "/",
  },
  {
    id: 4,
    title: "Mails Now",
    subtitle: "Simple Emails Better Conversions",
    desc: "Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain warm-up, and in-depth analytics. ",
    link: "/",
  },
  {
    id: 5,
    title: "Vision Now",
    subtitle: "Save Time Get More Done",
    desc: "Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain warm-up, and in-depth analytics. ",
    link: "/",
  },
  {
    id: 6,
    title: "Google Ads",
    subtitle: "Unify. Connect. Thrive",
    desc: "Sending emails made easy! MailsNow has it all - creating email templates, robust personalisation and automation options, dedicated IP, unlimited domain warm-up, and in-depth analytics. ",
    link: "/",
  },
];

const Business = () => {
  return (
    <div className="lg:px-20 p-10">
      <div className="mx-auto w-[80%] lg:w-[60%] mb-10">
        <h1 className="text-[60px] font-sans font-extrabold text-center">
          Build Your Business In One Single Platform
        </h1>
      </div>
      <Swiper
        slidesPerView={5}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
          1920: {
            slidesPerView: 5,
          },
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {Lists.map((list) => (
          <SwiperSlide key={list.id}>
            <div className={styles.card}>
              <div className={styles.header}>
                <div className="absolute top-[30%] left-5 flex items-center justify-center gap-10">
                  <h1 className="text-2xl text-white font-bold">
                    {list.title}
                  </h1>
                  <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center">
                    <IoMailOpen size={40} />
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <div>
                  <h1 className="font-bold">{list.subtitle}</h1>
                  <p>{list.desc}</p>
                </div>
                <p className="text-bg-primary font-bold text-[16px] underline">
                  Know more
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Business;
