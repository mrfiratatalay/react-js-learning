import ReactDOM from "react-dom/client";

const enabled = false;
const text = "Hello, World!";
const placeholder = "Type here...";
const size = 50;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <section>
    <button disabled={!enabled}>{text}</button>
    <input placeholder={placeholder} size={size} />
  </section>

);
