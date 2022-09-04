import getTrendMoviesPics from "../services/getTrendMoviesPics";
import Header from "./Header";
import Movies from "./Movies";
import Panels from "./Panels";
import Slider from "./Slider";




const Home = () => {

  // getTrendMoviesPics().then(e => console.log(e))

    return (
      <>
        <Header></Header>
        <Slider></Slider>
        <Panels></Panels>
        <Movies></Movies>
       
      </>
    );
}

export default Home