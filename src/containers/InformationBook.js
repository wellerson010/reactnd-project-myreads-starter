import React from 'react';

import InformationBookComponent from '../components/InformationBook/InformationBook';

export default class InformationBook extends React.Component {
    render(){
        return (
            <InformationBookComponent 
                book={this.props.book}
            />
        )
    }
}