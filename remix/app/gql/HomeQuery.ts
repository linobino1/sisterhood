import { graphql } from "gql.tada";

const HomeQuery = graphql(`
  query Home {
    Home {
      content
    }
  }
`);

export default HomeQuery;
