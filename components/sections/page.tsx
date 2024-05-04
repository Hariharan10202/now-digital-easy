import Cart from "@/components/sections/Cart/Cart";
import CartIcon from "../../public/assets/navbar/cart.svg";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <div className="p-5 flex items-center gap-5 w-full">
        <div className="w-7 h-7 flex justify-center items-center relative">
          <Image alt="cart" src={CartIcon} className="w-full" />
        </div>
        <div className="w-full">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default page;
