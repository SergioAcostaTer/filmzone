import './App.css';
import './normalize.css';

import Header from "./components/Header"
import Slider from "./components/Slider"
import Proves from "./components/Proves"
import Panels from "./components/Panels"
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProviderDetail from './components/ProvidersDetails';



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:id' element={<MovieDetails/>}></Route>
        <Route path='/providers/:name' element={<ProviderDetail/>}></Route>
      </Routes>
    </>
  );
}

export default App;
