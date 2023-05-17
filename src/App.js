import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, CardBody, CardTitle, CardText} from 'reactstrap';
import Axios from 'axios';
import './App.css';
import MyCard from "./MyCard";

function App() {
  const[details,setDetails] = useState({});
  const fetchDetails = async ()=>{
    const {data} = await Axios.get("https://randomuser.me/api/");
    console.log("Response is: ", data);

    const details = data.results[0];
    setDetails(details);
  }
  useEffect(()=>{
    fetchDetails();
  },[])

  return (
    <Container fluid className='p-4 bg-primary App'>
      <Row>
        <Col md={4} className='offset-md-4 mt-4'>
          <Card>
            <MyCard details={details}></MyCard>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
