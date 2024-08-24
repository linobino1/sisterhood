import {
  isRouteErrorResponse,
  json,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import "virtual:uno.css";
import "@unocss/reset/tailwind-compat.css";
import "~/global.css";
import Gutter from "./components/Gutter";
import { MetaFunction } from "@remix-run/node";
import { Navigation } from "./components/Navigation";
import { gqlClient } from "./util/gqlClient";
import RootQuery from "./gql/RootQuery";
import { errors } from "./util/errors";
import Heading from "./components/Heading";
import MobileMenu from "./components/MobileMenu";

export const loader = async () => {
  const res = await gqlClient().query(RootQuery, {});

  if (res.error || !res.data) {
    console.log(res.error);
    throw json(errors[500], 500);
  }

  return {
    meta: res.data?.Site?.meta,
  };
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: data?.meta?.title },
    { name: "description", content: data?.meta?.description },
    { name: "og:description", content: data?.meta?.description },
    { name: "og:image", content: (data?.meta?.image as any)?.url },
  ];
};

export function ErrorBoundary() {
  const error = useRouteError();

  if (!isRouteErrorResponse(error)) {
    console.error(error);
  }

  return (
    <Gutter className="flex flex-1 flex-col">
      <Heading className="flex flex-1 flex-col justify-center items-center pb-[33%] text-center">
        {isRouteErrorResponse(error)
          ? `HTTP ${error.status} - ${error.statusText || error.data}`
          : "Unknown Error"}
      </Heading>
    </Gutter>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="text-base font-josefin bg-bg text-text">
        <div className="min-h-screen flex flex-col">
          <Gutter size="lg" className="mt-[33px] flex gap-4 justify-between">
            <Link to="/">
              <h1 className="font-josefin text-4xl sm:text-6xl max-w-[11em] uppercase font-normal">
                Sisterhood of Traveling Feminist Literature
              </h1>
            </Link>
            <MobileMenu />
            <Navigation className="max-sm:hidden text-2xl text-end" />
          </Gutter>
          <main className="mt-6 sm:mt-12 flex-1 flex flex-col">{children}</main>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
