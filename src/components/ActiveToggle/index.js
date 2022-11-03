import "./ActiveToggle.css";

function ActiveToggle({ active, toggleActive }) {
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
