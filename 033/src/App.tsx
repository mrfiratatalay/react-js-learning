import { useEffect, useState } from 'react';
import type { GithubUser } from './GithubUser';
import UserInfo from './UserInfo';

function App() {
  const [user, setUser] = useState<GithubUser>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    fetch('https://api.github.com/users/xmrfiratatalay')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setError(null);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && !user && <div>Hata olustu: {error}</div>}
      {user && <UserInfo user={user} />}
    </div>
  );
}
export default App;
