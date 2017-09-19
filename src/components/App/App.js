import React from 'react';
import { Route, Link } from 'react-router-dom';

import styles from './App.css';
import ListBooks from '../../containers/ListBooks';
import Search from '../../containers/Search';

const App = () => (
    <div className="app">
        <div>
            <h1 className={styles.title}>MyReads</h1>
        </div>

        <div className={styles.content}>
            <Route exact path="/" component={ListBooks} />
            <Route path="/search" component={Search} />
        </div>

        <div className={styles.openSearch}>
            <Link to="/search" >
                Add a book
            </Link>
        </div>
    </div>
);

export default App;