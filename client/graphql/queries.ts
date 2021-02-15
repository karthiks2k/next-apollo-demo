import { gql } from "@apollo/client";

export const GET_CONTACTS: any = gql`
  query QueryContact($pagination: PaginationInput!) {
    getContacts (pagination: $pagination) {
      id,
      name,
      doorNo,
      address,
      postCode,
      city,
      phone,
      email
    }
  }`;