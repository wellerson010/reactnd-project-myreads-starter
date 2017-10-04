import React from 'react';

import * as BooksAPI from '../utils/BooksAPI';
import SearchComponent from '../components/Search/Search';

export default class Search extends React.Component {
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

        let results = Array.from(this.state.results);
        results = this.refreshShelfResults(results);
        this.setState({
            results: results
        });
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