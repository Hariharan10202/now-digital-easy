import { Steps } from "primereact/steps";

const Cart = () => {
  const items = [
    {
      label: "Personal Info",
    },
    {
      label: "Reservation",
    },
    {
      label: "Review",
    },
  ];

  return (
    <div className="card">
      <Steps readOnly model={items} />
    </div>
  );
};

export default Cart;
