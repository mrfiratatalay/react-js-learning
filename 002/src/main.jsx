






















/*

Mapping Collections to JSX Elements




import ReactDOM from "react-dom/client";

const array = ["React", "is", "awesome"];
const object = { first: 1, second: 2, third: 3 };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <section>
    <h1>Array</h1>
    <ul>
      {array.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>

    <h1>Object</h1>
    <ul>
      {
        Object.keys(object).map((key) => (
          <li key={key}>
            <strong>{key}: </strong>
            {object[key]}
          </li>
        ))
      }
    </ul>
  </section>
)


*/
















/*

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

*/
