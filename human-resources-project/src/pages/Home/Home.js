import React from 'react'
import NavbarCustom from '../../components/organisms/Navbar';
import './Home.css'
import Footer from '../../components/organisms/CustomFooter';
import Slider from '../../components/organisms/CardSlider';
import About from '../../components/organisms/About';
import References from '../../components/organisms/References';


function home() {
  const logos = [
    'https://assets-global.website-files.com/6113889e45c6e62ebf4ca212/61151b580dac64c995e2daea_kolayik_decathlon-1.svg',
    'https://assets-global.website-files.com/6113889e45c6e62ebf4ca212/61152901d2468247ac4f0859_kolayik_rentgo.svg',
    'https://assets-global.website-files.com/6113889e45c6e62ebf4ca212/651be0f4afab09be7c20e050_aytemiz%20logo%201.svg',
  ];

  return (
    <>
    <NavbarCustom/> 
    <About/>
    <References logos={logos}/>
    <Slider/>
    <Footer/>

    </>
    
  );
}

export default home;


