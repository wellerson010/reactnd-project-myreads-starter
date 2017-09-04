import React from 'react';

const Book = ({title, authors, imageUrl, status}) => (
    <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ backgroundImage: 'url("' + imageUrl + '")' }}></div>
            <div className="book-shelf-changer">
                <select>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead" selected>Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
    </div>
);

export default Book;