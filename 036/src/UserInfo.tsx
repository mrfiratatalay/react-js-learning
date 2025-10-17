import type { GithubUser } from './GithubUser';

interface GithubUserProps {
  user: GithubUser;
}

const UserInfo = ({ user }: GithubUserProps) => {
  return (
    <div>
      <img src={user.avatarUrl} alt={user.login} width="100" height="100" />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <p>Location: {user.location || 'Not specified'}</p>
      <p>Company: {user.company || 'Not specified'}</p>
    </div>
  );
};

export default UserInfo;
