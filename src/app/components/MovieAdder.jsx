// Our saveToWatchList function is passed to this MovieAdder component from its parent component
export default function MovieAdder({saveToWatchList}) {

    // Set up a function for us to handle data submitted from our simple form
    function handleSubmit(formData) {
        // Get the movie name from whatever the user entered into the 'new-movie' input
        const movie = formData.get('new-movie');
        //How to add extra data to the search results list, add the data below, ensure it corresponds to the the return list below, and build an object from that and pass into the savetowatchlist call below instead of the string
        // const title = formData.get('title');
        const director = formData.get('director')
        // Log this to the console
        console.log(movie,'<--- new movie to add to watchlist');
        // We can run saveToWatchList here, which has been passed through on line 2
        // Running this will trigger an update to the state of the parent component, so the movie list will
        // update in our interface
        saveToWatchList(movie);
    }
    // Return some form HTML
    return <form action={handleSubmit}> 
        <input name="new-movie" type="text"></input>
        <input name="director" type="text"></input>
        <label for="director">Movie director</label>

        <button type="submit">Add to watchlist</button>
    </form>
}