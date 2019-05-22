import gql from 'graphql-tag'

const GET_CARS = gql `
query Vehicles($skip: Int!, $take: Int!) {
    vehicles(query: { skip: $skip, take: $take }) {
      edges {
        node {
          id
          year
          make
          trim
          model
          rideshareEligible
          pricing {
            value
            duration
            durationUnit
          }
          location {
            id
            name
          }
          featureImage {
            url
          }
        }
      }
      totalCount
      pageInfo {
        hasNextPage
      }
    }
  }
`

const QueriesString = {
    GET_CARS
}

export default QueriesString