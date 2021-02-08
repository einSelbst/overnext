import { useRouter } from "next/router";

const Topic = (): JSX.Element => {
  const router = useRouter();
  const { topic, locale } = router.query;
  return(
    <>
      <h2>Legal - {topic}</h2>
      <span>You speak {locale}</span>
    </>
  )
};

export default Topic;
