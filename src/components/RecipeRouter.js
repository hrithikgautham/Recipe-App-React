import React from 'react';
import {Link} from 'react-router-dom';

const api_key = "bb2abb5dddf569665af6408e585572d7";

class RecipeRouter extends React.Component {
  state = {
    activeRecipe : []
  };

  imgStyle(){
    return {
      display : "block",
      marginLeft : "auto",
      marginRight : "auto",
      marginTop : "15px"
    };
  }

  componentDidMount = async () => {
    var title = this.props.location.state.recipe;
    const req = await fetch(`https://www.food2fork.com/api/search?key=${api_key}&q=${title}`);
    const res = await req.json();
    // console.log(res);
    this.setState({
      activeRecipe : res.recipes[0]
    });
    // console.log(this.state.activeRecipe);
  }
  render(){
    // console.log(this.props);
      let recipe = this.state.activeRecipe;
      return (
            <div>
            {
              this.state.activeRecipe.length !== 0 && (
                <div>
              <img style = {this.imgStyle()} width = "60%" height = "60%" src = {recipe.image_url} alt = {recipe.title}/>
              <h1>publisher : {recipe.publisher}</h1>
              <p>
                <a href = {recipe.publisher_url}>click here for recipe!</a>
              </p>
              <button><Link to = "/">Go Home</Link></button>
            </div>)
            }
            </div>
      );
  }
}

export default RecipeRouter;
