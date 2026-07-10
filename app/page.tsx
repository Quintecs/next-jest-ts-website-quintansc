import { getUser } from "@/lib/github";
import HomeContent from "@/components/site/home-content";

export const revalidate = 86400;

export default async function HomePage() {
  const user = await getUser();

  return <HomeContent user={user} />;
}
