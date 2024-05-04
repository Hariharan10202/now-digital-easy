import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";

interface SummaryProps {
  setActiveIndex: (activeIndex: number) => void;
  content: "Summary" | "Payment";
}

const Summary = ({ setActiveIndex, content }: SummaryProps) => {
  return (
    <>
      <table className="w-full">
        {content === "Summary" && (
          <tr className="border-b border-gray-300">
            <th className="text-left py-3 pl-3">Product</th>
            <th className="text-left py-3">Duration</th>
            <th className="text-left py-3">Price</th>
          </tr>
        )}
        <tbody>
          <tr>
            <td className="p-3 w-[300px]">
              <div className="flex items-center gap-4 w-[70%]">
                <FcGoogle size={24} />
                <div className="flex flex-col">
                  <span className="font-semibold">Google workspace</span>
                  <span className="text-sm">Business Starter</span>
                  <span className="text-sm text-[#0011FF]">
                    thedesignerclub.com
                  </span>
                </div>
              </div>
            </td>
            {content === "Summary" && (
              <td>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="annually">Annually</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </td>
            )}
            <td className="font-sans">$223</td>
          </tr>
          <tr>
            <td className="p-3 w-[300px]">
              <div className="flex items-center gap-4 w-[70%]">
                <FcGoogle size={24} />
                <div className="flex flex-col">
                  <span className="font-semibold">Linux Hosting</span>
                  <span className="text-sm">Beginner Plan</span>
                  <span className="text-sm text-[#0011FF]">
                    thedesignerclub.com
                  </span>
                </div>
              </div>
            </td>
            {content === "Summary" && (
              <td>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="annually">Annually</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </td>
            )}
            <td className="font-sans">$223</td>
          </tr>
          {content === "Summary" && (
            <>
              <tr className="border-t border-gray-300">
                <td
                  rowSpan={2}
                  className="text-[#0011FF] font-semibold py-5 px-3"
                >
                  Have a coupon code ?
                </td>
                <td className="text-right pr-20 font-medium">Subtotal</td>
                <td>$ 1600</td>
              </tr>
              <tr>
                <td className="text-right pr-20 font-medium">Tax</td>
                <td>$ 80</td>
              </tr>
              <tr className="border-t border-b border-gray-300">
                <td></td>
                <td className="text-right pr-20 font-bold py-3">Total</td>
                <td className="font-bold py-3">$ 1600.00</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
      {content === "Summary" && (
        <div className="flex items-center justify-center py-5">
          <Button
            className="bg-[#0011FF] text-white py-3 px-10 rounded-md"
            onClick={() => setActiveIndex(1)}
          >
            Continue to Cart
          </Button>
        </div>
      )}
    </>
  );
};

export default Summary;
