import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


type RedirectProps = {
    path: string;
}

function Redirect({ path }: RedirectProps) {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(path);
    }, [navigate, path]);

    return null;
}

export default Redirect;
