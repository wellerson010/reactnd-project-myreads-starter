import React from 'react';
import BlockUi from 'react-block-ui';

import styles from './Book.css';

const Book = ({
    title, authors, imageUrl, status, showSelectStatus, onClickContainerSelectStatus,
    onClickSelectStatus, onChangeSelectStatus, onClickInformation, loading }) => (
        <BlockUi blocking={loading}>
            <div className={styles.book}>
                <div className={styles.bookTop}>
                    <div className={styles.cover}
                        style={{ backgroundImage: 'url("' + imageUrl + '")' }}>
                    </div>
                    <div className={styles.information} onClick={onClickInformation}>
                        <span>i</span>
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
                                <option disabled>Move to...</option>
                                <option value="none">None</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                            </select>
                        }
                    </div>
                </div>
                <div className={styles.title}>{title}</div>
                <div className={styles.bookAuthors}>
                    { authors && authors.map(author => (
                        <p key={author}>{author}</p>
                    ))}
                </div>
            </div>
        </BlockUi>
    );

export default Book;