import { graphql } from "gql.tada";

const BookQuery = graphql(`
  query Book($slug: String!) {
    Books(where: { slug: { equals: $slug } }) {
      docs {
        article
      }
    }
  }
`);

export default BookQuery;
