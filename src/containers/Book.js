import React from 'react';
import SkyLight from 'react-skylight';

import * as BooksApi from '../utils/BooksAPI';
import BookComponent from '../components/Book/Book';
import InformationBook from './InformationBook';

export default class Book extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showSelectStatus: false,
            book: props.book,
            loading: false
        }
    }

    handleChangeSelectStatus = async (value) => {
        this.setState({
            loading: true
        });

        await BooksApi.update(this.state.book, value);

        await this.props.changeBookFromShelf(this.state.book, value);

        if (!this.props.avoidLoadingFalse) {
            this.setState({
                loading: false
            });
        }
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

    handleClickInformation = () => {
        this.simpleDialog.show();
    }

    render() {
        return (
            (this.state.book && <div>
                <BookComponent
                    title={this.state.book.title}
                    authors={this.state.book.authors}
                    status={this.state.book.shelf}
                    showSelectStatus={this.state.showSelectStatus}
                    onClickContainerSelectStatus={this.handleClickContainerSelectStatus}
                    onClickSelectStatus={this.handleClickSelectStatus}
                    onChangeSelectStatus={this.handleChangeSelectStatus}
                    onClickInformation={this.handleClickInformation}
                    imageUrl={this.state.book.imageLinks.thumbnail}
                    loading={this.state.loading}
                />
                <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title={this.state.book.title}>
                    <InformationBook book={this.state.book} />
                </SkyLight>
            </div>)
        );
    }
}