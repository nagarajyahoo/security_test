import React from 'react';
import './Main.css';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import {Switch, withRouter, Route} from "react-router";
import Students from "../students/Students";
import * as Actions from '../../store/actions/AuthActions'
import {connect} from "react-redux";

class Main extends React.Component {
    login = () => {
        console.log('logging our');
        this.props.logOut(false);
    };

    render() {
        const authContent = this.props.isLoggedIn ? 'Sign Out' : 'Sign In';
        return (
            <div>
                <div>
                    <Navbar inverse>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#home">Students Management</a>
                            </Navbar.Brand>
                        </Navbar.Header>
                        <Nav>
                            <LinkContainer to={'/home'}>
                                <NavItem eventKey={1}>Home</NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <LinkContainer to={'/students'}>
                                <NavItem eventKey={2}>students</NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav pullRight={true}>
                            <LinkContainer to={'/login'}>
                                <NavItem eventKey={3}
                                         onClick={this.login}>{authContent}</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path={'/students'} component={Students}/>
                        <Route path={'/home'} component={Students}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.myauth.loggedIn
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: (isLogin) => dispatch(Actions.dummyLogin(isLogin))
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));