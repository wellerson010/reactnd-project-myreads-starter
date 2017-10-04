import React from 'react';
import BlockUI from 'react-block-ui';
import { Route, Link } from 'react-router-dom';

import styles from './App.css';
import ListBooks from '../../containers/ListBooks';
import Search from '../../containers/Search';

const App = ({ loading, books, changeBookFromShelf }) => (
    <BlockUI className="app" blocking={loading}>
        <div className={styles.containerTitle}>
            <h1 className={styles.title}>MyReads</h1>
        </div>

        <div className={styles.content}>
            <Route exact path="/" render={() => (
                <ListBooks 
                    books={books}
                    changeBookFromShelf={changeBookFromShelf}    
                />
            )} />
            <Route path="/search" render={() => (
                <Search 
                    books={books}
                    changeBookFromShelf={changeBookFromShelf}   
                />
            )} />
        </div>

        <Route exact path="/" render={() => (
            <div className={`${styles.openSearch} ${styles.add}`}>
                <Link to="/search" >
                    Add a book
                </Link>
            </div>
        )} />

        <Route path="/search" render={() => (
            <div className={`${styles.openSearch} ${styles.list}`}>
                <Link to="/" >
                    Go home
                </Link>
            </div>
        )} />
    </BlockUI>
);

export default App;