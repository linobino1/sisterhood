import type { MetaFunction } from "@remix-run/node";
import Gutter from "~/components/Gutter";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Gutter>
      <div className="space-y-3 max-w-[700px] text-xl">
        <p className="mt-12">
          In 2024 I started to notice that my books had a life of their own. I
          would give a book to a friend and suddenly, unbeknownst to me, it
          would travel and land in someone else’s hands. Oftentimes, in the
          hands of people I wouldn’t even know.
        </p>
        <p>
          Feminist literature would travel the fastest. As if all of my
          girlfriends wanted (or needed) to share their pain and anger with
          other women, and transform these feelings into shared sisterhood –
          that’s how a small project called “The Sisterhood of Traveling
          Feminist Literature” came about.
        </p>
      </div>
    </Gutter>
  );
}
