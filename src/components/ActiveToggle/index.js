import "./ActiveToggle.css";
import { useState } from "react";

function ActiveToggle() {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active);
  };
  return (
    <main>
      <div className={active ? "box box--active" : "box"} />
      <button type="button" onClick={toggleActive}>
        {active ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}

export default ActiveToggle;
