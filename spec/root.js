/**
 * Created by denvey on 16/4/19.
 */
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './components/Home';
import Button from './components/button';
import Modal from './components/modal';
import View from '../src/components/View';
import Page from '../src/components/Page';
import TabBar from './components/tabBar';
import Preloader from './components/preloader';
import Accordion from './components/accordion';
import Grid from './components/gird';
// import Slider from './components/Slider';
import style from './style';

const _hrefProject = () => {
  window.href = 'http://reui.yilahe.com';
};

const Root = () => (
  <Router history={browserHistory}>
    <Route path="/" component={View}>
      <IndexRoute component={Home} />
      <Route path="/accordion" component={Accordion} />
      <Route path="/button" component={Button} />
      <Route path="/grid" component={Grid} />
      <Route path="/modal" component={Modal} />
      <Route path="/preloader" component={Preloader} />
    </Route>
  </Router>
);
export default Root;