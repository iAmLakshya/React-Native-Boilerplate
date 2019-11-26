import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import Styles, {Theme, WP, HP} from 'styles';
import PropTypes from 'prop-types';


export const Kav = props => {
    return(
        <KeyboardAvoidingView 
            behavior={Platform.select({ios:'padding', android:null})}
            keyboardVerticalOffset={Platform.select({ios: 0, android: 500})}
            style={props.style} enabled>
            {props.children}
        </KeyboardAvoidingView>
    );
}

Kav.propTypes ={
    style: PropTypes.any,
}

Kav.defaultProps ={
    style: {},

}