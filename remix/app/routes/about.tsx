import { json, LoaderFunctionArgs } from "@remix-run/node";
import AboutQuery from "~/gql/AboutQuery";
import { errors } from "~/util/errors";
import { gqlClient } from "~/util/gqlClient";
import LandingPage from "./_index";

export const loader = async ({}: LoaderFunctionArgs) => {
  const res = await gqlClient().query(AboutQuery, {});

  if (res.error || !res.data) {
    throw json(errors[500], 500);
  }

  return {
    content: res.data.About?.content ?? {},
  };
};

export default LandingPage;
