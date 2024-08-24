import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useRef } from "react";
import Artwork from "~/components/Artwork";
import Gutter from "~/components/Gutter";
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
    content: res.data.Home?.content ?? {},
  };
};

export default function Index() {
  const { content } = useLoaderData<typeof loader>();
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // let's limit the container height by the content height
  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      containerRef.current.style.maxHeight = `${contentRef.current.clientHeight}px`;
    }
  }, [content]);

  return (
    <div ref={containerRef} className="overflow-hidden flex-1 min-h-[85vh]">
      <Artwork className={"max-sm:hidden"} />
      <div ref={contentRef}>
        <Gutter size="lg">
          <LexicalContent json={content} className="" disableGutter />
        </Gutter>
      </div>
    </div>
  );
}
