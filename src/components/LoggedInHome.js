import React, { Component } from 'react';

class LoggedInHome {
    render() {
        return (
            <div>
                You are Loggeid in as {this.props.user.username}
            </div>
        )
    }
}

export default LoggedInHome;