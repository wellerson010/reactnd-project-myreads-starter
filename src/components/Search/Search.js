import React from 'react';
import BlockUi from 'react-block-ui';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';

import styles from './Search.css';
import Book from '../../containers/Book';

const Search = ({ searchValue, handleChangeSearchValue, results, loading, changeBookFromShelf }) => (
    <div>
        <div>
            <div>
                <DebounceInput
                    minLength={3}
                    placeholder="Search"
                    debounceTimeout={300}
                    className={styles.input}
                    value={searchValue}
                    onChange={(event) => {
                        handleChangeSearchValue(event.target.value)
                    }}
                />
            </div>
        </div>
        <BlockUi blocking={loading} className={styles.containerBook}>
            {results.length > 0 && results.map(book => (
                <div 
                    className={styles.book}
                    key={book.id}
                >
                    <Book
                        changeBookFromShelf={changeBookFromShelf}
                        book={book}
                    />
                </div>
            ))}
            {
                results.length === 0 && (
                    <span>No books</span>
                )
            }
        </BlockUi>
    </div>
);

Search.propTypes = {
    searchValue: PropTypes.string,
    handleChangeSearchValue: PropTypes.func.isRequired, 
    results: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    changeBookFromShelf: PropTypes.func.isRequired,
}

export default Search;