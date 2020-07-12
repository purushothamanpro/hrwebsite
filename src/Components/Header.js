import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ".././App.css";
import { Page } from "../App";
import { Contact } from "./Contact";


class Header extends React.Component
{
  constructor()
  {
    super();
    this.state=({isHome:true,isCareer:false,isContact:false})
  }
  getMenu=(e)=>
  {
    if(e.target.id==="home")
    {
      this.props.getpage("home")
      this.setState({isHome:true,isCareer:false,isContact:false})
    }
    if(e.target.id==="career")
    {
      this.setState({isHome:false,isCareer:true,isContact:false})
      this.props.getpage("career")
    }
    if(e.target.id==="contact")
    {
      this.props.getpage("contact")
      this.setState({isHome:false,isCareer:false,isContact:true})
    }
  }
  render()
  {
    return(
      <>
        <Navbar bg="dark" variant="dark" expand="lg" style={{position: "sticky",top:0,justifyContent:"space-between"}}>
          <Navbar.Brand href="#home" style={{fontWeight:"900",color:"#55b81f"}}>HR Services</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="mr-center" style={{marginLeft:"auto"}}>
              <Nav.Link id="home" href="javascript:void(0)" className={this.state.isHome?"highlight":""} onClick={this.getMenu}>Home</Nav.Link>
              <Nav.Link id="career" href="javascript:void(0)" className={this.state.isCareer?"highlight":""}  onClick={this.getMenu}>Career</Nav.Link>
              <Nav.Link id="contact" href="javascript:void(0)" className={this.state.isContact?"highlight":""}  onClick={this.getMenu}>Contact</Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
