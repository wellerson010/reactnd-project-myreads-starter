import React from 'react';
import PropTypes from 'prop-types';

import ListBooksComponent from '../components/ListBooks/ListBooks';

class ListBooks extends React.Component {
    render() {
        const booksShelf = {
            currentlyReading: [],
            read: [],
            wantToRead: []
        }

        this.props.books.forEach((book) => {
            booksShelf[book.shelf].push(book);
        });

        return (
            <ListBooksComponent
                booksShelf={booksShelf}
                changeBookFromShelf={this.props.changeBookFromShelf}
            />
        )
    }
}

ListBooks.propType = {
    books: PropTypes.array.isRequired,
    changeBookFromShelf: PropTypes.func.isRequired
}

export default ListBooks;