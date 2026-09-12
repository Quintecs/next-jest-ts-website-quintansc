import { getUser } from "@/lib/github";
import { StaticPageStructuredData } from "@/components/site/structured-data";
import HomeContent from "@/components/site/home-content";
import { pageMetadata, SITE_DESCRIPTION, SITE_TITLE } from "@/lib/seo";

export const metadata = {
  ...pageMetadata("/", SITE_TITLE, SITE_DESCRIPTION),
  title: { absolute: SITE_TITLE },
};

export const revalidate = 86400;

export default async function HomePage() {
  const user = await getUser();

  return <><StaticPageStructuredData path="/" /><HomeContent user={user} /></>;
}
