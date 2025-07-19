import ReactDOM from "react-dom/client";

const handleClick = () => {
  console.log("Button clicked!!!");
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <section>
    <button onClick={handleClick}>TIKLA ULEENNN</button>
    <button onClick={() => alert("Tıklandı!")}>Tıkla</button>
  </section>
);
