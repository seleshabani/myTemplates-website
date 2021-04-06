import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';

const Search = (props)=>{

    const SearchQuery = props.match.params.query
    useEffect(()=>{
        window.document.querySelector('title').text = `MyTemplates | Recherche | ${SearchQuery}`
    },[SearchQuery])
    return(
        <>
        <h1>Résultat de Recherche pour : {SearchQuery}</h1>
        </>
    )
}
export default Search;