import { useParams, useSearchParams } from "react-router-dom";

function Echo() {
    const params = useParams();

    const [searchParams] = useSearchParams();

    const message = params.msg || searchParams.get("msg");

    return <h1>{message}</h1>
}

export default Echo;
