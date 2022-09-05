
import Header from "../components/Header";
import Movies from "../components/Movies";
import Panels from "../components/Panels";
import Slider from "../components/Slider";




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