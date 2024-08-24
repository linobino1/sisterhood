import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useRef } from "react";
import Gutter from "~/components/Gutter";
import HomeQuery from "~/gql/HomeQuery";
import LexicalContent from "~/lexical/LexicalContent";
import { cn } from "~/util/cn";
import { errors } from "~/util/errors";
import { gqlClient } from "~/util/gqlClient";

const img = "/artwork.png";
const clipPath = "ellipse(31% 44% at 51.5% 48.5%)";
const shapeOutside = `url('${img}')`;

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
      <img
        src={img}
        alt="Artwork"
        className={cn(
          "w-full float-right ml-4 mt-[20vh] -mr-47% relative left-3%",
          "md:mt-0"
        )}
        style={{ clipPath, shapeOutside }}
      />
      <div ref={contentRef}>
        <Gutter size="lg">
          <LexicalContent json={content} className="text-xl" disableGutter />
        </Gutter>
      </div>
    </div>
  );
}
