import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import findSuggestions from '../../redux/actions/findSuggestions';

class IAppBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            text: '',
        };

        /* bind se utiliza para pasar las funciones entre componentes */
        this.onChangeText = this.onChangeText.bind(this);
        this.OnChangeSelection = this.OnChangeSelection.bind(this);
    };

    onChangeText(text){
        this.setState({text});
        this.props.findSuggestions(text);
    }

    OnChangeSelection(text){

    }

    render() { 
        const {text} = this.state;
        const {suggestions} = this.props;

        return (
            <Page
                text={text}
                suggestions={suggestions}
                onChangeText={this.onChangeText}
                OnChangeSelection={this.OnChangeSelection} 
            />
          );
    }
}

const mapStateToProps = (state) => {
    return{
        suggestions: state.suggestions
    };
};

const mapDispatchToProps = {
    findSuggestions
};
 
export default connect(mapStateToProps, mapDispatchToProps)(IAppBar);