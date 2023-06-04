import './App.css'
import PreNavbar from "./components/PreNavbar/PreNavbar";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./components/Slider/Slider";
import data from './data/data.json'
import Offers from "./components/Offers/Offers";
import Heading from './components/Heading/Heading';
import StarProducts from './components/StarProducts/StarProducts';
import HotAccessoriesMenu from './components/Hotaccessoriesmenu/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories/HotAccessories';
import ProductReviews from './components/ProductReview/ProductReviews';
import Videos from './components/Videos/Videos';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import NavOptions from './components/NavOption/NavOption.jsx'



function App() {
  return (

    <Router>
      <PreNavbar />
      <Navbar />

      <NavOptions miphones={data.miPhones} redmiphones={data.redmiPhones} tv={data.tv} laptops={data.laptop} home={data.home} fitstyle={data.fitnessAndLifeStyle} radio={data.audio} accessories={data.accessories} />


      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text='STAR PRODUCT' />
      <StarProducts star={data.starProduct} />
      <Heading text='HOT ACCESSORIES' />
      <HotAccessoriesMenu />

      <Routes>
        <Route exact path='/music' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}></Route>
        <Route exact path='/smartDevice' element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}></Route>
        <Route exact path='/home' element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}></Route>
        <Route exact path='/lifestyle' element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />}></Route>
        <Route exact path='/mobileAccessories' element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}></Route>
      </Routes>

      <Heading text='PRODUCT REVIEW' />
      <ProductReviews productReviews={data.productReviews} />

      <Heading text='VIDEOS' />
      <Videos videos={data.videos} />

      <Heading text='IN PRESS' />
      <Banner end={data.banner.end} />

      <Footer footer={data.footer} />

    </Router>
  );
}

export default App;
