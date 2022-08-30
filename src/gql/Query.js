import {gql} from "@apollo/client";

export const mixes = gql`
query MyQuery {
    mixes(orderBy: date_DESC, first:100) {
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