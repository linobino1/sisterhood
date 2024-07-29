import {
  isRouteErrorResponse,
  json,
  Link,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import "virtual:uno.css";
import "@unocss/reset/tailwind-compat.css";
import Gutter from "./components/Gutter";
import { MetaFunction } from "@remix-run/node";
import { Navigation } from "./components/Navigation";
import { gqlClient } from "./util/gqlClient";
import RootQuery from "./gql/RootQuery";
import { errors } from "./util/errors";
import Heading from "./components/Heading";

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
      <Heading className="flex flex-1 flex-col justify-center pb-[33%] text-center">
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
      <body className="font-josefin ">
        <div className="min-h-screen mb-12">
          <Gutter size="lg" className="mt-[33px] flex gap-4 justify-between">
            <Link to="/">
              <h1 className="font-josefin text-4xl sm:text-6xl max-w-[11em] uppercase font-normal">
                Sisterhood of Traveling Feminist Literature
              </h1>
            </Link>
            <Navigation className="max-sm:hidden text-2xl" />
          </Gutter>
          <main className="mt-12">{children}</main>
        </div>
        <footer className="sm:hidden my-8 text-sm">
          <Gutter>
            <Navigation className="flex-row justify-between text-2xl" />
          </Gutter>
        </footer>
        <footer className="bg-gray-200 text-gray-600 font-normal py-1 font-sans text-xs text-right px-2">
          <NavLink to="/legal">legal notice</NavLink>
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
