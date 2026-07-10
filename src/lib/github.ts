const GITHUB_API = "https://api.github.com";

export interface GithubUser {
  name: string;
  company: string | null;
  bio: string | null;
  location: string | null;
  avatar_url: string;
  created_at: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  created_at: string;
}

const headers: HeadersInit = {
  Accept: "application/vnd.github.v3+json",
  ...(process.env.GITHUB_TOKEN
    ? {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "User-Agent": "QuintansC",
      }
    : {}),
};

async function github<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${GITHUB_API}${path}`, {
      headers,
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export const getUser = () => github<GithubUser>("/users/quintansc");

export const getRepository = (name: string) =>
  github<GithubRepo>(`/repos/quintansc/${name}`);
