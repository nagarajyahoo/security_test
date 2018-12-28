import React from 'react';
import {Button, Col, ControlLabel, Form, FormControl, FormGroup, Jumbotron, Row} from 'react-bootstrap';
import './Login.css';
import {connect} from 'react-redux';
import * as AuthActions from '../../store/actions/AuthActions';
import {withRouter} from "react-router";

class Login extends React.Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit = () => {
        this.props.dummyLogin(true);
        console.log(this.props.history);
        this.props.history.push('/students')
    };

    inputChangeHandler = (event, type) => {
        this.setState({
            [type]: event.target.value
        });
    };

    render() {
        return (
            <Row>
                <Jumbotron>
                    <h2>Welcome to the Garage</h2>
                </Jumbotron>
                <Row>
                    <Col sm={4} smOffset={4}>

                        {this.props.error ? <p className="alert alert-danger">{this.props.error} </p> : null}

                        <Form method={'post'}>
                            <FormGroup>
                                <ControlLabel>Login</ControlLabel>
                                <FormControl type='text'
                                             name='username'
                                             placeholder='Username'
                                             onChange={(event) => this.inputChangeHandler(event, 'username')}/>
                                <FormControl type='password'
                                             name='password'
                                             placeholder='Password'
                                             onChange={(event) => this.inputChangeHandler(event, 'password')}/>
                            </FormGroup>
                            <FormGroup>
                                <Button bsStyle="success" type="button" onClick={this.onSubmit}>Login</Button>
                                <Button bsStyle="default" type="reset">Reset</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.myauth.token,
        userId: state.myauth.userId,
        error: state.myauth.error,
        loggedIn: state.myauth.loggedIn
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (userId, password) => dispatch(AuthActions.login(userId, password)),
        dummyLogin: (isLogin) => dispatch(AuthActions.dummyLogin(isLogin)),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));