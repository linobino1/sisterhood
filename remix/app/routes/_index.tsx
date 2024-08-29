import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import HomeQuery from "~/gql/HomeQuery";
import LexicalContent from "~/lexical/LexicalContent";
import { errors } from "~/util/errors";
import { gqlClient } from "~/util/gqlClient";

export const loader = async ({}: LoaderFunctionArgs) => {
  const res = await gqlClient().query(HomeQuery, {});

  if (res.error || !res.data) {
    throw json(errors[500], 500);
  }

  return {
    content: res.data.Home?.content,
  };
};

export function LandingPage() {
  const { content } = useLoaderData<typeof loader>();

  return <LexicalContent json={content} className="text-xl" />;
}

export default LandingPage;
