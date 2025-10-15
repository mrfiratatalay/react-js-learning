import type { GithubUser } from './GithubUser';

interface GithubUserProps {
  user: GithubUser;
}

const UserInfo = ({ user }: GithubUserProps) => {
  return (
    <div>
      <img src={user.avatar_url} alt={user.login} width="100" height="100" />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <p>Location: {user.location || 'Not specified'}</p>
      <p>Company: {user.company || 'Not specified'}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Public repos: {user.public_repos}</p>
      <p>Public Gists: {user.public_gists}</p>
      <p>
        Github profile:{' '}
        <a href={user.html_url} target="_blank" rel="noopener noreferrer">
          {user.login}
        </a>
      </p>
    </div>
  );
};

export default UserInfo;
