import React, { Component } from 'react';

export class SearchBar extends Component {
    render() {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Search GitHub..." 
                    value={this.props.searchText} 
                    onChange={(event) => {this.props.onSearchTextChanged(event.target.value)}}
                    onKeyPress={(event) => {
                        if(event.key==="Enter") {
                            this.props.onSearch(this.props.searchText);
                        }
                    }}
                />
                <button onClick={() => {this.props.onSearch(this.props.searchText)}}>Search</button>
                <button onClick={this.props.logout}>logout</button>
            </div>
        );
    }
}
