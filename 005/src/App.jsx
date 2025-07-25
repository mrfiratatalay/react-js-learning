import React from "react";
import Timer from "./Timer";

const ShowHideTimer = ({ show }) => (
  show ? <Timer /> : <p>Timer is hidden</p>
)

function App() {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Timer" : "Show Timer"}
      </button>
      <ShowHideTimer show={show} />
    </>
  )
}

export default App;






































/*


import React from "react";

function App() {
  const [id, setId] = React.useState("loading...");
  const [name, setName] = React.useState("loading...");

  const fetchUser = React.useCallback(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: 1,
          name: "Firat"
        });
      }, 1000);
    });
  }, []);

  React.useEffect(() => {
    fetchUser().then((user) => {
      setId(user.id);
      setName(user.name);
    });
  });

  return (
    <>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
    </>
  )
}


export default App;



*/
