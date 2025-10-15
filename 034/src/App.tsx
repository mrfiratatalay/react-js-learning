import { useEffect, useState } from 'react';
import api from './api';
import type { GithubUser } from './GithubUser';
import UserInfo from './UserInfo';

function App() {
  const [user, setUser] = useState<GithubUser>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    api
      .getProfile('mrfiratatalay')
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && !user && <p>No user found.</p>}
      {user && <UserInfo user={user} />}
    </div>
  );
}

export default App;
