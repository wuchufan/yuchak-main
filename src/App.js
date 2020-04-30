import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ScrollToTop from './components/utilities/ScrollToTop';
import classes from './App.module.scss';
import NavBar from './components/layout/NavBar/NavBar';
import HeadTitle from './components/layout/HeadTitle/HeadTitle';
import Landing from './components/layout/Landing/Landing';
import Estate from './components/layout/Estate/Estate';
import StartUp from './components/layout/StartUp/StartUp';
import News from './components/layout/News/News';
import FullArticle from './components/layout/News/FullArticle/FullArticle';
import Footer from './components/layout/Footer/Footer';

//redux
import store from './store';
import { Provider } from 'react-redux';

const App = () => {

  return (
  <Provider store={store}>
    <Fragment>
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop/>
      <HeadTitle/>
      <NavBar/>
      <main className={classes['main']}>
        <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/estate' component={Estate}/>
        <Route exact path='/startup' component={StartUp}/>
        <Route exact path='/news' component={News}/>
        <Route exact path='/news/:title' component={FullArticle}/>
        </Switch>
      </main>
    </Router>
    <Footer/>
  </Fragment>
</Provider>);
}

export default App;
