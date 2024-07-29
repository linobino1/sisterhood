import { graphql } from "gql.tada";

const AboutQuery = graphql(`
  query About {
    About {
      content
    }
  }
`);

export default AboutQuery;
