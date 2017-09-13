import React from 'react';

import * as BooksApi from '../api/BooksAPI';
import BookComponent from '../components/Book/Book';

export default class Book extends React.Component {
    state = {
        showSelectStatus: false,
        book: null
    };

    constructor(props) {
        super();

        this.state.book = props.book;
    }

    handleChangeSelectStatus = async (value) => {
        await BooksApi.update(this.state.book, value);

        this.props.changeBookFromShelf(this.state.book, value);
   /*     this.setState((prevState) => {
            return {
                book: {
                    ...prevState.book,
                    shelf: value
                }
            }
        }); */
    }

    handleClickContainerSelectStatus = () => {
        this.setState((prevState) => {
            return {
                showSelectStatus: !prevState.showSelectStatus
            }
        })
    }

    handleClickSelectStatus = (evt) => {
        evt.stopPropagation();
    }

    render() {
        console.log(this.props.changeBookFromShelf);
        return (
            (this.state.book && <BookComponent
                title={this.state.book.title}
                authors="Autor"
                status={this.state.book.shelf}
                showSelectStatus={this.state.showSelectStatus}
                onClickContainerSelectStatus={this.handleClickContainerSelectStatus}
                onClickSelectStatus={this.handleClickSelectStatus}
                onChangeSelectStatus={this.handleChangeSelectStatus}
                imageUrl={this.state.book.imageLinks.thumbnail}
            />)
        );
    }
}