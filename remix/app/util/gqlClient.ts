import { Client, cacheExchange, fetchExchange } from "urql";

/**
 * pass in the request to authenticate the client
 */
export const gqlClient = () => {
  return new Client({
    url: `${process.env.BACKEND_URL}/api/graphql`,
    exchanges: [cacheExchange, fetchExchange],
  });
};
