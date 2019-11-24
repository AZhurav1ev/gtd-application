import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import moment from 'moment'
import { connect } from 'react-redux'
import { changePriority, changeCompleting } from '../../store/actions/taskActions'
import { Link } from 'react-router-dom'

const TaskSummary = (props) => {
    const { task } = props;
    return (
        <Container className="shadow">
                <Row className="mt-3 bg-white">
                    <Col className="mt-2 mr-md-1 text-md-right text-center" >
                        <img src={`/img/${task.priority ? "FullStar" : "EmptyStar"}.png`} alt="star" onClick={() => props.changePriority(task)} style={{ height: 30, cursor: "pointer" }} />
                        <Link to={`/edit/${task.id}`}>
                            <img src="/img/Edit_100px.png" alt="edit" className="ml-md-1 ml-3" style={{ height: 30 }} />
                        </Link>
                        <img src="/img/Delete.png" alt="delete" onClick={() => { props.changeCompleting(task) }} className="ml-md-1 ml-3" style={{ height: 30, cursor: "pointer" }} />
                    </Col>
                </Row>
                <Link className="text-decoration-none" to={`/task/${task.id}`} >
                <Row className="bg-white mt-md-n4 pt-sm-2 text-md-left text-center" >
                    <Col className="col-md-10 col-sm">
                        <p className="text-primary font-weight-bold h4">{task.title}</p>
                    </Col>
                </Row>
                <Row className="bg-white">
                    <Col className="text-md-left text-center">
                        <p className="text-muted">Posted: {moment(task.createdAt.toDate()).calendar()}</p>
                    </Col>
                </Row>
            </Link>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePriority: (task) => dispatch(changePriority(task)),
        changeCompleting: (task) => dispatch(changeCompleting(task))
    }
}

export default connect(null, mapDispatchToProps)(TaskSummary);














