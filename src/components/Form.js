import React from 'react';

export default function Form(props){
  return (
    <form style = {{
      display : "flex",
      justifyContent : "center",
      marginBottom : "20px"
    }} onSubmit = {props.getRecipe}>
      <input name = "recipeName" style = {{
        width : "200px",
        height : "20px",
        outline : "none",
        border : "2px black solid",
        textAlign : "center"
      }} onBlur = {handleBlur} onClick = {handleClick} type = "text" placeholder = "search here..."/>
      <button style = {{
        marginLeft : "20px",
        padding : "4px",
        backgroundColor : "green"
      }}>search</button>
    </form>
  );
}

function handleClick(e){
  e.target.setAttribute('placeholder', "");
}

function handleBlur(e){
  e.target.setAttribute('placeholder', "search here...");
}
