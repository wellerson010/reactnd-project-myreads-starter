import React from 'react';
import PropTypes from 'prop-types';

import Shelf from '../../containers/Shelf';

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

ListBooks.propTypes = {
    booksShelf: PropTypes.object.isRequired,
    changeBookFromShelf: PropTypes.func.isRequired
}

export default ListBooks;