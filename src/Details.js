import React, { Component } from 'react';
import {UserListItem} from './UserListItem';
import { connect } from 'react-redux'

class Details extends Component {
    render() {
        const backgroundStyle = {
            height: this.props.height,
            width: this.props.width,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "lightgreen"
        }
        return (
            <div style={backgroundStyle}>
                <UserListItem 
                    height={this.props.height * 0.5}
                    width={this.props.width * 0.8}
                    name={this.props.selectedUser.name} 
                    points={this.props.selectedUser.points} 
                    image={this.props.selectedUser.image}>
                </UserListItem>
            </div>
        );
    }   
}

function mapStateToProps(state) {
    return {
        selectedUser: state.selectedUser
    }
}

export default connect(mapStateToProps)(Details);