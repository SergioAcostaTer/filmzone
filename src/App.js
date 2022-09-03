import './App.css';
import './normalize.css';

import Header from "./components/Header"
import Slider from "./components/Slider"
import Proves from "./components/Proves"
import Panels from "./components/Panels"
import Movies from './components/Movies';



function App() {

  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <Panels></Panels>
      <Movies></Movies>
    </>
  );
}

export default App;
