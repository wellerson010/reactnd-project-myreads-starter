import React from 'react';

import styles from './InformationBook.css';

const InformationBook = ({ book }) => (
    <div className={styles.container}>
        <h3>{book.subtitle}</h3>
        <p>{book.averageRating}</p>
        <img
            src={book.imageLinks.thumbnail}
        />
        {
            book.description && <div>
                <p>Description</p>
                <p>{book.description}</p>
            </div>
        }
        {
            book.authors && <div>
                <p>Authors</p>
                {
                    book.authors.map(author => (
                        <p>{author}</p>
                    ))
                }
            </div>
        }
        {
            book.publisher && <div>
                <p>Publisher</p>
                <p>{book.publisher}</p>
            </div>
        }
        {
            book.publishedDate && <div>
                <p>Published Date</p>
                <p>{book.publishedDate}</p>
            </div>
        }
        {
            book.canonicalVolumeLink && <div>
                <a href={book.canonicalVolumeLink} target="_blank">Open in Google Books</a>
            </div>
        }
        
    </div>
);

export default InformationBook;