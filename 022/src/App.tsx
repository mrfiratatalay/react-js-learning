import {lazy, Suspense, useState} from "react";
import {ClockLoader} from "react-spinners";

const First = lazy(() => import("./First"));
const Second = lazy(() => import("./Second"));

type ShowComponentProps = {
    name: string;
}


function ShowComponent({name}: ShowComponentProps) {
    switch (name) {
        case "first":
            return <First />;
        case "second":
            return <Second />;
        default:
            return null;
    }
}

function App() {
    const [component, setComponent] = useState("");

    return (
        <>
            <label>
                Load Component:{" "}
                <select
                    value={component}
                    onChange={(e) => setComponent(e.target.value)}
                >
                    <option value="">None</option>
                    <option value="first">First</option>
                    <option value="second">Second</option>
                </select>
            </label>

            <Suspense fallback={
                <div>
                    <ClockLoader color="red" />
                    <p>Loading ...</p>
                </div>}>
                <ShowComponent name={component} />
            </Suspense>


        </>
    )
}

export default App;






