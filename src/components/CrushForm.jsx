import React, { Component } from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import ReactStars from 'react-stars'
import {newCrush} from '../service/service'

class CrushForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      apelido: '',
      whatsapp: '',
      observacoes: '',
      foto: '',
      nota: 1
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNoteChange = this.handleNoteChange.bind(this)
  }

  handleChange = event => {
    const name = event.target.name
    this.setState({ [name]: event.target.value })
  }

  handleNoteChange = nota => this.setState({ nota })

  handleSubmit = event => {
    event.preventDefault()
    newCrush(this.state)
    // alert(`Crush ${this.state.nome} cadastrado`)
  }

  render() {
    const { nome, apelido, whatsapp, observacoes, foto } = this.state
    return (
      <Container>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <div>
              <h3>Cadastrar crushs</h3>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label>Nome:</Label>
                  <Input value={nome} name="nome" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label>Apelido:</Label>
                  <Input value={apelido} name="apelido" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label>WhatsApp:</Label>
                  <Input value={whatsapp} name="whatsapp" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label>Características físicas:</Label>
                  <Input value={observacoes} name="observacoes" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label>Endereço da foto:</Label>
                  <Input value={foto} name="foto" onChange={this.handleChange} />
                </FormGroup>
                {/*
                Opção com select
                <FormGroup>
                  <Label>Nota:</Label>
                  <Input type="select" name="nota" onChange={this.handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Input>
                </FormGroup> */}
                <FormGroup>
                  <Label>Nota</Label>
                  <ReactStars
                    count={5}
                    onChange={this.handleNoteChange}
                    size={50}
                    half={false}
                    value={this.state.nota}
                    color2={'#ffd700'} />
                </FormGroup>
                <Button type="submit" color="success">Cadastrar crush</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CrushForm