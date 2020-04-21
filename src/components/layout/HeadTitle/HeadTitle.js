import React from 'react';
import classes from './HeadTitle.module.scss';
import { connect } from 'react-redux';
import { switchToChinese, switchToEnglish } from '../../../actions/language';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const HeadTitle = ({switchToChinese, switchToEnglish}) => (
  <header className={classes['container']}>
    <div className={classes['icons']}>
      <a className={classes['icon']} href='/'>
        <FontAwesomeIcon size='1x' icon={faTwitter}/>
      </a>
      <a className={classes['icon']} href='/'>
        <FontAwesomeIcon size='1x' icon={faInstagram}/>
      </a>
      <a className={classes['icon']} href='/'>
        <FontAwesomeIcon size='1x'  icon={faFacebook}/>
      </a>


    </div>
    <div className={classes['title']}>
      Yuchak<span style={{color:'#4e9525'}}>Corporation</span>
    </div>
    <div className={classes['language']}>
        <button style={{marginRight:'2rem'}} className={classes['language__button']} onClick={()=>switchToEnglish()}>EN</button>
        <button className={classes['language__button']} onClick={()=>switchToChinese()}>中</button>
    </div>
  </header>
);


export default connect(null, { switchToChinese, switchToEnglish } )(HeadTitle);
