import React, { Component } from 'react'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import ReactStars from 'react-stars'
import { newCrush } from '../service/service'

class CrushForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      apelido: '',
      whatsapp: '',
      observacoes: '',
      foto: '',
      nota: String(1),
      comoconheceu: '',
      idade: '',
      observacoes: '',
      notaatitude: String(1),
      local: '',
      altura: ''
    }
  }

  handleChange = event => {
    const name = event.target.name
    this.setState({ [name]: event.target.value })
  }

  handleNoteChange = nota => this.setState({ nota: String(nota) })

  handleAtitudeNoteChange = nota => this.setState({ notaatitude: String(nota) })

  handleResponsibilityNoteChange = nota => this.setState({ notaresponsabilidade: String(nota) })


  handleSubmit = event => {
    event.preventDefault()
    newCrush(this.state)
  }

  render() {
    const { nome, apelido, whatsapp, observacoes, foto, comoconheceu, idade, local, altura } = this.state
    return (
      <Container>
        <Row>
          <Col md={12}>
            <div>
              <h3>Cadastrar crushs</h3>
              <Form onSubmit={this.handleSubmit}>
                <Row>
                  <Col sm={12} md={6}>
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
                      <Label>Local:</Label>
                      <Input value={local} name="local" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <Label>Endereço da foto:</Label>
                      <Input value={foto} name="foto" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <Label>Como conheceu:</Label>
                      <Input value={comoconheceu} name="comoconheceu" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <Label>Idade:</Label>
                      <Input value={idade} name="idade" onChange={this.handleChange} />
                    </FormGroup>
                  </Col>
                  <Col sm={12} md={6}>
                    <FormGroup>
                      <Label>Observações:</Label>
                      <Input value={observacoes} name="observacoes" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                      <Label>Altura:</Label>
                      <Input value={altura} name="altura" onChange={this.handleChange} />
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
                    <FormGroup>
                      <Label>Nota de atitude</Label>
                      <ReactStars
                        count={5}
                        onChange={this.handleAtitudeNoteChange}
                        size={50}
                        half={false}
                        value={this.state.notaatitude}
                        color2={'#ffd700'} />
                    </FormGroup>
                    <FormGroup>
                      <Label>Nota de responsabilidade</Label>
                      <ReactStars
                        count={5}
                        onChange={this.handleResponsibilityNoteChange}
                        size={50}
                        half={false}
                        value={this.state.notaresponsabilidade}
                        color2={'#ffd700'} />
                    </FormGroup>
                    <Button type="submit" color="success">Cadastrar crush</Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CrushForm