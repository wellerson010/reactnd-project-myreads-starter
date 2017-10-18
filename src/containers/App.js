import React from 'react';

import AppComponent from '../components/App/App';
import * as BooksAPI from '../utils/BooksAPI';

export default class App extends React.Component {
    state = {
        books: [],
        loading: true
    }

    changeBookFromShelf = async (book, shelf) => {
        return new Promise((resolve, reject) => {
            const books = Array.from(this.state.books);

            const bookIndex = books.findIndex(data => {
                return (data.id === book.id);
            });

            if (bookIndex > -1) {
                if (shelf === 'none') {
                    books.splice(bookIndex, 1);
                }
                else {
                    books[bookIndex].shelf = shelf;
                }
            }
            else {
                book.shelf = shelf;
                books.push(book);
            }

            this.setState({
                books: books
            }, () => {
                resolve(books);
            });
        });
    }

    async componentDidMount() {
        const books = await BooksAPI.getAll();

        this.setState({
            books: books,
            loading: false
        });
    }

    render() {
        return (
            <AppComponent
                loading={this.state.loading}
                books={this.state.books}
                changeBookFromShelf={this.changeBookFromShelf}
            />
        )
    }
}