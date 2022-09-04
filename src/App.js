import './App.css';
import './normalize.css';

import MovieDetails from './components/MovieDetails';

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProviderDetail from './components/ProvidersDetails';
import SearchResults from './pages/SearchResults';



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:id' element={<MovieDetails/>}></Route>
        <Route path='/providers/:name' element={<ProviderDetail/>}></Route>
        <Route path='/search/:query' element={<SearchResults/>}></Route>

      </Routes>
    </>
  );
}

export default App;
