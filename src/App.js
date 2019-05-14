import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Form from './components/Form.js';
import Recipes from './components/Recipes.js';

// new key : 5074785212a5de786d6011caf3d80a47
const api_key = "bb2abb5dddf569665af6408e585572d7";

class App extends React.Component {
  state = {
    recipes : []
  };

  getRecipe = async (e) => {
    e.preventDefault();
    var recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${api_key}&q=${recipeName}&count=20`);
    const data = await api_call.json();
    this.setState({
      recipes : data.recipes
    });
    // console.log(this.state.recipes, "hello");
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({
      recipes
    });
  }

  render(){
  return (
      <div>
        <Header/>
        <Form getRecipe = {this.getRecipe}/>
        <Recipes recipes = {this.state.recipes}/>
      </div>
  );
  }
}
//key = bb2abb5dddf569665af6408e585572d7
export default App;
