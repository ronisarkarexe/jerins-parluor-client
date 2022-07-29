import React from 'react';
import Header from '../Sheare/Header/Header';
import HomeSlider from './HomeSlider'
import './Home.css';
import AwesomeServices from './AwesomeServices';
import ScreenHandle from './ScreenHandle';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';
import Footer from '../Sheare/Footer/Footer';

const Home = () => {
   return (
      <div>
         <Header/>
         <HomeSlider/>
         <AwesomeServices/>
         <ScreenHandle/>
         <Testimonials/>
         <ContactUs/>
         <Footer/>
      </div>
   );
};

export default Home;