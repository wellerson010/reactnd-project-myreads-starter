import React from 'react';

import Book from '../../containers/Book';
import styles from './Shelf.css';

const Shelf = ({title, books, changeBookFromShelf}) => (
    <div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.containerBook}>
            { 
                books.map(book => (
                    <div 
                        className={styles.book}
                        key={book.id}
                    >
                        <Book
                            book={book}
                            changeBookFromShelf={changeBookFromShelf}
                        />
                    </div>
                ))
            }
        </div>
    </div>
);

export default Shelf;