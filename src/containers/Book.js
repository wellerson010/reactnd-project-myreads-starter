import React from 'react';

import BookComponent from '../components/Book/Book';

export default class Book extends React.Component {
    state = {
        showSelectStatus: false,
        book: null
    };

    constructor(props) {
        super();

        console.log(props.book);

        this.state.book = props.book;
    }

    handleChangeSelectStatus = (value) => {
        this.setState({
            status: value
        });
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
        return (
            (this.state.book && <BookComponent
                title={this.state.book.title}
                authors="Autor"
                status={this.state.book.status}
                showSelectStatus={this.state.showSelectStatus}
                onClickContainerSelectStatus={this.handleClickContainerSelectStatus}
                onClickSelectStatus={this.handleClickSelectStatus}
                onChangeSelectStatus={this.handleChangeSelectStatus}
                imageUrl={this.state.book.imageLinks.thumbnail}
            />)
        );
    }
}