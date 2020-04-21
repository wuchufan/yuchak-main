import React from 'react';
import classes from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import content from './content.json';
import { connect } from 'react-redux';
// import logo from '../../../assets/imgs/logo/logo.png';
// import logoText from '../../../assets/imgs/logo/logo-text.png';

const NavBar = ({language:{
  language
}}) => {

  //Navigation Bar item texts
  const {
    n1,
    n2,
    n3,
    n4,
    n5,
    n6
  } = content[language];

  return (
    <nav className={classes['container']}>
      {/* <div className={classes['nav__brand']}>
        <img src={logo} className={classes['logo']}  alt='logo'/>
        <img src={logoText} className={classes['logo-text']}  alt='logo-text'/>
      </div> */}
      <ul className={classes['nav__items']}>
        <NavLink exact={true} to='/' className={classes['nav__item']} activeClassName={classes['active']}>
          {n1}
        </NavLink>
        <a href='https://www.ycimm.com/' className={classes['nav__item']}>
          {n2}
        </a>
        <a href='http://www.petitceo.com/' className={classes['nav__item']}>
          {n3}
        </a>
        <NavLink  exact={true} to='/estate'  className={classes['nav__item']} activeClassName={classes['active']}>
          {n4}
        </NavLink>
        <NavLink exact={true} to='/startup' className={classes['nav__item']} activeClassName={classes['active']}>
          {n5}
        </NavLink>
        <NavLink exact={true} to='/news' className={classes['nav__item']} activeClassName={classes['active']}>
          {n6}
        </NavLink>
      </ul>
    </nav>
  );
}

const mapStateToProps = state =>({
  language:state.language
})

export default connect(mapStateToProps)(NavBar);
