import ActiveToggle from "./components/ActiveToggle";
import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <>
      <ActiveToggle active={active} toggleActive={toggleActive} />
      <ShoppingCart />
    </>
  );
}

export default App;
