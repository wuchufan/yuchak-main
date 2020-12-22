import React from 'react';
import classes from './Footer.module.scss';
// import logo from '../../../assets/imgs/logo/logo.png';
// import logoText from '../../../assets/imgs/logo/logo-text.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (<footer className={classes['container']}>
    <div></div>
    <div className={classes['brand']}>

      <h1 className={classes['brand__title']}>Yuchak
        <span className={classes['brand__title-span']} style={{
            color: '#4e9525'
          }}>Group</span>
      </h1>

    </div>
    <div></div>
    {/* <div className={classes['address']}>
      <h3 className={classes['address__header']}>Address</h3>
      <p className={classes['address__content']}>Suite 802. 100 Allstate Pkwy, Markham, ON L3R 6H3</p>

    </div>
    <div className={classes['contact']}>
      <h3 className={classes['contact__header']}>Contact</h3>
      <p className={classes['contact__content']}>Office Number: +1 (365)608-5186</p>
      <p className={classes['contact__content']}>Email: info@yuchakcorp.com</p>
    </div> */}
    <p className={classes['copyright']}>© {currentYear} by Yuchak group</p>
  </footer>);
}

export default Footer;
