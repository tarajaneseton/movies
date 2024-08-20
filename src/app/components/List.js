import MovieCard from "./MovieCard";

export default function List() {
    const movies = [
        {
            original_title: 'rest Gump',
            vote_average: '85%',
            release_date: '1994-10-07',
            runtime: '2h 22m',
            original_language: 'en',
            overview: 'A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.'
        }
    ]
    return (
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <MovieCard {...movie} />
                </li>
            ))}
        </ul>
    )
}

