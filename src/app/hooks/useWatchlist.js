'use client'

import { useState, useEffect } from 'react';

export default function useWatchlist() {
  const [watchList,setWatchList] = useState(JSON.parse(localStorage.getItem('watchList')) ?? []);

  useEffect(() => { 
    localStorage.setItem('watchList',JSON.stringify(watchList))
  },[watchList])

  function saveToWatchList(movie) {
    console.log(movie,'<------ new movie being addded')

    setWatchList(oldWatchlist => ([
      ...oldWatchlist,
      movie
    ]))
  }

  return {
    saveToWatchList,
    watchList,
  };
}
