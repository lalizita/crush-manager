import React, { Component } from 'react'
import {
  Col, Card, CardImg, CardBody,
  CardTitle, Button
} from 'reactstrap';
import ReactStars from 'react-stars'

export default class Crush extends Component {
  render() {
    return (
      <Col md={4}>
        <Card style={{marginBottom:10}} className="text-center">
          <CardImg top width="100%" src="https://cdn.mpasho.co.ke/wp-content/uploads/2018/07/alisson-becker.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>{this.props.nome}</CardTitle>
           <div className="text-center">
           <ReactStars
              count={5}
              size={24}
              value={this.props.match}
              color2={'#ffd700'} />
           </div>
            <div><b>WhatsApp:</b>{this.props.whatsapp}</div>
            <div><b>Características Físicas:</b>Atleta, musculoso, olhos verdes, </div>
            <div><b>Apelido:</b>{this.props.apelido}</div>
            <Button color='success'>Match</Button>
          </CardBody>
        </Card>
      </Col>
    )
  }
}
