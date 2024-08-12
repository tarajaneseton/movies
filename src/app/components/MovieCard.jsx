export default function MovieCard({props}) {
    return (
        <div key={props.id} className="movie-card">
            <ul className="movie-details">
                <li className="movie-name">{props.original_title}</li>
                <li className="movie-rating">{props.vote_average}</li>
                <li className="movie-release-date">{props.release_date}</li>
                <li className="movie-runtime">{props.runtime}</li>
                <li className="movie-language">{props.original_language}</li>
                <li className="movie-overview">{props.overview}</li>
                </ul>
                {/* <a href={url} class="movie-trailer">
                    Play Trailer
                </a> */}
        </div>
    );
}
