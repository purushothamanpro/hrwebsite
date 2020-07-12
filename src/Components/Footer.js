import React from "react";


import ".././App.css";
import { Container } from "react-bootstrap";


export class Footer extends React.Component
{
  constructor()
  {
    super();
    this.state=({})
  }
  render()
  {
    return(<>
        <Container  fluid style={{backgroundColor:"#343a40",marginTop:"6rem",padding:"1rem",textAlign:"center"}}>
            <h6 style={{color:"#fff",fontWeight:"900"}}> Designed and Developed in <span style={{color:"#55b81f"}}>INDIA</span></h6>
        </Container>
    </>);
  }
}


