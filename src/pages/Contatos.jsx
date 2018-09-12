import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import Crush from '../components/Crush'
import CrushForm from '../components/CrushForm'
import {getCrushs} from '../service/service'

export default class Contatos extends Component {
  constructor(props){
    super(props)
    this.state={
      crushList:[]
    }
  }

  componentWillMount = () => {
    getCrushs()
    .then(res => {
      const crushList = res.data
      this.setState({crushList})
    })
  }

  renderCrushs = list => {
    return list.map((c, index)=> <Crush key={index} nome={c.nome} apelido={c.apelido} whatsapp={c.whatsapp} nota={c.nota} foto={c.foto} descricao={c.observacoes}/>)
  }

  render() {
    const {crushList} = this.state
    return (
      <Container>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <CrushForm />
          </Col>
        </Row>
        <hr/>
          <h1 className="text-center">Agenda de crushs</h1>
        <Row>
            {
             crushList.result && crushList.result.length > 0 ? (
                this.renderCrushs(crushList.result)
              ) : null
            }
        </Row>
      </Container>
    )
  }
}
