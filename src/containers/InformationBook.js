import React from 'react';
import PropTypes from 'prop-types';

import InformationBookComponent from '../components/InformationBook/InformationBook';

class InformationBook extends React.Component {
    render(){
        return (
            <InformationBookComponent 
                book={this.props.book}
            />
        )
    }
}

InformationBook.propTypes = {
    book: PropTypes.object.isRequired
}

export default InformationBook;