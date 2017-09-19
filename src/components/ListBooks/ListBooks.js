import React from 'react';

import Shelf from '../../containers/Shelf';
import styles from './ListBooks.css';

const ListBooks = ({booksShelf, changeBookFromShelf}) => (
    <div>
        <Shelf
            title="Currently Reading"
            books={booksShelf.currentlyReading}
            changeBookFromShelf={changeBookFromShelf}
        />
        <Shelf
            title="Want to Read"
            books={booksShelf.wantToRead}
            changeBookFromShelf={changeBookFromShelf}
        />
        <Shelf
            title="Read"
            books={booksShelf.read}
            changeBookFromShelf={changeBookFromShelf}
        />
    </div>
)

export default ListBooks;