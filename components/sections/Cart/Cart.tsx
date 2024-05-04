import { Steps } from "primereact/steps";
import styles from "./Card.module.css";
import CartIcon from "../../../public/assets/navbar/cart.svg";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";
import CardContent from "./CardContent";
import { useState } from "react";

interface CardProps {
  setOpen: (isOpen: boolean) => void;
}

const Cart = ({ setOpen }: CardProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const items = [
    {
      label: "Summary",
    },
    {
      label: "Login",
    },
    {
      label: "Payment",
    },
  ];

  return (
    <div>
      <div className={styles.container}>
        <div className="w-7 h-7 flex justify-between items-center relative">
          <Image alt="cart" src={CartIcon} className="w-full" />
        </div>
        <Steps
          activeIndex={activeIndex}
          className={styles.cart}
          model={items}
        />
        <IoCloseSharp
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(false)}
        />
      </div>
      <CardContent setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
    </div>
  );
};

export default Cart;
