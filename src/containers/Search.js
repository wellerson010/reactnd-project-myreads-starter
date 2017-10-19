import React from 'react';
import PropTypes from 'prop-types';

import * as BooksAPI from '../utils/BooksAPI';
import SearchComponent from '../components/Search/Search';

class Search extends React.Component {
    state = {
        searchValue: '',
        results: [],
        loading: false
    }

    handleChangeSearchValue = async (value) => {
        this.setState({
            searchValue: value,
            loading: true
        });

        let books = [];

        if (value) {
            const data = await BooksAPI.search(value, 20);
            books = (Array.isArray(data)) ? data : data.items;
        }

        books = this.refreshShelfResults(books);

        this.setState({
            results: books,
            loading: false
        });
    }

    refreshShelfResults = (books) => {
        return books.map(book => {
            book.shelf = 'none';

            let b = this.props.books.find(_ => _.id === book.id);

            return (b)?b:book;
        });
    }

    changeBookFromShelf = async (book, shelf) => {
        await this.props.changeBookFromShelf(book, shelf);
    }


    render() {
        return (
            <SearchComponent
                changeBookFromShelf={this.changeBookFromShelf}
                handleChangeSearchValue={this.handleChangeSearchValue}
                searchValue={this.state.searchValue}
                results={this.state.results}
                loading={this.state.loading}
            />
        )
    }
}

Search.propTypes = {
    books: PropTypes.array.isRequired,
    changeBookFromShelf: PropTypes.func.isRequired
}

export default Search;