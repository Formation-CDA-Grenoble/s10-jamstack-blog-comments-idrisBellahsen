import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ArticlePage, HomePage, CategoryPage, SearchPage, CategoryListPage } from './pages';

const App = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/article/:slug' component={ArticlePage} />
      <Route exact path='/category' component={CategoryListPage} />
      <Route exact path='/category/:slug' component={CategoryPage} />
      <Route exact path='/search/:argument' component={SearchPage} />
    </Switch>
  </BrowserRouter>
;

export default App;
