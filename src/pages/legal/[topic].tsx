import { useRouter } from "next/router";

const _Topic = (): JSX.Element => {
  const router = useRouter();
  const { topic, locale } = router.query;
  return(
    <>
      <h2>Legal - {topic}</h2>
      <span>You speak {locale}</span>
    </>
  )
};

export default _Topic;
