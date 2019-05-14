import React from 'react'

export default function Header(){
  return (
    <header style = {headerStyle()}>
      <h1 style  = {{textAlign : "center"}}>Recipe Search</h1>
    </header>
  );
}

function headerStyle(){
  return {
    width : "100%",
    height : "70px",
    backgroundColor : "##eee",
    paddingTop : "20px"
  };
}
