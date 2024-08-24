import { json, LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import LexicalContent from "~/lexical/LexicalContent";
import { errors } from "~/util/errors";
import { gqlClient } from "~/util/gqlClient";
import BookQuery from "~/gql/BookQuery";
import isEmpty from "~/lexical/util/isEmpty";

export const loader = async ({ params: { slug } }: LoaderFunctionArgs) => {
  if (!slug) {
    // this will never happen because the route is defined with a slug parameter...
    throw json(errors[404], 404);
  }

  const res = await gqlClient().query(BookQuery, { slug });

  if (res.error || !res.data) {
    throw json(errors[500], 500);
  }

  const book = res.data?.Books?.docs?.[0];

  if (!book || isEmpty(book.article)) {
    throw json(errors[404], 404);
  }

  return {
    book,
  };
};

export default function Books() {
  const { book } = useLoaderData<typeof loader>();
  return <LexicalContent json={book.article} />;
}
