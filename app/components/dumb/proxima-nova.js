import React from 'react';
import {Text}  from 'react-native';
import Styles, {Theme} from 'styles';

export const ProximaNova = ({weight, children,style, ...restOfTheProps}) => {
    switch(weight){
        case 'regular':
            var fontFamily = 'ProximaNova-Regular';
            break;

        case 'light':
            var fontFamily = 'ProximaNova-Light';
            break;
        
        case 'black':
            var fontFamily = 'ProximaNova-Black';
            break;

        case 'bold':
            var fontFamily = 'ProximaNova-Bold';
            break;
        
        case 'semibold':
            var fontFamily = 'ProximaNova-Semibold';
            break;
        
        case 'extrabold':
            var fontFamily = 'ProximaNova-Extrabld';
            break;
        
        case 'thin':
            var fontFamily = 'ProximaNova-Thin';
            break;
        
        default:
            var fontFamily = 'ProximaNova-Regular';
            break;
        
    }
    return(
        <Text {...restOfTheProps}  style={[{fontFamily}, Styles.text].concat(style)}>
            {children}
        </Text>
    );
}