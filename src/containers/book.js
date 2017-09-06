import React from 'react';

import BookComponent from '../components/Book/Book';

export default class Book extends React.Component {
    state = {
        showSelectStatus: false,
        status: 'none'
    };

    constructor(props) {
        super();
        
        if (props.state) {
            this.state.status = this.props.status;
        } 
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
            <BookComponent
                title="Primeiro teste"
                authors="Autor"
                status={this.state.status}
                showSelectStatus={this.state.showSelectStatus}
                onClickContainerSelectStatus={this.handleClickContainerSelectStatus}
                onClickSelectStatus={this.handleClickSelectStatus}
                onChangeSelectStatus={this.handleChangeSelectStatus}
                imageUrl="http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api"
            />
        );
    }
}