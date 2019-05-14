import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from "../App.js";
import RecipeRouter from './RecipeRouter';
//this file is rendered in index.js
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/" component = {App}/>
        <Route path = "/recipe/:id" component = {RecipeRouter}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
