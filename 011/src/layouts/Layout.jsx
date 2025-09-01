import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <main style={{ maxWidth: 920, margin: "40px auto", padding: 16, fontFamily: "system-ui, sans-serif" }}>
            <nav style={{ marginBottom: 24 }}>
                <Link to="/">Main</Link>
                <span> | </span>
                <Link to="/one">One</Link>
                <span> | </span>
                <Link to="/two">Two</Link>
            </nav>

            {/* child route içerikleri burada gösterilir */}
            <Outlet />
        </main>
    );
}


export default Layout
