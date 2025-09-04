import {Suspense} from "react";
import MyPage from "./MyPage.tsx";
import {PacmanLoader} from "react-spinners";


function App() {
    return (
        <Suspense fallback={<PacmanLoader color="lightblue" />}>
            <MyPage />
        </Suspense>
    )
}

export default App;