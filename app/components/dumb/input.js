import React from 'react';
import {View, TextInput} from 'react-native';
import {ProximaNova} from '../dumb/proxima-nova';
import Styles, {Theme, WP, SCALE} from 'styles';
import PropTypes from 'prop-types';


export const Input = props => {
    return(
        <>  
            <ProximaNova style={{
                textAlign:'center',
                marginBottom:SCALE(10),
                color:Theme.error,
                fontSize:SCALE(15),
                display: props.error?'flex':'none'
            }}>{props.error_msg}</ProximaNova>
            <View style={[
                Styles.inputContainer,
                props.inputContainerStyle, 
                {
                    opacity:props.disabled?0.5:1,
                },
                props.error?{
                    borderColor:Theme.error,
                    borderWidth:2
                }:{}
                ]}>
                <TextInput
                    editable={!props.disabled}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    placeholder={props.placeholder}
                    placeholderTextColor={Theme.text.placeholder}
                    keyboardType={props.keyboardType}
                    maxLength={props.maxLength}
                    style={[Styles.textInput,
                            props.inputStyle,
                            // props.error?{color:Theme.error}:{}
                        ]}/>
            </View>
        </>
    );
}

Input.propTypes ={
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChangeText: PropTypes.func,
    inputStyle: PropTypes.object,
    inputContainerStyle: PropTypes.object,
    keyboardType: PropTypes.string,
    maxLength: PropTypes.number,
    disabled: PropTypes.bool
}

Input.defaultProps ={
    placeholder:'Placeholder',
    value:'',
    disabled:false,
    keyboardType:'default',
    inputStyle: {},
    inputContainerStyle: {},
    onChangeText: ()=>{}

}