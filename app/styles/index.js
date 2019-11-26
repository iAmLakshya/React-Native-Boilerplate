import {Platform} from 'react-native';
import { moderateScale, verticalScale, scale, ScaledSheet } from 'react-native-size-matters';
import * as daylight from 'styles/themes/daylight';
import * as midnight from 'styles/themes/midnight';

const themes = {daylight,midnight};
const default_theme = 'daylight';
// const default_theme = 'midnight';

export const Theme = themes[default_theme];

// Todo: Port values
export const WP = p => scale(p);
export const HP = p => verticalScale(p);

export default ScaledSheet.create({
    // Misc
    verticallyCenter:{
        justifyContent:'center'
    },
    horizontallyCenter:{
        alignItems:'center'
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    topRight:{
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    topLeft:{
        justifyContent:'flex-start',
        alignItems:'flex-end'
    },
    bottomRight:{
        justifyContent:'flex-end',
        alignItems:'flex-start'
    },
    bottomLeft:{
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },

    // Container
    androidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 26 : 0
    },

    // Text
    text:{
        color:Theme.text.primary,
        fontSize:moderateScale(17)
    },
    // Button
    buttonBody:{
        paddingHorizontal: WP(10),
        paddingVertical: HP(7),
        minWidth:'60%',
        maxWidth:'80%',
        alignItems:'center',
        borderRadius:WP(50)
    },
    buttonText:{
        textTransform:'uppercase',
        letterSpacing:WP(1), 
        color:Theme.text.light,
        fontSize:moderateScale(17)
    },

    // Input
    textInput:{
        fontFamily:'ProximaNova-Light',
        color:Theme.text.primary,
        fontSize:moderateScale(17)
    },
    inputContainer:{
        backgroundColor:Theme.base.secondary,
        paddingHorizontal: WP(8),
        justifyContent:'center',
        height:HP(6),
        maxHeight:55,
        minWidth:'80%',
        borderRadius:WP(2)
    },

    // Modal
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
});
