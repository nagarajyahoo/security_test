import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Main from "./containers/home/Main";
import Login from "./containers/login/Login";
import {connect} from "react-redux";

class App extends Component {
    render() {
        const content = this.props.loggedIn ? <Main/> : <Login/>;
        return (
            <BrowserRouter>
                <div className="App">
                    {content}
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.myauth.loggedIn
    }
};

export default connect(mapStateToProps)(App);
