import React from "react";

import FigureImage from 'react-bootstrap/FigureImage';

import ".././App.css";


export class HeaderImage extends React.Component
{
  constructor()
  {
    super();
    this.state=({})
  }
  render()
  {
    return(<FigureImage src={require('../assets/header.png')} fluid style={{minHeight:"200px"}}/>);
  }
}


