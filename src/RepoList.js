import React, { Component } from 'react';
import { RepoListItem } from './RepoListItem';

export class RepoList extends Component {

    render() {
        const listStyle = {
            height: this.props.height,
            width: this.props.width,
            overflow:"hidden",
            overflowY:"scroll",
            margin: "0px",
        };

        return (
            <div style={listStyle}>
                {this.props.repos.map((repo) => {
                    return <RepoListItem
                        height={75} 
                        width={this.props.width} 
                        name={repo.name}  
                        updated={repo.updated} 
                        key={repo.name}>
                    </RepoListItem>
                })}
            </div>
        );
    }   
}
