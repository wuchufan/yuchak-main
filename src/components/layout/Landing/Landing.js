import React,{ Fragment } from 'react';
import Service from './Service/Service';
import NewsLetter from './NewsLetter/NewsLetter';
import TitleImage from '../TitleImage/TitleImage';
import AboutUs from './AboutUs/AboutUs';


const Landing = () => {

  return (
    <Fragment>
    <TitleImage showTitle3={true} route='landing'/>
    <Service/>
    <AboutUs/>
    </Fragment>
  );
}


export default Landing;
