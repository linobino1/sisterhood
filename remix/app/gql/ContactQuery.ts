import { graphql } from "gql.tada";

const ContactQuery = graphql(`
  query Contact {
    Contact {
      content
    }
  }
`);

export default ContactQuery;
