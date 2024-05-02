import Image from "next/image";
import styles from "./carousel.module.css";

import Item1 from "../../public/assets/carousel/item1.svg";
import Item2 from "../../public/assets/carousel/item2.svg";
import Item3 from "../../public/assets/carousel/item3.svg";
import Item4 from "../../public/assets/carousel/item4.svg";
import Item5 from "../../public/assets/carousel/item5.svg";
import Item6 from "../../public/assets/carousel/item6.svg";
import Item7 from "../../public/assets/carousel/item7.svg";
import Item8 from "../../public/assets/carousel/item8.svg";

const CarouselItems = [
  {
    id: 1,
    src: Item1,
    alt: "item1",
  },
  {
    id: 2,
    src: Item2,
    alt: "item2",
  },
  {
    id: 3,
    src: Item3,
    alt: "item3",
  },
  {
    id: 4,
    src: Item4,
    alt: "item4",
  },
  {
    id: 5,
    src: Item5,
    alt: "item5",
  },
  {
    id: 6,
    src: Item6,
    alt: "item6",
  },
  {
    id: 7,
    src: Item7,
    alt: "item7",
  },
  {
    id: 8,
    src: Item8,
    alt: "item8",
  },
];

const Carousel = () => {
  return (
    <div className={styles.slider}>
      <div className={styles["slide-track"]}>
        {CarouselItems.map((item) => (
          <div
            key={item.id}
            className={`${styles.slide} relative h-[100px] w-[100px] flex justify-center items-center`}
          >
            <Image alt={item.alt} src={item.src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
