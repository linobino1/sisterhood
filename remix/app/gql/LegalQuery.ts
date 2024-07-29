import { graphql } from "gql.tada";

const LegalQuery = graphql(`
  query Legal {
    Legal {
      content
    }
  }
`);

export default LegalQuery;
