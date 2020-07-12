import React from "react";
import Container from 'react-bootstrap/Container';
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';

import ".././App.css";
const mapStyles = {
  width: '100%',
  height: '100%',
};
const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}
export class Contact extends React.Component
{
  constructor()
  {
    super();
    this.state=({})
  }
  
  render()
  {
    return(<>
        <Container  fluid style={{marginTop:"8rem",padding:"0.5rem",textAlign:"center"}}>
            <h6 style={{color:"#000"}}>We Are Available here to get succeed in your future </h6>
            <h1 style={{color:"#000",fontWeight:"900"}}> Get in  <span style={{color:"#55b81f"}}>Touch with us</span></h1>
        </Container>
        <Container style={{marginTop:"3rem",display:"flex"}}>
            <Container >
              <h1 style={{textAlign:"center",color:"#55b81f",fontWeight:"900"}}>Address</h1>
              <div style={{textAlign:"center",fontWeight:"300"}}>404, 4th-Floor, 93 Ashok Bhawan, Nehru Place, Delhi - 110019</div> 
            </Container>
            <Container>
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe width="900" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=404%2C%204th-Floor%2C%2093%20Ashok%20Bhawan%2C%20Nehru%20Place%2C%20Delhi%20-%20110019&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                </iframe>
            </div>
            </div>
            </Container>

            
        </Container>
        
        
    </>);
  }
}

