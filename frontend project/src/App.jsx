
import './App.css'
 import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import{Route,Routes} from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext';


function App() {

  return (
    
      <MovieProvider>
        <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
       <Route path='/favorites' element={<Favorites/>} />
    </Routes>
    </div>
      </MovieProvider>


  )
}

export default App
