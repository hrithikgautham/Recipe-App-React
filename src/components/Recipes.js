import React from 'react';
import {Link} from 'react-router-dom';


let Recipes = props => (
  <div style = {divStyle2()}>
    {
      props.recipes.map(recipe =>
        <div style = {divStyle1()} key = {recipe.recipe_id}>
            <img style = {imgStyle()} src = {recipe.image_url} alt = {recipe.title}/>
            <p style = {p1Style()}>
              { recipe.title.length < 20 ?
                recipe.title :
                `${recipe.title.substring(0, 20)}...`}
            </p>
            <p style = {p2Style()}>publisher : {recipe.publisher}</p>
            <button style = {btnStyle()}>
              <Link to = {
                {
                  pathname : `/recipe/${recipe.recipe_id}`,
                  state : {recipe : recipe.title}
                }
              }>show recipe?</Link>
            </button>
        </div>
      )
    }
  </div>
);

function divStyle2(){
  return {
    display : "flex",
    flexDirection : "row",
    flexWrap : "wrap"
  };
}

function divStyle1(){
  return {
      width : "200px",
      height : "250px",
      border : "2px green solid",
      margin : "15px"
  };
}

function imgStyle(){
  return {
    width : "180px",
    display : "block",
    marginLeft : "auto",
    marginRight : "auto",
    height : "100px",
    marginTop : "15px"
  };
}

function p1Style(){
  return {
    fontSize : "1em",
    textAlign : "center",
    color : "red",
    fontFamily : "arial",
    padding : "auto 10px",
    marginTop : "15px"
  };
}

function p2Style(){
  return {
    fontSize : "1em",
    textAlign : "center",
    color : "blck",
    fontFamily : "arial",
    padding : "auto 10px",
    marginTop : "10px"
  };
}

function btnStyle(){
  return {
    display : "block",
    width : "120px",
    height : "30px",
    marginLeft : "auto",
    marginRight : "auto",
    marginTop  : "10px",
    backgroundColor : "cyan",
    fontWeight : "bold",
    border : "none",
    position : "relative",
    right : "100"
  };
}

export default Recipes;
