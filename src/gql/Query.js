import { useQuery } from "@apollo/client";
import {gql} from "@apollo/client";

export const content = gql`
query MyQuery {
  genres: __type(name: "Genres") {
    enumValues {
      name
    }
  }
  residents {
    name
    biography
    slug
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
    madeBy
  }
}
`

export const Test = () => {
  const data = useQuery(content);
  return console.log(data.mixes);
}

