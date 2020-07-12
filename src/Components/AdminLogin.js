import React from "react";
import axios from 'axios';

import ".././App.css";
import { Container,Form,Button } from "react-bootstrap";


export class Admin extends React.Component
{
  constructor()
  {
    super();
    this.state=({username:null,password:null,user:[],isError:false,error:""})
  };
  
  handleChange=(e)=>
  {
    this.setState({[e.target.name]:e.target.value})
  }
  componentDidMount() {
    const url = 'http://127.0.0.1:8080/api/admin'
    axios.get(url).then(response => response.data)
    .then((data) => {
      console.log(data)
      this.setState({ user: data })
     })
  }
  Submit=(e)=>
  {
    e.preventDefault();
   
    document.getElementById("adminForm").reset();
    
    if(this.state.username!==this.state.user[0].username &&this.state.password!==this.state.user[0].password)
    {
      this.setState({isError:true,error:"User Name and password is incorrect"})
    }
    else if(this.state.username===this.state.user[0].username &&this.state.password!==this.state.user[0].password)
    {
      this.setState({isError:true,error:"Incorrect password"})
    }
    else if(this.state.username===this.state.user[0].username &&this.state.password===this.state.user[0].password)
    {
      this.setState({isError:false});
      let formdata = new FormData();
        formdata.append("isLoggedin","1");
        axios({
          method: 'post',
          url: 'http://127.0.0.1:8080/api/admin',
          data: formdata,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(function (response) {
          //handle success
          console.log(response)

      })
      .catch(function (response) {
          //handle error
          console.log(response)
      });
      this.check(true);
      this.props.history.push(`/dashboard`);
    }
  }
  check=()=>
  {
    this.props.isAuthed(true)
  }
  render()
  {
    return(<>
        <h5 style={{textAlign:"center",marginTop:"9rem"}}>Login as admin</h5>
        <Container   style={{marginTop:"1rem",padding:"3rem 3rem 3rem 3rem",textAlign:"center",width:"30%",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.327)"}}>
        <Form onSubmit={this.Submit} id="adminForm"> 
            <Form.Group controlId="formBasicUsername" >
                <Form.Label style={{color:"#55b81f"}}>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter user name" name="username"  onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label style={{color:"#55b81f"}}>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password"  onChange={this.handleChange}/>
            </Form.Group>
            {this.state.isError?<div style={{color:"red"}}>{this.state.error}</div>:null}
            <Button variant="primary" type="submit" style={{backgroundColor:"#55b81f",border:"none",color:"#fff"}} >
                LOGIN
            </Button>
            </Form>
        </Container>
    </>);
  }
}


