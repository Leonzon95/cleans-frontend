import React, { Component } from 'react';

class LoggedInHome extends Component {
    
    render() {
        return (
            <div>
                You are Logged in as {this.props.user.username}
            </div>
        )
    }
}

export default LoggedInHome;