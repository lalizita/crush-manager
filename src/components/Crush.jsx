import React, { Component } from 'react'
import {
  Col, Card, Button, CardBody,
  CardTitle
} from 'reactstrap';
import ReactStars from 'react-stars'
import { deleteCrush } from '../service/service'

export default class Crush extends Component {
  deleteCrush = crushId => deleteCrush(crushId)
  render() {
    return (
      <Col md={4}>
        <Card style={{ marginBottom: 10 }} className="text-center">
          <div className="card-crush-image" style={{ backgroundImage: `url(${this.props.foto})` }}></div>
          <CardBody>
            <CardTitle>{this.props.nome}</CardTitle>
            <div className="clearfix">
              <label className="stars-label">Nota</label>
              <ReactStars
                edit={false}
                className="stars-position"
                count={5}
                size={40}
                value={Number(this.props.notas.notaPrincipal)}
                color2={'#ffd700'} />
            </div>
            <div className="clearfix">
              <label className="stars-label">Nota de atitude</label>
              <ReactStars
                edit={false}
                className="stars-position"
                count={5}
                size={40}
                value={Number(this.props.notas.notaDeAtitude)}
                color2={'#ffd700'} />
            </div>
            <div className="clearfix">
              <label className="stars-label">Nota de responsabilidade</label>
              <ReactStars
                edit={false}
                className="stars-position"
                count={5}
                size={40}
                value={Number(this.props.notas.notaDeResponsabilidade)}
                color2={'#ffd700'} />
            </div>
            <div><b>WhatsApp:</b>{this.props.whatsapp}</div>
            <div><b>Características Físicas:</b>{this.props.descricao} </div>
            <div><b>Apelido:</b>{this.props.apelido}</div>
            <div><b>Como conheceu:</b>{this.props.comoConheceu}</div>
            <Button color="danger" onClick={this.deleteCrush.bind(this, this.props.crushId)}>Deletar crush</Button>
          </CardBody>
        </Card>
      </Col>
    )
  }
}
