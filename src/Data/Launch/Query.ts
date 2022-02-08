import gql from 'graphql-tag'

export const data = gql `
    query  Launches{
        launches {
          details
          id
          launch_success
          launch_year
          links {
            article_link
            flickr_images
          }
          mission_name
          rocket {
            rocket_name
          }
        }
      }
       
`