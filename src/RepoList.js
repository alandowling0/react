import React, { Component } from 'react';
import { RepoListItem } from './RepoListItem';

export class RepoList extends Component {

    render() {
        const listStyle = {
            height: this.props.height,
            width: this.props.width,
            backgroundColor: "red",
            overflow:"hidden",
            overflowY:"scroll",
            margin: "0px",
        };

        return (
            <div style={listStyle}>
                {this.props.repos.map((repo) => {
                    return <RepoListItem
                        height={100} 
                        width={this.props.width} 
                        name={repo}  
                        updated={repo} 
                        key={repo}>
                    </RepoListItem>
                })}
            </div>
        );
    }   
}
