import React, { useState } from 'react';

/** ---------- Types ---------- */
type Session = {
  accessToken: string;
  refreshToken: string;
  userId: number | null;
};

type MeUser = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender?: string;
  image?: string;
};

/** ---------- API (no cookies, only tokens) ---------- */
async function authLogin(username: string, password: string, expiresInMins = 30): Promise<Session> {
  const res = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // credentials: "include",  // ❌ CORS sebebiyle KALDIRILDI
    body: JSON.stringify({ username, password, expiresInMins }),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Login failed: ${res.status} ${t}`);
  }
  const d = await res.json();
  return {
    accessToken: d.accessToken,
    refreshToken: d.refreshToken,
    userId: d.id ?? null,
  };
}

async function authMe(accessToken: string): Promise<MeUser> {
  const res = await fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
    // credentials: "include", // ❌ KALDIRILDI
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`/auth/me failed: ${res.status} ${t}`);
  }
  return (await res.json()) as MeUser;
}

async function authRefresh(
  refreshToken?: string,
  expiresInMins = 30,
): Promise<{ accessToken: string; refreshToken: string }> {
  const res = await fetch('https://dummyjson.com/auth/refresh', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // credentials: "include", // ❌ KALDIRILDI
    body: JSON.stringify({ refreshToken, expiresInMins }),
  });
  if (!res.ok) {
    const t = await res.text();
    throw new Error(`Refresh failed: ${res.status} ${t}`);
  }
  const d = await res.json();
  return { accessToken: d.accessToken, refreshToken: d.refreshToken };
}

/** =====================================================
 * Case A — Local state entirely inside the form
 * ===================================================== */
function LocalLoginFormAuth() {
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');

  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<MeUser | null>(null);

  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsPending(true);
    try {
      const s = await authLogin(username, password);
      setSession(s);
      const me = await authMe(s.accessToken);
      setUser(me);
    } catch (err: any) {
      setError(err.message ?? 'Unknown error');
    } finally {
      setIsPending(false);
    }
  }

  async function handleRefresh() {
    if (!session) return;
    setError(null);
    setIsPending(true);
    try {
      const { accessToken, refreshToken } = await authRefresh(session.refreshToken);
      const next: Session = { ...session, accessToken, refreshToken };
      setSession(next);
      const me = await authMe(accessToken);
      setUser(me);
    } catch (err: any) {
      setError(err.message ?? 'Unknown error');
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 12 }}>
      <h2>Case A — Local state in the form (Auth)</h2>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, maxWidth: 360 }}>
        <input
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={isPending}>
          {isPending ? 'Loading...' : 'Login'}
        </button>
        <button type="button" onClick={handleRefresh} disabled={isPending || !session}>
          {isPending ? 'Refreshing...' : 'Refresh token'}
        </button>
      </form>

      {error && <p style={{ color: 'crimson' }}>Error: {error}</p>}

      <div style={{ marginTop: 12 }}>
        <strong>session (local in form):</strong>
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <strong>user (local in form):</strong>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        {user?.image && (
          <img
            src={user.image}
            alt="avatar"
            width={64}
            height={64}
            style={{ borderRadius: 8, marginTop: 8 }}
          />
        )}
      </div>
    </div>
  );
}

/** =====================================================
 * Case B — Lifted to parent (parent keeps session/user)
 * ===================================================== */
function LoginFormAuth({
  onSessionChange,
  onUserChange,
}: {
  onSessionChange: (s: Session) => void;
  onUserChange: (u: MeUser) => void;
}) {
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsPending(true);
    try {
      const s = await authLogin(username, password);
      onSessionChange(s);
      const me = await authMe(s.accessToken);
      onUserChange(me);
    } catch (err: any) {
      setError(err.message ?? 'Unknown error');
    } finally {
      setIsPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, maxWidth: 360 }}>
      <input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Loading...' : 'Login'}
      </button>
      {error && <p style={{ color: 'crimson' }}>Error: {error}</p>}
    </form>
  );
}

function LiftedLoginPageAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<MeUser | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleRefresh() {
    if (!session) return;
    setError(null);
    setIsRefreshing(true);
    try {
      const { accessToken, refreshToken } = await authRefresh(session.refreshToken);
      const next: Session = { ...session, accessToken, refreshToken };
      setSession(next);
      const me = await authMe(accessToken);
      setUser(me);
    } catch (err: any) {
      setError(err.message ?? 'Unknown error');
    } finally {
      setIsRefreshing(false);
    }
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 12 }}>
      <h2>Case B — Lifted to parent (Auth + props callbacks)</h2>
      <LoginFormAuth onSessionChange={setSession} onUserChange={setUser} />

      <div style={{ marginTop: 12, display: 'grid', gap: 8 }}>
        <button type="button" onClick={handleRefresh} disabled={!session || isRefreshing}>
          {isRefreshing ? 'Refreshing...' : 'Refresh token (in parent)'}
        </button>

        {error && <p style={{ color: 'crimson' }}>Error: {error}</p>}

        <strong>session (parent):</strong>
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <strong>user (parent):</strong>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        {user?.image && (
          <img
            src={user.image}
            alt="avatar"
            width={64}
            height={64}
            style={{ borderRadius: 8, marginTop: 8 }}
          />
        )}
      </div>
    </div>
  );
}

/** ---------- Top-level demo ---------- */
export default function App() {
  return (
    <div style={{ display: 'grid', gap: 24, padding: 24 }}>
      <LocalLoginFormAuth />
      <LiftedLoginPageAuth />
    </div>
  );
}
