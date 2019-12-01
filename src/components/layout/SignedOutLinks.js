import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

const SignedOutLinks = () => (
    <>
        <Nav.Link as={NavLink} to="/signup">SIGN UP</Nav.Link>
        <Nav.Link as={NavLink} to="/signin">LOGIN</Nav.Link>
    </>
)

export default SignedOutLinks;