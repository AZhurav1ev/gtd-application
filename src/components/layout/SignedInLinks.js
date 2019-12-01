import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <>
            <Nav.Link as={NavLink} to="/create" className="text-uppercase">create</Nav.Link>
            <Nav.Link onClick={props.signOut} className="text-uppercase">logout</Nav.Link>
            <Nav.Link as={NavLink} to="/" className="circle-link mx-auto my-0 ml-md-2">{props.profile.initials}</Nav.Link>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);

