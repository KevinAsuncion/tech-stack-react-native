import React, { Component } from 'react';
import { connect } from 'react-redux'

class LibraryList extends Component {

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
}

export default connect(mapStateToProps)(LibraryList);