import React,{ Fragment } from 'react';
import TitleImage from '../TitleImage/TitleImage';
import Buildings from './Buildings/Buildings';
import Carousel from './Carousel/Carousel';
import Questions from './Questions/Questions';


const Estate = () => (
  <Fragment>
    <TitleImage showTitle3={false} route='estate'/>
    <Buildings/>
    <Carousel/>
    <Questions/>
  </Fragment>
);



export default Estate;
