import './App.css';
import Accordian from './components/accordion';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';

function App() {
  return (
    <div className="App"> 
      <h1>Hello React Components Demo</h1>
      {/* Accordion */}
      <Accordian/>

      {/* Random Color Generator */}
      <RandomColor/>

      {/* Star Rating */}
      <StarRating/>

      {/* Image Slider */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />
    </div>
  );
}

export default App;
