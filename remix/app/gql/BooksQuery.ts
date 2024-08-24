import { graphql } from "gql.tada";

const BooksQuery = graphql(`
  query Books {
    Books(sort: "-date") {
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

export default BooksQuery;
