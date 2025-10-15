import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  username?: string;
}

function DenemeFetchApi() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setError(null);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Kullanicilar yukleniyor...</div>;
  }

  if (error) {
    return <div>Hata olustu: {error}</div>;
  }

  return (
    <div>
      <h1>Kullanici Listesi</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default DenemeFetchApi;
