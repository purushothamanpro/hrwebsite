import React from 'react';
import '.././App.css'
export class Socialmedia extends React.Component
{
    constructor()
    {
        super();
        this.state={
            isTrue:true,
            class:"fa fa-arrow-right span",
        }

    }
    handleArrow=()=>
    {
        if(this.state.isTrue){this.setState({isTrue:false,class:"fa fa-arrow-left span"})}
        else{this.setState({isTrue:true,class:"fa fa-arrow-right span"})}
    }
    render()
    {
        return(
            this.state.isTrue?(<div class="icon-bar">
            <a href="" class="facebook"><i class="fa fa-facebook"></i></a> 
            <a href="" class="twitter"><i class="fa fa-twitter"></i></a> 
            <i class={this.state.class} style={{marginTop: "25px"}} aria-hidden="true" onClick={this.handleArrow}></i><a href="" class="google"><i class="fa fa-google"></i></a> 
            <a href="" class="linkedin"><i class="fa fa-linkedin"></i></a>
            <a href="" class="youtube"><i class="fa fa-youtube"></i></a> 
        </div>):(<div class="icon-bar"><i class={this.state.class} style={{marginTop: "0px"}} aria-hidden="true" onClick={this.handleArrow}></i></div>)
        );
    }
}