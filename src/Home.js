import React, {Component} from 'react';
import {UserList} from './UserList';
import {SearchBar} from './SearchBar'
import axios from 'axios';
import {connect} from 'react-redux'
 
class Home extends Component {

    queryUsers(searchTerm, page) {
        console.log("queryUsers");

        let githubUserQuery = "https://api.github.com/search/users";
        githubUserQuery += ("?q=" + searchTerm);
        githubUserQuery += ("&page=" + page);
        
        axios.get(githubUserQuery, {auth: this.props.loginCredentials})
            .then((result) => {
                this.props.setSearchText(searchTerm);
                this.props.setPage(page);
                this.handleQueryResponse(result);
            })
            .catch((error) => {
                this.handleQueryError(error);
            });
    }

    handleQueryResponse(result) {
        console.log("handleQueryResponse");

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

    searchTextChanged(searchText) {
        this.props.setSearchText(searchText);
    }

    search(searchText) {
        console.log("search", searchText);

        if(searchText.length > 0) {
            this.queryUsers(searchText, 1);
        }
    }

    nextPage() {
        console.log("nextPage");

        if((this.props.searchText.length > 0) && (this.props.page < this.props.searchResult.pageCount)) {
            this.queryUsers(this.props.searchText, this.props.page + 1);
        }
    }

    prevPage() {
        console.log("prevPage");

        if((this.props.searchText.length > 0) && (this.props.page > 1)) {
            this.queryUsers(this.props.searchText, this.props.page - 1);
        }
    }

    logout () {
        console.log("logout");

        this.props.logout();
    }

    render() {
        const backgroundAreaStyle = {
            backgroundColor: "lightblue",
            height: this.props.height,
            width: this.props.width,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        };
    
        const contentAreaStyle = {
            backgroundColor: "lightgreen",
            height: backgroundAreaStyle.height * 0.8,
            width: backgroundAreaStyle.width * 0.8
        };
    
        const headerStyle = {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "red",
            height: contentAreaStyle.height * 0.1
        };

        const footerStyle = {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "orange",
            height: contentAreaStyle.height * 0.1
        };
    
        const tableAreaStyle = {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "blue",
            height: contentAreaStyle.height * 0.8
        };

        return (
            <div style={backgroundAreaStyle}>
                <div style={contentAreaStyle}>
                    <div style={headerStyle}>
                        <SearchBar 
                            logout={this.logout.bind(this)}
                            searchText={this.props.searchText} 
                            onSearch={this.search.bind(this)}
                            onSearchTextChanged={(searchText) => {this.props.setSearchText(searchText)}}>
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
                        <button onClick={this.prevPage.bind(this)}>prev</button>
                        <button onClick={this.nextPage.bind(this)}>next</button>
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