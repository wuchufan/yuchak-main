import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import classes from './App.module.scss';
import NavBar from './components/layout/NavBar/NavBar';
import HeadTitle from './components/layout/HeadTitle/HeadTitle';
import Landing from './components/layout/Landing/Landing';
import Estate from './components/layout/Estate/Estate';
import StartUp from './components/layout/StartUp/StartUp';
import Footer from './components/layout/Footer/Footer';

//redux
import store from './store';
import { Provider } from 'react-redux';

const App = () => {

  return (
  <Provider store={store}>
    <Fragment>
    <Router>
      <HeadTitle/>
      <NavBar/>
      <main className={classes['main']}>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/estate' component={Estate}/>
        <Route exact path='/startup' component={StartUp}/>
      </main>
    </Router>
    <Footer/>
  </Fragment>
</Provider>);
}

export default App;
