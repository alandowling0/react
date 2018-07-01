import React, {Component} from 'react';
import {UserList} from './UserList';
import {SearchBar} from './SearchBar'
import axios from 'axios';
import {connect} from 'react-redux'
 
class Home extends Component {

    queryUsers(searchTerm, page) {
        let githubUserQuery = "https://api.github.com/search/users";
        githubUserQuery += ("?q=" + searchTerm);
        githubUserQuery += ("&page=" + page);
        
        axios.get(githubUserQuery, {auth: this.props.loginCredentials})
            .then((result) => {
                this.props.setSearchText(searchTerm);
                this.props.setPage(page);
                this.handleQueryResult(result);
            })
            .catch((error) => {
                this.handleQueryError(error);
            });
    }

    handleQueryResult(result) {
        const searchResult = {
            users: this.users(result.data.items),
            pageCount: this.pageCount(result.headers.link)
        };

        this.props.setSearchResult(searchResult);
    }

    handleQueryError(error) {
        console.log("handleQueryError", error);
    }

    users(items) {
        return items.map(item => {
            return {
                name: item.login,
                image: item.avatar_url
            }
        });
    }

    pageCount(link) {
        let pageCount = 1

        if(link !== undefined) {
            const sliced = link.slice(0, link.indexOf('rel="last"'));
            const number = sliced.slice(sliced.lastIndexOf("page=") + 5, sliced.lastIndexOf(">"));
            pageCount = parseInt(number, 10);
        }

        return pageCount;
    }

    nextEnabled() {
        return (this.props.searchText.length > 0) && (this.props.page < this.props.searchResult.pageCount);
    }

    prevEnabled() {
        return (this.props.searchText.length > 0) && (this.props.page > 1);
    }

    render() {
        const backgroundAreaStyle = {
            height: this.props.height,
            width: this.props.width,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#718093"
        };
    
        const contentAreaStyle = {
            height: backgroundAreaStyle.height * 0.8,
            width: backgroundAreaStyle.width * 0.8,
            backgroundColor: "#7f8fa6",
            borderRadius: 10
        };
    
        const headerStyle = {
            height: contentAreaStyle.height * 0.1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        };

        const footerStyle = {
            height: contentAreaStyle.height * 0.1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        };
    
        const tableAreaStyle = {
            height: contentAreaStyle.height * 0.8
        };

        return (
            <div style={backgroundAreaStyle}>
                <div style={contentAreaStyle}>
                    <div style={headerStyle}>
                        <SearchBar 
                            logout={() => this.props.logout()}
                            placeholder={"search github users..."}
                            searchText={this.props.searchText} 
                            onSearch={searchText => this.queryUsers(searchText, 1)}
                            onSearchTextChanged={searchText => this.props.setSearchText(searchText)}>
                        </SearchBar>
                    </div>
                    <div style={tableAreaStyle}>
                        <UserList 
                            height={tableAreaStyle.height} 
                            width={contentAreaStyle.width} 
                            users={this.props.searchResult.users} 
                            history={this.props.history}>
                        </UserList>
                    </div>
                    <div style={footerStyle}>
                        <button 
                            onClick={() => this.queryUsers(this.props.searchText, this.props.page - 1)}
                            disabled={!this.prevEnabled()}>prev
                        </button>
                        <button 
                            onClick={() => this.queryUsers(this.props.searchText, this.props.page + 1)}
                            disabled={!this.nextEnabled()}>next
                        </button>
                    </div>
                </div>
            </div>
        );
    }   
}

function mapStateToProps(state) {
    return {
        loginCredentials: state.loginCredentials,
        searchText: state.searchText,
        searchResult: state.searchResult,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSearchText: (searchText) => {
            dispatch(
                {
                    type: "SET_SEARCH_TEXT",
                    payload: searchText
                }
            )
        },
        setSearchResult: (searchResult) => {
            dispatch(
                {
                    type: "SET_SEARCH_RESULT",
                    payload: searchResult
                }
            )
        },
        setPage: (page) => {
            dispatch(
                {
                    type: "SET_PAGE",
                    payload: page
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);