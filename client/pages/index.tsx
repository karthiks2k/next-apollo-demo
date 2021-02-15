import { apolloClient } from "../lib/apolloClient";
import { GET_CONTACTS } from "../graphql/queries";
import ContactList from "../components/contactList";

const IndexPage = () => {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1 >
        My Contacts
      </h1>
      <ContactList />
    </div>
  )
};

export async function getStaticProps() {
  await apolloClient.query({
    query: GET_CONTACTS,
    variables: {
      "pagination": {
        "offset": 0,
        "limit": 20
      }
    }
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default IndexPage;