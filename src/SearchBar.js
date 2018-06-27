import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: ""
        };
    }

    onTextChanged(event) {
        this.setState({
            searchText: event.target.value
        })
    }

    onSearchButtonClicked() {
        const searchTerm = this.state.searchText;

        axios.get("https:api.github.com/search/users?q="+searchTerm).then(this.updateUserData.bind(this));
    }

    updateUserData(result) {
        const items = result.data.items;

        const newUserData = items.map(item => {
            return {
                name: item.login,
                points: item.score,
                image: item.avatar_url
            }
        });

        this.props.setUsers(newUserData);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Search GitHub..." value={this.state.searchText} onChange={this.onTextChanged.bind(this)}/>
                <button onClick={this.onSearchButtonClicked.bind(this)}>Search</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setUsers: (users) => {
            dispatch(
                {
                    type: "SET_USERS",
                    payload: users
                }
            )
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchBar);