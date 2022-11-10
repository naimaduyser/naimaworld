import {gql} from "@apollo/client";

export const content = gql`
query MyQuery {
  residents {
    name
    biography
    image {
      url
    }
  }
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

