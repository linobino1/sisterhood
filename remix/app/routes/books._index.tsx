import { json, LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Gutter from "~/components/Gutter";
import BooksQuery from "~/gql/BooksQuery";
import LexicalContent from "~/lexical/LexicalContent";
import { errors } from "~/util/errors";
import { gqlClient } from "~/util/gqlClient";
import ReactMasonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const loader = async ({}: LoaderFunctionArgs) => {
  const res = await gqlClient().query(BooksQuery, {});

  if (res.error || !res.data) {
    throw json(errors[500], 500);
  }

  return {
    books: res.data.Books?.docs,
  };
};

export default function Books() {
  const { books } = useLoaderData<typeof loader>();
  return (
    <Gutter size="lg">
      <h1 className="text-2xl">Books already travelling</h1>
      {books?.length && (
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 0: 1, 700: 3 }}
          className="mt-4 w-full sm:mt-8"
        >
          <ReactMasonry gutter="clamp(20px, (100vw - 1000px) * 99, 50px)">
            {books?.map((book, index) => (
              <div key={index} className="">
                {book?.image.url ? (
                  <img
                    src={book.image.url}
                    alt={book.image.alt}
                    width={book.image.width ?? 300}
                    height={book.image.height ?? 200}
                    className="w-full h-auto object-cover"
                  />
                ) : null}
                <div className="py-2.5 sm:px-1">
                  <h2 className="text-xl font-bold">{book?.title}</h2>
                  <p className="text-sm text-gray-600">{book?.author}</p>
                  {book?.info ? (
                    <LexicalContent
                      json={book.info}
                      className="text-gray-800 my-2"
                      disableMarginBlock
                    />
                  ) : null}
                  {book?.article ? (
                    <Link
                      to={`/books/${book.slug}`}
                      className="text-sm text-blue-500"
                    >
                      Read more
                    </Link>
                  ) : null}
                </div>
              </div>
            ))}
          </ReactMasonry>
        </ResponsiveMasonry>
      )}
    </Gutter>
  );
}
