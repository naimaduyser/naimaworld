import {gql} from "@apollo/client";

export const mixes = gql`
query MyQuery {
    mixes(orderBy: date_DESC) {
      audio {
        url
      }
      image {
        url
      }
      date
      title
      genre
    }
  }  
`