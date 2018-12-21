import {Nav, NavItem} from "react-bootstrap";
import React from "react";

class Navbar extends React.Component {
    render() {
        return(
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Students Management</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/home">
                        Home
                    </NavItem>
                    <NavItem eventKey={2} href="/students">
                        Students
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Navbar;