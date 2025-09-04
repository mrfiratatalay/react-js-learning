import { lazy, Suspense } from 'react';
import { Link, Outlet, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

const First = lazy(() => import('./First'));
const Second = lazy(() => import('./Second'));

function Layout() {
  return (
    <section>
      <nav>
        <span>
          <Link to="first">First</Link>
        </span>
        <span> | </span>
        <span>
          <Link to="second">Second</Link>
        </span>
      </nav>
      <section>
        <Suspense
          fallback={
            <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
              <FadeLoader color={'lightblue'} />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </section>
    </section>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="first" element={<First />} />
          <Route path="second" element={<Second />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
