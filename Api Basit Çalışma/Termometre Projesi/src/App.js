import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'reactstrap'
import Temperature from './Temperature'


var sicaklik=0;
export default class App extends Component {

    sicaklikArttir = () => {
    sicaklik=sicaklik+1;
    this.setState({sicaklik});
    // console.log(this.setState.sicaklik);
  }
  sicaklikAzalt = () => {
    sicaklik=sicaklik-1;
    this.setState({sicaklik});
    
  }
  render() {
    return (
      <div >
       <Container>
        <h1>Sıcaklık Birimleri Arası Değişim</h1>
        <h3>Şuan Sıcaklık: {sicaklik} Derece</h3>
        <Row>
          <Col>
          <Button  onClick={()=>this.sicaklikArttir()}>SICAKLIK ARTIR</Button>
          </Col>
        </Row>
      <Temperature sicaklik={sicaklik} />    
      </Container>
      </div>
    )
  }
}




