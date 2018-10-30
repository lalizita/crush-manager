import React, { Component } from 'react'
import {
  Col, Card, CardBody, CardTitle
} from 'reactstrap';
import ReactStars from 'react-stars'

export default class Crush extends Component {
  render() {
    return (
      <Col md={4}>
        <Card style={{marginBottom:10}} className="text-center">
          <div className="card-crush-image" style={{backgroundImage:`url(${this.props.foto})`}}></div>
          <CardBody>
            <CardTitle>{this.props.nome}</CardTitle>
           <div className="text-center">
           <ReactStars
              edit={false}
              className="stars-position"
              count={5}
              size={40}
              value={Number(this.props.nota)}
              color2={'#ffd700'} />
           </div>
            <div><b>WhatsApp:</b>{this.props.whatsapp}</div>
            <div><b>Características Físicas:</b>{this.props.descricao} </div>
            <div><b>Apelido:</b>{this.props.apelido}</div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}
