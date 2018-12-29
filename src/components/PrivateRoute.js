import React from 'react';
import {Redirect, Route} from "react-router";
import {connect} from "react-redux";

const privateRoute = (props) => {
    const isLoggedIn = props.loggedIn;

    if(isLoggedIn) {
        return <Route {...props}/>
    }
    else {
        return <Redirect to={'/login'}/>
    }
};

export default privateRoute;
