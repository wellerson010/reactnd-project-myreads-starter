import React from 'react';

import Book from '../../containers/Book';

const Shelf = ({title, books}) => (
    <div>
        <h2>{title}</h2>
        <div>
            { 
                books.map(book => (
                    <Book 
                        key={book.id}
                        book={book}
                    />
                ))
            }
        </div>
    </div>
);

export default Shelf;