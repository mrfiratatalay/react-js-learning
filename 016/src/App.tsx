import { Link } from "react-router-dom";

const param = "From Param";
const query = new URLSearchParams({ msg: "From Query" });

function App() {
  return (
    <section>
      <p>
        <Link to={`echo/${param}`}>Echo Param</Link>
      </p>
      <p>
        <Link to={`echo?${query.toString()}`}>Echo Query</Link>
      </p>
    </section>
  )
}

export default App;
