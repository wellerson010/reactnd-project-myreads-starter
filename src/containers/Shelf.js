import React from 'react';

import ShelfComponent from '../components/Shelf/Shelf';

export default class Shelf extends React.Component {
    render() {
        return (
            <ShelfComponent 
                title={this.props.title}
                books={this.props.books}
            />
        )
    }
}