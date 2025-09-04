import MyPage from "./MyPage";
import {Suspense} from "react";

function App() {
    return (
        <Suspense fallback={"loading..."}>
            <MyPage />
        </Suspense>
    )
}
export default App;