import React from 'react';
import {Redirect, Route} from "react-router";

export default ({component, rest}) => {
    const isLoggedIn = true;
    return <Route {...rest} render={
        (props) => {
            return isLoggedIn ?
                <component {...props}/> :
                <Redirect to={'/login'}/>
        }
    }/>
};
