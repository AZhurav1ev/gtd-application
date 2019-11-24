import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const CreateFirstTask = () => (
    <>
        <h4 className="mt-3 text-muted">You don't have any tasks at the moment, so you can create it.</h4>
        <Link to='/create'>
            <Button variant="success" className="text-uppercase mt-1">Create</Button>
        </Link>
    </>
)

export default CreateFirstTask;