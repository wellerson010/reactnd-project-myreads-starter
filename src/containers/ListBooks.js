import React from 'react';
import BlockUi from 'react-block-ui';

import * as BooksAPI from '../api/BooksAPI';
import ListBooksComponent from '../components/ListBooks/ListBooks';

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

    
    changeBookFromShelf = (book, shelf) => {
        const books = Array.from(this.state.books);

        books.forEach(data => {
            if (data.id === book.id){
                data.shelf = shelf;
            }
        });

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
            <BlockUi blocking={true}>
                <ListBooksComponent 
                    booksShelf={booksShelf}
                    changeBookFromShelf={this.changeBookFromShelf}
                />
            </BlockUi>
        )
    }
}