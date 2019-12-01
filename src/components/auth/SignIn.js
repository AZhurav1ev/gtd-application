import React from 'react'
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />
    return (
      <Container>
        <Row className="justify-content-center mt-lg-5 mt-3">
          <Col className="mt-lg-5 mt-3" sm={12} md={10} lg={7}>
            <Form className="bg-white p-3 border border-light rounded shadow" onSubmit={this.handleSubmit}>
              <p className="h2 font-weight-bold text-warning mb-3 text-uppercase">Login</p>
              <Form.Group>
                <Form.Control type="email" id="email" placeholder="Email" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" id="password" placeholder="Password" onChange={this.handleChange} />
              </Form.Group>
              <Button variant="success" type="submit" className="text-uppercase mt-2">Sign in</Button>
              {authError && authError ?
                <Alert variant={'danger'} className="text-center mt-3">{authError}</Alert> :
                null
              }
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
