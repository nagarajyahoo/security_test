import {Redirect, Route} from "react-router";
import React from 'react';

const privateRoute = (props) => {
    const isLoggedIn = false;
    if (isLoggedIn) {
        return (<Route component={props.component} path={props.path}/>);
    }
    else {
        return (<Redirect to={{pathname: '/login', state: {from: props.location}}}/>);
    }
};

export default privateRoute;
