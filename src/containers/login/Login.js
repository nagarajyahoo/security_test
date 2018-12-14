import React from 'react';
import {Row, Col, Jumbotron, Button, Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import './Login.css';
import {connect} from 'react-redux';
import * as AuthActions from '../../store/actions/AuthActions';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    onSubmit = () => {
        this.props.login(this.state.username, this.state.password);
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

                        <Form method={'post'} onSubmit={() => this.onSubmit()}>
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
                                <Button bsStyle="success" type="button" onClick={() => this.onSubmit()}>Login</Button>
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
        error: state.myauth.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (userId, password) => dispatch(AuthActions.login(userId, password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);