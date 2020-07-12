import React from "react";
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col'
import ".././App.css";


export class Body extends React.Component
{
  constructor()
  {
    super();
    this.state=({})
  }
  render()
  {
    return(<>
        <Container  fluid style={{backgroundColor:"#343a40",marginTop:"-8px",padding:"0.5rem",textAlign:"center"}}>
            <h6 style={{color:"#fff"}}>We Are Available On </h6>
            <h1 style={{color:"#fff",fontWeight:"900"}}> Job <span style={{color:"#55b81f"}}>Stock</span></h1>
        </Container>
        <Container style={{marginTop:"3rem",display:"flex"}}>
            <Container >
              <h1 style={{textAlign:"center"}}><i style={{fontSize:"10rem"}} class="fa fa-users" aria-hidden="true"></i></h1>
              <h1 style={{textAlign:"center",color:"#55b81f",fontWeight:"900"}}>15 K+</h1>
              <div style={{textAlign:"center",fontWeight:"300"}}>Skilled Canditates</div> 
            </Container>
            <Container >
              <h1 style={{textAlign:"center"}}><i style={{fontSize:"10rem"}} class="fa fa-bullhorn" aria-hidden="true"></i></h1>
              <h1 style={{textAlign:"center",color:"#55b81f",fontWeight:"900"}}>9 K+</h1>
              <div style={{textAlign:"center",fontWeight:"300"}}>Employers Registered</div> 
            </Container>
            <Container >
              <h1 style={{textAlign:"center"}}><i style={{fontSize:"10rem"}} class="fa fa-suitcase" aria-hidden="true"></i></h1>
              <h1 style={{textAlign:"center",color:"#55b81f",fontWeight:"900"}}>20 K+</h1>
              <div style={{textAlign:"center",fontWeight:"300"}}>Jobs Offered</div> 
            </Container>
        </Container>
        <Container  fluid style={{backgroundColor:"#fff",marginTop:"6rem",padding:"0.5rem",textAlign:"center"}}>
            <h1 style={{color:"#000",fontWeight:"900"}}> Browse Jobs By <span style={{color:"#55b81f"}}>Category</span></h1>
        </Container>
        <Container style={{marginTop:"3rem",display:"flex"}}>
            <Container >
              <h6 style={{textAlign:"center",fontWeight:"900"}}>Media</h6>
              <div style={{textAlign:"center",color:"#55b81f",fontWeight:"300"}}>5 Openings</div> 
            </Container>
            <Container >
              <h6 style={{textAlign:"center",fontWeight:"900"}}>UI/UX</h6>
              <div style={{textAlign:"center",color:"#55b81f",fontWeight:"300"}}>3 Openings</div> 
            </Container>
            <Container >
              <h6 style={{textAlign:"center",fontWeight:"900"}}>DataBase Admin</h6>
              <div style={{textAlign:"center",color:"#55b81f",fontWeight:"300"}}>6 Openings</div> 
            </Container>
            <Container >
              <h6 style={{textAlign:"center",fontWeight:"900"}}>WordPress Developer</h6>
              <div style={{textAlign:"center",color:"#55b81f",fontWeight:"300"}}>10 Openings</div> 
            </Container>
        </Container>
        <Container style={{marginTop:"3rem",display:"flex"}}>
            <Container >
              <h6 style={{textAlign:"center",fontWeight:"900"}}>Media</h6>
              <div style={{textAlign:"center",color:"#55b81f",fontWeight:"300"}}>5 Openings</div> 
            </Container>
            <Container >
              <h6 style={{textAlign:"center",fontWeight:"900"}}>UI/UX</h6>
              <div style={{textAlign:"center",color:"#55b81f",fontWeight:"300"}}>3 Openings</div> 
            </Container>
            <Container >
              <h6 style={{textAlign:"center",fontWeight:"900"}}>DataBase Admin</h6>
              <div style={{textAlign:"center",color:"#55b81f",fontWeight:"300"}}>6 Openings</div> 
            </Container>
            <Container >
              <h6 style={{textAlign:"center",fontWeight:"900"}}>WordPress Developer</h6>
              <div style={{textAlign:"center",color:"#55b81f",fontWeight:"300"}}>10 Openings</div> 
            </Container>
        </Container>
        <Container  fluid style={{backgroundColor:"#fff",marginTop:"6rem",padding:"0.5rem",textAlign:"center"}}>
            <h1 style={{color:"#000",fontWeight:"900"}}> Our <span style={{color:"#55b81f"}}>clients</span> & Our <span style={{color:"#55b81f"}}>Beneficiaries</span></h1>
        </Container>
        <Container style={{marginTop:"3rem",display:"flex"}}>
            <Container style={{backgroundColor:"#8e8e8e",marginTop:"8%"}}>
              <img alt="name" src={require('../assets/download.png')} style={{marginLeft: "25%",marginTop: "-35%",borderRadius: "50%"}}/>
              <h6 style={{textAlign:"center",fontWeight:"900",color:"#fff"}}>Brand Name</h6>
              <div style={{textAlign:"center",color:"#55b81f",fontWeight:"300"}}>Skilled Canditates</div> 
            </Container>
            <Container style={{backgroundColor:"#8e8e8e",marginTop:"8%"}}>
              <img alt="name" src={require('../assets/download.png')} style={{marginLeft: "25%",marginTop: "-35%",borderRadius: "50%"}}/>
              <h6 style={{textAlign:"center",fontWeight:"900",color:"#fff"}}>Canditate Name</h6>
              <div style={{textAlign:"center",color:"#55b81f",fontWeight:"300"}}>Employers Registered</div> 
            </Container>
            
        </Container>
    </>);
  }
}