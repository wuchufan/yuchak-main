import React,{ Fragment } from 'react';
import Service from './Service/Service';
import NewsLetter from './NewsLetter/NewsLetter';
import TitleImage from '../TitleImage/TitleImage';
import AboutUs from './AboutUs/AboutUs';


const Landing = () => {

  return (
    <Fragment>
    <TitleImage route='landing'/>
    <Service/>
    <AboutUs/>
    <NewsLetter/>
    </Fragment>
  );
}


export default Landing;
