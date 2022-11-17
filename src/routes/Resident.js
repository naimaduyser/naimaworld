import React from "react";
import { graphql } from "react-apollo";
import {gql} from '@apollo/client'

const Resident = ({data: { loading, resident } }) => {
    if (!loading) {
        return (
            <div className="container">
                <h1>{resident.name}</h1>
                <img src={resident.image.url} alt="resident" className="resident-image" />
            </div>
        )
    }
    return <h2>Loading....</h2>
}

const singleResident = gql`
    query singleResident($slug: String!) {
        resident: Resident(slug: $slug) {
            name
            image {
                url
            }
            biography
        }
    }
`

export default graphql(singleResident, {
    options: ({ match }) => ({
        variables: {
            slug: match.params.slug
        }
    })
})(Resident);