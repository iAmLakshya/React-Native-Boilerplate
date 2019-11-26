import React from 'react';
import {View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {ProximaNova} from './proxima-nova';
import Styles, {Theme, WP, HP} from 'styles';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';


export const Button = props => {
    return(
        <TouchableOpacity
            onPress={props.onPress}
            disabled={props.busy||props.disabled}
            style={{opacity:props.busy||props.disabled?0.5:1}}>
            <LinearGradient
                colors={[Theme.highlight.primary, Theme.highlight.secondary]}
                start={{x:0, y:0}}
                end={{x:1, y:0}}
                style={[Styles.buttonBody, props.buttonStyle]}>
                {
                    props.busy
                    ?<ActivityIndicator size={'small'} color={Theme.text.light}/>
                    :<ProximaNova style={[Styles.buttonText, props.textStyle]}>{props.children}</ProximaNova>
                }
            </LinearGradient>
        </TouchableOpacity>
    );
}

Button.propTypes ={
    children: PropTypes.string,
    textStyle: PropTypes.object,
    buttonStyle: PropTypes.object,
    onPress: PropTypes.func,
    busy: PropTypes.bool,
    disabled: PropTypes.bool,
}

Button.defaultProps ={
    children:'Button',
    textStyle: {},
    busy:false,
    disabled:false,
    buttonStyle: {},
    onPress: ()=>{},

}