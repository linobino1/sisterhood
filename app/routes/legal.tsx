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
    <Gutter size="sm">
      <p className="max-w-lg mt-12">
        This website has been made by:
        <br />
        <br />
        Agnė Jurgelėnaitė
        <br />
        Kemetiškių gatvė 12
        <br />
        Molėtų rajonas
        <br />
        Lithuania
        <br />
        <br />
        <a href="mailto:contact@sisterhoodoftravelingfeministliterature.com">
          contact@sisterhoodoftravelingfeministliterature.com
        </a>
      </p>
    </Gutter>
  );
}
