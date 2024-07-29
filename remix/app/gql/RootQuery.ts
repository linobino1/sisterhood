import { graphql } from "gql.tada";

const RootQuery = graphql(`
  query Root {
    Site {
      meta {
        description
        title
        image {
          url
        }
      }
    }
  }
`);

export default RootQuery;
