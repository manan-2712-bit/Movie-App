import MovieCard from "../components/MovieCard"
import { useState, useEffect} from "react";
import { searchMovies, getPopularMovies } from "../services/api";
 import './Home.css'
const Home = () => {
const [searchQuery, setSearchQuery]=useState("")
const [movies, setMovies] = useState([]);
const[error, setError] =useState(null);
const[loading, setLoding]= useState(true)

useEffect(()=>{
  const loadPopularMovies = async ()=>{
        try{
      const popularMovies = await getPopularMovies()
      setMovies(popularMovies)
    } catch (err){
      console.log(err)
      setError("Failed to load movies...")
    }
    finally{
      setLoding(false)
    }
  }
  loadPopularMovies()

},[])


const handleSearch= async (e)=>{
  e.preventDefault()
   if(!searchQuery.trim()) return
   if(loading) return
setLoding(true)
try{
  const searchResults = await searchMovies(searchQuery)
  setMovies(searchResults)
  setError(null)
} catch(err){
  console.log(err)
 setError("failed to search movies...")
} finally{
  setLoding(false)
}

   setSearchQuery("")
}
  return (
<div className="home">
    <form onSubmit={handleSearch} className="search-form">
     <input type="text" placeholder="Search For Movies" className="search-input" value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}/>
     <button type="submit" className="search-button">Search</button>
    </form>

      {error && <div className="erro-message">{error}</div>}
      
    {loading? (
      <div className="loading"> loading...</div>
    ) :(  <div className="movies-grid">
        {movies.map(movie=> (
       (<MovieCard movie={movie} key={movie.id}/>)
        ))}
    </div>)}
  
</div>
  )
}

export default Home