import React from 'react';
import Login from "../login/Login";

class PrivateContainer extends React.Component {
    render() {
        const isLoggedIn = false;
        const content = isLoggedIn ? this.props.component : <Login/>
        return (content);
    }
}

export default PrivateContainer;