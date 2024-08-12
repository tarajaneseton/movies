
import React, { useEffect } from 'react'

function Movie = () => {

    const getMovie = ()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=7c1be07eb15d082f585c8c039f3ca132")
        .then(res => res.json())
        .then (json => console.log(json))
    }

    useEffect(()=>{
        getMovie()
    },[])
  return (
    <div>Movie</div>
  )
}

export default Movie