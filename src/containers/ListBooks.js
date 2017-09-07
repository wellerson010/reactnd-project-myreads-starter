import React from 'react';

import * as BooksAPI from '../api/BooksAPI';
import Shelf from '../components/Shelf/Shelf';

export default class ListBooks extends React.Component {
    state = {
        books: []
    };

    async componentDidMount(){
        const books = await BooksAPI.getAll();
        
        this.setState({
            books: books
        });
    }

    render(){
        const booksShelf = {
            currentlyReading: [],
            read: [],
            wantToRead: []
        }

        this.state.books.forEach((book) => {
            booksShelf[book.shelf].push(book);
        });

        return (
            <div>
                <Shelf 
                    title="Currently Reading"
                    books={booksShelf.currentlyReading}
                />
                <Shelf 
                    title="Want to Read"
                    books={booksShelf.wantToRead}
                />
                <Shelf 
                    title="Read"
                    books={booksShelf.read}
                />
            </div>
        )
    }
}