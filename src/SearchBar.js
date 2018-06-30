import React, { Component } from 'react';

export class SearchBar extends Component {
    searchEnabled() {
        return this.props.searchText.length > 0
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder={this.props.placeholder}
                    value={this.props.searchText} 
                    onChange={(event) => {this.props.onSearchTextChanged(event.target.value)}}
                    onKeyPress={(event) => {
                        if(event.key==="Enter" && this.searchEnabled()) {
                            this.props.onSearch(this.props.searchText);
                        }
                    }}
                />
                <button 
                    disabled={!this.searchEnabled()} 
                    onClick={() => this.props.onSearch(this.props.searchText)}>Search
                </button>
                <button onClick={this.props.logout}>logout</button>
            </div>
        );
    }
}
