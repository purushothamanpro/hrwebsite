import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import axios from 'axios';
import ".././App.css";
import { Container,Form,Button,Row,Col} from "react-bootstrap";

export class Dashboard extends React.Component
{
    constructor()
  {
    super();
    this.state=({isShow:false,application:[],isapplication:false,isFetched:false,category:null,title:null,description:null,Data:[],isError:false,error:"",isSuccess:false,success:null})
  };
  e
  handleChange=(e)=>
  {
    this.setState({[e.target.name]:e.target.value})
  }
  componentDidMount() {
    const url = 'http://127.0.0.1:8080/api/data'
    axios.get(url).then(response => response.data)
    .then((data) => {
        console.log(data)
      this.setState({ Data: data,isFetched:true })
     })
     const url2 = 'http://127.0.0.1:8080/api/application'
    axios.get(url2).then(response => response.data)
    .then((data) => {
        console.log(data)
      this.setState({ application: data,isapplication:true })
     })
  }
  Submit=(e)=>
  {
    e.preventDefault();
   
    document.getElementById("jobform").reset();
    if(this.state.category===null ||this.state.title===null ||this.state.description===null)
    {
      this.setState({isError:true,error:"Fill all the fields",isSuccess:false})
    }
    else if(this.state.category!==null &&this.state.title!==null &&this.state.description!==null)
    {
      this.setState({isError:false})
      let formdata = new FormData();
        formdata.append("category",this.state.category);
        formdata.append("title",this.state.title);
        formdata.append("description",this.state.description);
        axios({
        method: 'post',
        url: 'http://127.0.0.1:8080/api/data',
        data: formdata,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then( (response) =>{
        //handle success
        console.log(response)
        this.setState({isSuccess:true,success:"Job added succesfully"})
        

    })
    .catch(function (response) {
        //handle error
        console.log(response)
        // this.setState({isError:true,isSuccess:false,error:"Error while inserting data"})
    });
    }
  }
  logout=()=>
  {
    let formdata = new FormData();
    formdata.append("isLoggedin","0");
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8080/api/admin',
      data: formdata,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
  })
  .then( (response)=> {
      //handle success
      console.log(response)
      this.componentDidMount()

  })
  .catch(function (response) {
      //handle error
      console.log(response)
  });
  }
  showApplication=()=>{
      this.setState({isShow:true})
  }
    redirect=()=>
    {
        this.props.history.push(`/admin`)
    }
    render()
    {
        let showapplication=[];
        if(this.state.isShow)
        {
        
        showapplication=this.state.application.map(v=>{
        return(<Container key={v.id}>{v.application}</Container>)
        })
        }
        return(
            this.state.isFetched? this.state.Data[0].isLoggedin==="1"?(
                <>
                     <Navbar bg="dark" variant="dark" expand="lg" style={{position: "sticky",top:0,justifyContent:"space-between"}}>
                        <Navbar.Brand href="#home" style={{fontWeight:"900",color:"#55b81f"}}>Admin</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className="mr-center" style={{marginLeft:"auto"}}>
            <Nav.Link id="Notification" href="javascript:void(0)"  onClick={this.showApplication}>Application <span style={{color:"red"}}>{this.state.isapplication?this.state.application.length:0}</span></Nav.Link>
                            <Nav.Link id="logout" href="javascript:void(0)" onClick={this.logout}>Logout</Nav.Link>
                            </Nav>
                            
                        </Navbar.Collapse>
                        </Navbar>
                        <h5 style={{textAlign:"center",marginTop:"9rem"}}>Fill the job details</h5>
                        <Container   style={{marginTop:"1rem",padding:"3rem 3rem 3rem 3rem",textAlign:"center",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.327)"}}>
                        <Form onSubmit={this.Submit} id="jobform">
                            <Row style={{alignItems:"center"}}>
                                <Col>
                                <Form.Group controlId="formBasicCategory" >
                                    <Form.Label style={{color:"#55b81f"}}>User Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter user category such as Media, UI/UX" name="category"  onChange={this.handleChange}/>
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group controlId="formBasicTitle">
                                    <Form.Label style={{color:"#55b81f"}}>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter the job title" name="title"  onChange={this.handleChange}/>
                                </Form.Group>
                                </Col>
                                <Col>
                                <Form.Group controlId="formBasicDescription">
                                    <Form.Label style={{color:"#55b81f"}}>Description</Form.Label>
                                    <Form.Control type="text" placeholder="Enter the job description" name="description"  onChange={this.handleChange}/>
                                </Form.Group>
                                </Col>
                                {this.state.isError?<div style={{color:"red"}}>{this.state.error}</div>:null}
                               
        
                                <Button variant="primary" type="submit" style={{backgroundColor:"#55b81f",height:"40px",border:"none",color:"#fff",marginTop:"1rem"}} >
                                    Add Job
                                </Button>
                            </Row>
                        </Form>
                        {this.state.isSuccess?<div style={{color:"blue"}}>{this.state.success}</div>:null}
                        </Container>
            {this.state.isShow?<Container>{showapplication}</Container>:null}
                </>
                
            ):(<><div>Please login as admin</div>{this.redirect()}</>):<div>Please wait</div>
        );
    }
}
