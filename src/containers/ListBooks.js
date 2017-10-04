import React from 'react';

import ListBooksComponent from '../components/ListBooks/ListBooks';

export default class ListBooks extends React.Component {
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