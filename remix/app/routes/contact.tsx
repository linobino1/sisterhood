import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Gutter from "~/components/Gutter";
import ContactQuery from "~/gql/ContactQuery";
import LexicalContent from "~/lexical/LexicalContent";
import { errors } from "~/util/errors";
import { gqlClient } from "~/util/gqlClient";

export const loader = async ({}: LoaderFunctionArgs) => {
  const res = await gqlClient().query(ContactQuery, {});

  if (res.error || !res.data) {
    throw json(errors[500], 500);
  }

  return {
    content: res.data.Contact?.content ?? {},
  };
};

export default function Index() {
  const { content } = useLoaderData<typeof loader>();
  return (
    <Gutter size="lg">
      <LexicalContent json={content} className="text-xl" disableGutter />
    </Gutter>
  );
}
