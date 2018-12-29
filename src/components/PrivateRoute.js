import React from 'react';
import {Redirect, Route} from "react-router";

export default ({component, props}) => {
    const isLoggedIn = true;

    if(isLoggedIn) {
        return <Route {...props} component={component}/>
    }
    else {
        return <Redirect to={'/login'}/>
    }
};
