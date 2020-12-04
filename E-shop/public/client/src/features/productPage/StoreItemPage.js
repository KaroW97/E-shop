import React from 'react'
import { useParams } from 'react-router-dom';
export const StoreItemPage = ({match}) =>{
    let id = match.params.id
    console.log(id)
    return(
        <p>jestem id {id}</p>
    )
}