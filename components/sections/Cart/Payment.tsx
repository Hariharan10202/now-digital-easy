import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Summary from "./Summary";
import { Button } from "@/components/ui/button";

interface PaymentProps {
  setActiveIndex: (activeIndex: number) => void;
}

const Payment = ({ setActiveIndex }: PaymentProps) => {
  return (
    <div className="px-5">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span>Order Summary (2)</span>
          </AccordionTrigger>
          <AccordionContent>
            <Summary setActiveIndex={setActiveIndex} content="Payment" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex justify-between items-center px-7 py-3 border-b border-gray-300">
        <div className="flex flex-col gap-y-2">
          <span className="font-semibold">Subtotal</span>
          <span className="font-semibold">Tax</span>
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="font-semibold text-right">$ 1600.00</span>
          <span className="font-semibold text-right">$ 80.00</span>
        </div>
      </div>
      <div className="flex items-center justify-end px-7 py-3 gap-10">
        <span className="font-bold">Total</span>
        <span className="font-bold">$ 1600.00</span>
      </div>
      <div className="flex items-center justify-center py-5">
        <Button
          className="bg-[#0011FF] text-white py-3 px-10 rounded-md"
          onClick={() => setActiveIndex(1)}
        >
          Pay $1600.00
        </Button>
      </div>
    </div>
  );
};

export default Payment;
