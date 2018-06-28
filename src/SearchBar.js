import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios';

class SearchBar extends Component {

    getUserData(searchTerm, page) {
        let githubUserQuery = "https://api.github.com/search/users";
        githubUserQuery += ("?q=" + searchTerm);
        githubUserQuery += ("&page=" + page);
        
        axios.get(githubUserQuery, {auth: this.props.loginCredentials})
            .then((result) => {
                this.props.setSearchResultsPage(page);
                this.handleQueryResponse(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleQueryResponse(result) {
        this.updateUserData(result.data.items);

        this.parsePaginationInfo(result.headers.link);
    }

    updateUserData(items) {
        const newUserData = items.map(item => {
            return {
                name: item.login,
                points: item.score,
                image: item.avatar_url
            }
        });

        this.props.setUsers(newUserData);
    }

    parsePaginationInfo(link) {
        let lastPageNumber = 1

        if(link !== undefined) {
            const sliced = link.slice(0, link.indexOf('rel="last"'));
            const number = sliced.slice(sliced.lastIndexOf("page=") + 5, sliced.lastIndexOf(">"));
            lastPageNumber = parseInt(number, 10);
        }

        this.props.setSearchResultsPageCount(lastPageNumber)
    }

    search() {
        if(this.props.searchText.length > 0) {
            this.getUserData(this.props.searchText, 1);
        }
    }

    next() {
        if(this.props.searchResultsPage < this.props.searchResultsPageCount) {
            this.getUserData(this.props.searchText, this.props.searchResultsPage + 1);
        }
    }

    prev() {
        if(this.props.searchResultsPage > 1) {
            this.getUserData(this.props.searchText, this.props.searchResultsPage - 1);
        }
    }

    logout() {
        this.props.logout();
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Search GitHub..." 
                    value={this.props.searchText} 
                    onChange={(event)=>{this.props.setSearchText(event.target.value)}}
                    onKeyPress={(event)=>{
                        if(event.key==="Enter") {
                            this.search();
                        }
                    }}
                />
                <button 
                    onClick={this.search.bind(this)}
                >Search</button>
                <button onClick={this.prev.bind(this)}>prev</button>
                <button onClick={this.next.bind(this)}>next</button>
                <button onClick={this.props.logout}>logout</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchText: state.searchText,
        searchResultsPage: state.searchResultsPage,
        searchResultsPageCount: state.searchResultsPageCount,
        loginCredentials: state.loginCredentials
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
        },
        setSearchText: (searchText) => {
            dispatch(
                {
                    type: "SET_SEARCH_TEXT",
                    payload: searchText
                }
            )
        },
        setSearchResultsPage: (page) => {
            dispatch(
                {
                    type: "SET_SEARCH_RESULTS_PAGE",
                    payload: page
                }
            )
        },
        setSearchResultsPageCount: (pageCount) => {
            dispatch(
                {
                    type: "SET_SEARCH_RESULTS_PAGE_COUNT",
                    payload: pageCount
                }
            )
        },
        logout: () => {
            dispatch(
                {
                    type: "LOGOUT",
                    payload: {}
                }
            )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);