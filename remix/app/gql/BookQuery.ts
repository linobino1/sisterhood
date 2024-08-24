import { graphql } from "gql.tada";

const BookQuery = graphql(`
  query Book($slug: String!) {
    Books(where: { slug: { equals: $slug } }) {
      docs {
        slug
        title
        author
        date
        info
        image {
          url
          alt
        }
        article
      }
    }
  }
`);

export default BookQuery;
