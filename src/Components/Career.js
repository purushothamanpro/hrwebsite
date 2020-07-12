import React from "react";
import axios from 'axios';
import { Container,Form,Button,Row,Col} from "react-bootstrap";
import ".././App.css";


export class Career extends React.Component
{
  constructor()
  {
    super();
    this.state=({Data:[],isOpenform:false,formtitle:null,
    firstname:"",
    middlename:"",
    lastname:"",
    qual:"",
    course:"",
    yof:"",
    adr1:"",
    adr2:"",
    state:"",
    zcode:"",
    country:"",
    dob:"",
    email:"",
    phone:"",
    intern:"",
    exp:""
    })
  }
  componentDidMount() {
    const url = 'http://127.0.0.1:8080/api/job'
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ Data: data,isFetched:true })
     })
  }
  handleChange=(e)=>
  {
    this.setState({[e.target.name]:e.target.value})
  }
  handleClick=(v)=>{
    this.setState({isOpenform:true,formtitle:v})
  }
  submitData=(e)=>{
    e.preventDefault();
    let formdata = new FormData();
        formdata.append("application",(
          this.state.formtitle+", "+this.state.firstname+", "+this.state.middlename+", "+this.state.lastname+", "+this.state.qual+", "+this.state.course+", "+this.state.yof+", "+this.state.adr1+", "+this.state.adr2+", "+this.state.zcode+", "+this.state.state+", "+this.state.country+", "+this.state.dob+", "+this.state.email+", "+this.state.phone+", "+this.state.intern+", "+this.state.exp));
        axios({
          method: 'post',
          url: 'http://127.0.0.1:8080/api/job',
          data: formdata,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then((response)=>{
          //handle success
          console.log(response)
          this.setState({isOpenform:false})
      })
      .catch(function (response) {
          //handle error
          console.log(response)
      });
  }
  render()
  {
    let Mediares=[],uires=[],databaseres=[],wordpressres=[];
    Mediares=this.state.Data.map(val=>{
      if(val.category.toLowerCase()==="media")
      {
        return(
          <Container key={val.id}>
            <h6 style={{textAlign:"center",fontWeight:"900"}}>{val.title}</h6>
            <div style={{textAlign:"center",color:"#55b81f",fontWeight:"300"}}>{val.description}</div> 
            <div style={{textAlign:"center"}}><Button variant="warning" onClick={()=>this.handleClick(val.title)}>Apply</Button></div>
          </Container>
        )
      }
    })
    uires=this.state.Data.map(val=>{
      if(val.category.toLowerCase()==="ui/ux")
      {
        return(
          <Container key={val.id}>
            <h6 style={{textAlign:"center",fontWeight:"900"}}>{val.title}</h6>
            <div style={{textAlign:"center",color:"#55b81f",fontWeight:"300"}}>{val.description}</div> 
            <div style={{textAlign:"center"}}><Button variant="warning" onClick={()=>this.handleClick(val.title)}>Apply</Button></div>
          </Container>
        )
      }
    })
    databaseres=this.state.Data.map(val=>{
      if(val.category.toLowerCase()==="database admin")
      {
        return(
          <Container key={val.id}>
            <h6 style={{textAlign:"center",fontWeight:"900"}}>{val.title}</h6>
            <div style={{textAlign:"center",color:"#55b81f",fontWeight:"300"}}>{val.description}</div> 
            <div style={{textAlign:"center"}}><Button variant="warning" onClick={()=>this.handleClick(val.title)}>Apply</Button></div>
          </Container>
        )
      }
    })
    wordpressres=this.state.Data.map(val=>{
      if(val.category.toLowerCase()==="wordpress developer")
      {
        return(
          <Container key={val.id}>
            <h6 style={{textAlign:"center",fontWeight:"900"}}>{val.title}</h6>
            <div style={{textAlign:"center",color:"#55b81f",fontWeight:"300"}}>{val.description}</div> 
            <div style={{textAlign:"center"}}><Button variant="warning" onClick={()=>this.handleClick(val.title)}>Apply</Button></div>
          </Container>
        )
      }
    })
    
    return(
      this.state.isOpenform?(<>
        <h5 style={{textAlign:"center",marginTop:"9rem"}}>Apply for {this.state.formtitle}</h5>
        <h2 style={{textAlign:"center",marginTop:"0.5rem",color:"#55b81f"}}>Job Application</h2>
        <div style={{textAlign:"center"}}>Please complete the form below to apply for a position with us.</div>
        <Container   style={{marginTop:"1rem",padding:"3rem 3rem 3rem 3rem",textAlign:"center",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.327)"}}>
        <Form onSubmit={this.submitData} id="jobform">
            <Row style={{alignItems:"center"}}>
                <Col>
                <Form.Group controlId="formBasic" >
                    <Form.Label style={{color:"#55b81f"}}>First Name *</Form.Label>
                    <Form.Control type="text"  name="firstname"  onChange={this.handleChange}/>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label style={{color:"#55b81f"}}>Middle Name </Form.Label>
                    <Form.Control type="text"  name="middlename"  onChange={this.handleChange}/>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBasicDescription">
                    <Form.Label style={{color:"#55b81f"}}>Last Name</Form.Label>
                    <Form.Control type="text"name="lastname"  onChange={this.handleChange}/>
                </Form.Group>
                </Col>
            </Row>
            <Row style={{alignItems:"center"}}>
              
                <Col>
                <Form.Group controlId="formBasic" >
                    <Form.Label style={{color:"#55b81f"}}>Qulatification*</Form.Label>
                    <Form.Control type="text"  name="qual"  onChange={this.handleChange}/>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label style={{color:"#55b81f"}}>Course*</Form.Label>
                    <Form.Control type="text"  name="course"  onChange={this.handleChange}/>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label style={{color:"#55b81f"}}>Year of Passing*</Form.Label>
                    <Form.Control type="text"  name="yof"  onChange={this.handleChange}/>
                </Form.Group>
                </Col>
            </Row>
            <Row style={{alignItems:"center"}}>
                <Col>
                <Form.Group controlId="formBasic" >
                    <Form.Label style={{color:"#55b81f"}}>Address line 1*</Form.Label>
                    <Form.Control type="text"  name="adr1"  onChange={this.handleChange}/>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label style={{color:"#55b81f"}}>Address line 2</Form.Label>
                    <Form.Control type="text"  name="adr2"  onChange={this.handleChange}/>
                </Form.Group>
                </Col>
            </Row>
            <Row style={{alignItems:"center"}}>
                <Col>
                <Form.Group controlId="formBasic" >
                    <Form.Label style={{color:"#55b81f"}}>Zip code*</Form.Label>
                    <Form.Control type="text"  name="zcode"  onChange={this.handleChange}/>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label style={{color:"#55b81f"}}>State*</Form.Label>
                    <Form.Control type="text"  name="state"  onChange={this.handleChange}/>
                </Form.Group>
                </Col>
                <Col>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label style={{color:"#55b81f"}}>Country*</Form.Label>
                    <Form.Control type="text"  name="country"  onChange={this.handleChange}/>
                </Form.Group>
                </Col>
            </Row>
            <Row style={{alignItems:"center"}}>
              
              <Col>
              <Form.Group controlId="formBasic" >
                  <Form.Label style={{color:"#55b81f"}}>Date of Birth*</Form.Label>
                  <Form.Control type="text"  name="dob"  onChange={this.handleChange}/>
              </Form.Group>
              </Col>
              <Col>
              <Form.Group controlId="formBasicTitle">
                  <Form.Label style={{color:"#55b81f"}}>Phone number*</Form.Label>
                  <Form.Control type="text"  name="phone"  onChange={this.handleChange}/>
              </Form.Group>
              </Col>
              <Col>
              <Form.Group controlId="formBasicTitle">
                  <Form.Label style={{color:"#55b81f"}}>Email*</Form.Label>
                  <Form.Control type="email"  name="email"  onChange={this.handleChange}/>
              </Form.Group>
              </Col>
          </Row>
          <Row style={{alignItems:"center"}}>
              
              <Col>
              <Form.Group controlId="formBasic" >
                  <Form.Label style={{color:"#55b81f"}}>InternShip</Form.Label>
                  <Form.Control type="text"  name="intern"  onChange={this.handleChange}/>
              </Form.Group>
              </Col>
              <Col>
              <Form.Group controlId="formBasicTitle">
                  <Form.Label style={{color:"#55b81f"}}>Experience</Form.Label>
                  <Form.Control type="text"  name="exp"  onChange={this.handleChange}/>
              </Form.Group>
              </Col>
    
          </Row>
        <Button variant="primary" type="submit" style={{backgroundColor:"#55b81f",height:"40px",border:"none",color:"#fff",marginTop:"1rem"}} >
                    Apply
                </Button>
        </Form>
        
        </Container>
        </>
      ):(
      <>
        <Container  fluid style={{marginTop:"3rem",padding:"0.5rem",textAlign:"center"}}>
            <h1 style={{color:"#000",fontWeight:"900"}}> Get your  <span style={{color:"#55b81f"}}>Job</span></h1>
        </Container>
            
        <Container  fluid style={{backgroundColor:"#fff",marginTop:"6rem",marginLeft:"3rem",padding:"0.5rem",textAlign:"left"}}>
            <h1 style={{color:"#000",fontWeight:"900"}}>Media</h1>
        </Container>
        <Container style={{marginTop:"3rem",display:"flex"}}>
          {
            Mediares
          }
            
        </Container>
        <Container  fluid style={{backgroundColor:"#fff",marginTop:"6rem",marginLeft:"3rem",padding:"0.5rem",textAlign:"left"}}>
            <h1 style={{color:"#000",fontWeight:"900"}}>UI/UX</h1>
        </Container>
        <Container style={{marginTop:"3rem",display:"flex"}}>
        {
            uires
          }
           
            
        </Container>
        <Container  fluid style={{backgroundColor:"#fff",marginTop:"6rem",marginLeft:"3rem",padding:"0.5rem",textAlign:"left"}}>
            <h1 style={{color:"#000",fontWeight:"900"}}>DataBase Admin</h1>
        </Container>
        <Container style={{marginTop:"3rem",display:"flex"}}>
        {
            databaseres
          }
            
            
        </Container>
        <Container  fluid style={{backgroundColor:"#fff",marginTop:"6rem",marginLeft:"3rem",padding:"0.5rem",textAlign:"left"}}>
            <h1 style={{color:"#000",fontWeight:"900"}}>WordPress Developer</h1>
        </Container>
        <Container style={{marginTop:"3rem",display:"flex"}}>
        {
            wordpressres
          }
            
        </Container>  
    </>));
  }
}