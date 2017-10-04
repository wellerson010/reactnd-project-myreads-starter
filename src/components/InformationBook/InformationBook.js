import React from 'react';

import styles from './InformationBook.css';

const InformationBook = ({ book }) => (
    <div className={styles.container}>
        <div className={styles.mainContent}>
            <img
                className={styles.image}
                src={book.imageLinks.thumbnail}
                alt='Cover book'
            />
            <div className={styles.cotainerMasterInfoTitleInline}>
                {
                    book.subtitle && <div className={styles.containerInfoTitleInline}>
                        <span className={styles.infoTitleInline}>Subtitle</span>
                        <span>{book.subtitle}</span>
                    </div>
                }
                <div className={styles.containerInfoTitleInline}>
                    <span className={styles.infoTitleInline}>Average Rating</span>
                    <span>{(book.averageRating) ? book.averageRating : '-'}</span>
                </div>
                {
                    book.publisher && <div className={styles.containerInfoTitleInline}>
                        <span className={styles.infoTitleInline}>Publisher</span>
                        <span>{book.publisher}</span>
                    </div>
                }
                {
                    book.publishedDate && <div className={styles.containerInfoTitleInline}>
                        <span className={styles.infoTitleInline}>Published Date</span>
                        <span>{book.publishedDate}</span>
                    </div>
                }
                {
                    book.pageCount && <div className={styles.containerInfoTitleInline}>
                        <span className={styles.infoTitleInline}>Pages</span>
                        <span>{book.pageCount}</span>
                    </div>
                }

                <div className={styles.containerInfoTitleInline}>
                    <span className={styles.infoTitleInline}>Authors</span>
                    {
                        book.authors && book.authors.map(author => (
                            <span key={author} className={styles.author}>{author}</span>
                        ))
                    }
                </div>
                {
                    book.categories && <div className={styles.containerInfoTitleInline}>
                        <span className={styles.infoTitleInline}>Categories</span>
                        {
                            book.categories && book.categories.map(category => (
                                <span key={category} className={styles.listItem}>{category}</span>
                            ))
                        }
                    </div>
                }

            </div>
        </div>

        {
            book.description && <div className={styles.description}>
                <p>{book.description}</p>
            </div>
        }

        <div className={styles.containerLinks}>
            {
                book.previewLink && <a href={book.previewLink} target="_blank">Preview</a>
            }
            {
                book.infoLink && <a href={book.infoLink} target="_blank">Info</a>
            }
        </div>

    </div>
);

export default InformationBook;