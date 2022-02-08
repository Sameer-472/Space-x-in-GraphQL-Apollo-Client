import gql from 'graphql-tag'

export const data = gql ` 
    query Dragons {
        dragons {
            name
            description
            dry_mass_kg
            dry_mass_lb
            first_flight
            crew_capacity
            diameter {
              feet
              meters
            }
          }
    }

`