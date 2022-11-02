import { useState } from "react";

function ShoppingItem({ name, priceInCent }) {
  const [amount, setAmount] = useState(1);
  const increaseAmount = () => {
    setAmount(amount + 1);
  };
  const decreaseAmount = () => {
    if (amount >= 1) setAmount(amount - 1);
  };
  function formatCurrency(cents) {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(cents / 100);
  }

  return (
    <section className="item">
      <h2>{name}</h2>
      <p>price: {formatCurrency(priceInCent)}</p>
      <p>amount: {amount}</p>
      <p>total: {formatCurrency(priceInCent * amount)}</p>
      <button className="item__button" type="button" onClick={decreaseAmount}>
        -
      </button>
      <button className="item__button" type="button" onClick={increaseAmount}>
        +
      </button>
    </section>
  );
}

export default ShoppingItem;
