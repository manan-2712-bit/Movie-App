import "./Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard";

const Favorites = () => {

    const { favorites } = useMovieContext();


    if (favorites && favorites.length > 0) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map(movie => (
                        <MovieCard movie={movie} key={movie.id}/>
                    ))}
                </div>
            </div>
        );
    }

  
       return (
    <div className="favorite-empty">
        <h2>No favorite movies yet</h2>
        <p>Explore our catalog, hit the favorite button on your top picks, and they will appear right here!</p>
    </div>
);
    
}

export default Favorites;