import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import LegalQuery from "~/gql/LegalQuery";
import LexicalContent from "~/lexical/LexicalContent";
import { errors } from "~/util/errors";
import { gqlClient } from "~/util/gqlClient";

export const loader = async ({}: LoaderFunctionArgs) => {
  const res = await gqlClient().query(LegalQuery, {});

  if (res.error || !res.data) {
    throw json(errors[500], 500);
  }

  return {
    content: res.data.Legal?.content ?? {},
  };
};

export default function Index() {
  const { content } = useLoaderData<typeof loader>();
  return <LexicalContent json={content} />;
}
