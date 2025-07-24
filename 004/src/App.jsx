import { useState } from "react";

function App() {
  const [name, setName] = useState("Firat");
  const [age, setAge] = useState(24);

  return (
    <>
      <section>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>My name is {name}</p>
      </section>

      <section>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <p>My age is {age}</p>
      </section>
    </>
  )
}

export default App;

/*

import { useState } from "react";

export default function App() {
  const [name] = useState("Mike");
  const [age] = useState(32);

  return (
    <>
      <p>My name is {name}</p>
      <p>My age is {age}</p>
    </>
  );
}


*/
