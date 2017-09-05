import React from 'react';
import styles from './book.css';

const Book = ({ title, authors, imageUrl, status, showSelectStatus }) => (
    <div className={styles.book}>
        <div className={styles.bookTop}>
            <div className={styles.cover}
                style={{ backgroundImage: 'url("' + imageUrl + '")' }}>
            </div>
            <div className={styles.containerSelectStatus}>
                {
                    showSelectStatus && <select className={styles.selectStatus} value={status}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead" selected>Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                }
            </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
    </div>
);

export default Book;