import React from 'react';

import * as BooksAPI from '../api/BooksAPI';
import SearchComponent from '../components/Search/Search';

export default class Search extends React.Component {
    state = {
        searchValue: '',
        books: []
    }

    handleChangeSearchValue = async (value) => {
        this.setState({
            searchValue: value
        });
        
    }

    handleKeyInputSearch = async () => {
        const books = await BooksAPI.search(this.state.searchValue, 20);

        this.setState({
            books: books
        });
    }

    render(){
        return (
            <SearchComponent 
                handleChangeSearchValue={this.handleChangeSearchValue}
                handleKeyInputSearch={this.handleKeyInputSearch}
                searchValue={this.state.searchValue}
                books={this.state.books}
            />
        )
    }
}