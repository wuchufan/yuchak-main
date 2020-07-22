import React, {useState} from 'react';
import classes from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import content from './content.json';
import { connect } from 'react-redux';
import MenuToggleButton from './MenuToggleButton/MenuToggleButton';

const NavBar = ({language:{
  language
}}) => {


  const [showMenu, toggleMenu] = useState(false);
  //Navigation Bar item texts
  const {
    n1,
    n2,
    n3,
    n4,
    n5,
    n6
  } = content[language];

  let navClass = classes['nav__items']
  if(showMenu){
    navClass = `${classes['nav__items']} ${classes['show-nav']}`
  }


  return (
    <nav className={classes['nav']}>
      <div className={classes['nav__toggle-button']}>
        <MenuToggleButton toggle={toggleMenu} show={showMenu}/>
      </div>
      <ul className={navClass}>
        <NavLink exact={true} to='/' className={classes['nav__item']} activeClassName={classes['active']}>
          {n1}
        </NavLink>
        {/* <a href='https://www.ycimm.com/' className={classes['nav__item']}>
          {n2}
        </a> */}
        <a href='http://www.petitceo.com/' className={classes['nav__item']}>
          {n3}
        </a>
        <NavLink  exact={true} to='/estate'  className={classes['nav__item']} activeClassName={classes['active']}>
          {n4}
        </NavLink>
        <NavLink exact={true} to='/startup' className={classes['nav__item']} activeClassName={classes['active']}>
          {n5}
        </NavLink>
        <NavLink to='/news' className={classes['nav__item']} activeClassName={classes['active']}>
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
