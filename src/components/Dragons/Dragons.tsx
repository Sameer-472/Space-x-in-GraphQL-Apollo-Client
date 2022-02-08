import React from 'react'
import { useDragonsQuery } from '../../generated/graphql'

export const Dragons = () => {
    const {loading , error , data} = useDragonsQuery();
    if(loading) return <h1>Data is loading</h1>
    if(error) return <h1>Error 404</h1>
    console.log(data?.dragons);
    return (
        <div>
            {/* {data?.dragons?.map} */}
        </div>
    )
}
