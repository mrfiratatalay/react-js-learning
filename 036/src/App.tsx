import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';
import type { GithubUser } from './GithubUser';
import UserInfo from './UserInfo';

const GET_GITHUB_USER = gql`
  query GetGithubUser($username: String!) {
    user(login: $username) {
      login
      id
      avatarUrl
      bio
      name
      company
      location
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery<{ user: GithubUser }>(GET_GITHUB_USER, {
    variables: { username: 'mrfiratatalay' },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  if (!data || !data.user) return <p>No user found</p>; // ✅ type-safe guard

  const user = data.user;

  return (
    <div>
      <UserInfo user={user} />
    </div>
  );
}

export default App;
