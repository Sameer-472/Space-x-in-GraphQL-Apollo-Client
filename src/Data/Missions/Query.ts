import {gql}  from 'graphql-tag';

const data = gql `
    query Mission {
        missions {
            manufacturers
            name
            description
            website
            twitter
          }
    }
`