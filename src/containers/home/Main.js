import React from 'react';
import './Main.css';
import {Navbar, Nav, NavItem} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Route, Router, Switch} from "react-router";
import Students from "../students/Students";
import Login from "../login/Login";
import PrivateRoute from "../../components/PrivateRoute";

class Main extends React.Component {
    isLoggedIn = () => {
        return localStorage.getItem("token") ? true : false;
    };

    render() {
        const authContent = this.isLoggedIn() ? <Link to={'/signout'}>Sign out</Link> : <Link to={'/login'}>Sign in</Link>;
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
                            <NavItem eventKey={1}>
                                <Link to={'/home'}>Home</Link>
                            </NavItem>
                            <NavItem eventKey={2}>
                                <Link to={'/students'}>Students</Link>
                            </NavItem>
                        </Nav>
                        <Nav pullRight={true}>
                            <NavItem>
                                {authContent}
                            </NavItem>
                        </Nav>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <PrivateRoute path={'/students'} component={Students}/>
                        <PrivateRoute path={'/home'} component={Students}/>
                        <Route path={'/login'} component={Login}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Main;