import React, { Component } from 'react';
// Integro Redux a componente
import { connect } from 'react-redux';
import Page from './page';

class Results extends Component {
    render() { 
        const { suggestions } = this.props;
        console.log(suggestions);

        return (
            <Page
                suggestions = {suggestions} 
            />
          );
    }
}

const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions,
    };
};

/* const wrapper = connect(mapStateToProps);
const component = wrapper(Results); */

// Forma usual de conectarse
export default connect(mapStateToProps)(Results);