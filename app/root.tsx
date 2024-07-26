import {
  Link,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "virtual:uno.css";
import "@unocss/reset/tailwind-compat.css";
import Gutter from "./components/Gutter";
import { MetaFunction } from "@remix-run/node";
import { Navigation } from "./components/Navigation";

export const meta: MetaFunction = () => {
  return [
    { title: "Sisterhood of Traveling Feminist Literature" },
    {
      name: "description",
      content:
        "”The Sisterhood of Traveling Feminist Literature” is a project focused on sharing the literature we have come to love and appreciate as women by passing on books from one hand to another.",
    },
  ];
};

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
        <div className="min-h-screen">
          <Gutter size="lg" className="mt-[33px] flex gap-4 justify-between">
            <Link to="/">
              <h1 className="font-josefin text-4xl sm:text-6xl max-w-[11em] uppercase font-normal">
                Sisterhood of Traveling Feminist Literature
              </h1>
            </Link>
            <Navigation className="max-sm:hidden text-2xl" />
          </Gutter>
          {children}
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
