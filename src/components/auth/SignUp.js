import React from 'react'
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends React.Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />
    return (
      <Container>
        <Row className="justify-content-center mt-lg-4 mt-2">
          <Col className="mt-lg-4 mt-2" sm={12} md={10} lg={7}>
            <Form className="bg-white p-3 border border-light rounded shadow" onSubmit={this.handleSubmit}>
              <p className="h2 font-weight-bold text-warning mb-3 text-uppercase">Registration</p>
              <Form.Group>
                <Form.Control type="email" id="email" placeholder="Email" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" id="password" placeholder="Password" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" id="lastName" placeholder="Last name" onChange={this.handleChange} />
              </Form.Group>
              <Form.Group>
                <Form.Control type="text" id="firstName" placeholder="First name" onChange={this.handleChange} />
              </Form.Group>
              <Button variant="success" type="submit" className="mt-2 text-uppercase">Sign UP</Button>
              {authError && authError ? <Alert variant={'danger'} className="text-center mt-3">{authError}</Alert> : null} 
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);