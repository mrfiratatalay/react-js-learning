import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section>
            <h1>404</h1>
            <p>Aradığın sayfayı bulamadık.</p>
            <p>
                <Link to="/">Ana sayfaya dön</Link>
            </p>
        </section>
    );
}

export default NotFound;
