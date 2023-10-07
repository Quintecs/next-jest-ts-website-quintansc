import { userRoute } from "../../api";

export async function getStaticProps() {
  const gitUser = await userRoute()
  return {
    props: {
      gitUser,
    },
  }
}