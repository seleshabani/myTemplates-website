import React from 'react'
import { useEffect } from 'react/cjs/react.development';

const Search = (props)=>{

    useEffect(()=>{
        window.document.querySelector('title').text = `MyTemplates | Recherche | ${props.match.params.query}`
    },[])
    return(
        <>
        </>
    )
}
export default Search;