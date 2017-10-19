import React from 'react';
import PropTypes from 'prop-types';

import ShelfComponent from '../components/Shelf/Shelf';

class Shelf extends React.Component {
    render() {
        return (
            <ShelfComponent 
                title={this.props.title}
                books={this.props.books}
                changeBookFromShelf={this.props.changeBookFromShelf}
            />
        )
    }
}

Shelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    changeBookFromShelf: PropTypes.func.isRequired
}

export default Shelf;