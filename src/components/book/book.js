import React from 'react';
import styles from './Book.css';

const Book = ({
    title, authors, imageUrl, status, showSelectStatus, onClickContainerSelectStatus,
    onClickSelectStatus, onChangeSelectStatus }) => (
        <div className={styles.book}>
            <div className={styles.bookTop}>
                <div className={styles.cover}
                    style={{ backgroundImage: 'url("' + imageUrl + '")' }}>
                </div>
                <div className={styles.containerSelectStatus} onClick={onClickContainerSelectStatus}>
                    {
                        showSelectStatus &&
                        <select
                            onClick={onClickSelectStatus}
                            onChange={function (evt) {
                                onChangeSelectStatus(evt.target.value);
                            }}
                            className={styles.selectStatus}
                            value={status}
                        >
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    }
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className={styles.bookAuthors}>{authors}</div>
        </div>
    );

export default Book;