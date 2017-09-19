import React from 'react';

import styles from './Search.css';
import Shelf from '../../containers/Shelf';

const Search = ({ searchValue, handleChangeSearchValue, handleKeyInputSearch, books }) => (
    <div>
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search by title or author. Press enter"
                    className={styles.text}
                    value={searchValue}
                    onChange={(event) => {
                        handleChangeSearchValue(event.target.value)
                    }}
                    onKeyUp={(event) => {
                        if (event.key == 'Enter') {
                            handleKeyInputSearch()
                        }
                    }}
                />
            </div>
        </div>
        <div>
        </div>
    </div>
);

export default Search;