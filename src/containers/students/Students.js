import React from 'react';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Row, Table} from "react-bootstrap";
import './Students.css';
import * as StudentActions from '../../store/actions/StudentActions';
import {connect} from "react-redux";

class Students extends React.Component {
    state = {
        studentDetails: {}
    };

    inputChangeHandler = (event, field) => {
        const curDetails = JSON.parse(JSON.stringify(this.state.studentDetails));
        curDetails[field] = event.target.value;

        this.setState({
            studentDetails: curDetails
        });
    };

    addStudent = () => {
        this.props.addStudent({
            name: this.state.studentDetails.studentName,
            email: this.state.studentDetails.studentEmail,
            password: this.state.studentDetails.studentPassword
        })
    };

    deleteStudent = (id) => {
        this.props.deleteStudent(id);
    };

    render() {
        return (
            <div>
                <Row>
                    <Col sm={8}>
                        {this.props.error ? <p className="alert alert-danger">{this.props.error} </p> : null}
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <Form method={'post'} onSubmit={() => this.addStudent()}>
                            <FormGroup>
                                <ControlLabel>Student Details</ControlLabel>
                                <FormControl type='text'
                                             name='studentName'
                                             placeholder='Student Name'
                                             onChange={(event) => this.inputChangeHandler(event, 'studentName')}/>
                                <FormControl type='email'
                                             name='studentEmail'
                                             placeholder='Student Email'
                                             onChange={(event) => this.inputChangeHandler(event, 'studentEmail')}/>
                                <FormControl type='password'
                                             name='studentPassword'
                                             placeholder='Student Password'
                                             onChange={(event) => this.inputChangeHandler(event, 'studentPassword')}/>
                                <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
                            </FormGroup>
                            <FormGroup>
                                <Button bsStyle="success" type="button" onClick={() => this.addStudent()}>Add
                                    Student</Button>
                                <Button bsStyle="default" type="reset">Reset</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8}>
                        <Table striped={true}>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>one</td>
                                <td>two</td>
                                <td><Button bsStyle="danger" type="button" onClick={() => this.deleteStudent(1)}>Delete</Button></td>
                            </tr>
                            <tr>
                                <td>one</td>
                                <td>two</td>
                                <td><Button bsStyle="danger" type="button" onClick={() => this.deleteStudent(2)}>Delete</Button></td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.students.students,
        error: state.students.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addStudent: (student) => dispatch(StudentActions.addStudents(student)),
        deleteStudent: (studentId) => dispatch(StudentActions.deleteStudents(studentId)),
        getStudents: () => dispatch(StudentActions.listStudents())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);