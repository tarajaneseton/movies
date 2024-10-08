'use client'

import MovieCard from './components/MovieCard';
import Movie from './movie/page';
import MovieAdder from './components/MovieAdder';
import useWatchlist from './hooks/useWatchlist';
import Link from 'next/link'
import MovieList from './components/MovieList';
import Trending from './components/Trending';

export default function Home() {
  // Include our helper function and the watchList variable from the hook in src/app/hooks
  const {saveToWatchList, watchList} = useWatchlist();
  
  return (
      <>
        {/* Pass saveToWatchList as a prop to MovieAdder so we can add things to the watchlist from within that component */}
        <MovieAdder saveToWatchList={saveToWatchList} />
        {/* We need to specify a aesgrdrnssssskey whenever we're rendering multiple components or HTML elements. */}
        {/* This lets React track which `li` element maps to which item in the `watchlist` array, so that it can update only the items that have changed */}
        {/* {watchList.length ? <ul>{watchList.map(film => <li key={film}></li>)}</ul> : <p>No watch lists in local storage</p>} */}
        <Link href="/home">Home</Link>
        <Link href="/watchlist">Watchlist</Link>
        <Link href="/explore">Explore</Link>
        {/* <MovieList query={query} /> */}
        <Trending />
        <Movie />
<MovieCard />
      </>
  )
}