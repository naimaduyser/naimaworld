import {gql} from "@apollo/client";

export const content = gql`
query MyQuery {
  residents {
    name
    biography
    slug
    image {
      url
    }
  }
  mixes(first:100) {
    audio {
      url
    }
    image {
      url
    }
    date
    title
    genre
    madeBy
  }
}
`
