import React from 'react';
import { Socialmedia } from "./Socialmedia";
import { HeaderImage } from "./HeaderImage";
import { Body } from "./Body";
import { Footer } from "./Footer";
import Header from './Header'
import { Contact } from './Contact';
import { Career } from './Career';

export class Page extends React.Component
{
    constructor()
  {
    super();
    this.state={
      isHome:true,
      isCareer:false,
      isConatact:false
    }
  }
  getPage=(val)=>{
    if(val==="home")
    {
        this.setState({isHome:true,isCareer:false,isConatact:false})
    }
    if(val==="career")
    {
        this.setState({isHome:false,isCareer:true,isConatact:false})
    }
    if(val==="contact")
    {
        this.setState({isHome:false,isCareer:false,isConatact:true})
    }
  }
    render()
    {
        return(
        this.state.isHome?<>
            <Socialmedia />
            <Header getpage={this.getPage}/>
            <HeaderImage /> 
            <Body/>
            <Footer/>
          </>:this.state.isCareer?<>
            <Socialmedia />
            <Header getpage={this.getPage}/>
            <Career/>
            <Footer/>
            </>:this.state.isConatact?
            <>
            <Socialmedia />
            <Header getpage={this.getPage}/>
            <Contact/>
            <Footer/>
            </>:null)
    }
}