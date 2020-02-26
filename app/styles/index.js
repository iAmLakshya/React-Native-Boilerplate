import { Platform } from 'react-native';
import { moderateScale, verticalScale, scale, ScaledSheet } from 'react-native-size-matters';
import * as daylight from 'styles/themes/daylight';
import * as midnight from 'styles/themes/midnight';

import { widthPercentageToDP as WP, heightPercentageToDP as HP } from 'react-native-responsive-screen';
const themes = { daylight, midnight };
const is_dark = true
const default_theme = is_dark ? 'midnight' : 'daylight';

export const Theme = themes[default_theme];
export { scale, moderateScale, verticalScale, WP, HP }

export const Colors = {
    green: '#4caf50',
    white: '#fafafa',
    blue: '#2196f3',
    red: '#e53935',
    purple: '#9c27b0',
    orange: '#ffa500',
    darkBlue: '#283593',
    pink: '#e91e63',
    brown: '#795548'
}

export default ScaledSheet.create({
    // Misc
    verticallyCenter: {
        justifyContent: 'center'
    },
    horizontallyCenter: {
        alignItems: 'center'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    topRight: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    topLeft: {
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    bottomRight: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },
    bottomLeft: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    bottomCenter: {
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    // Container
    androidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 26 : 0
    },

    // Text
    text: {
        color: Theme.text.primary,
        fontSize: moderateScale(17)
    },

    // Button
    buttonBody: {
        paddingHorizontal: WP(10),
        paddingVertical: HP(1.5),
        minWidth: '80%',
        alignItems: 'center',
        borderRadius: WP(50),
    },
    buttonText: {
        textTransform: 'uppercase',
        letterSpacing: WP(1),
        color: Theme.text.light,
        fontSize: moderateScale(17)
    },

    // Input
    textInput: {
        fontFamily: 'ProximaNova-Light',
        color: Theme.text.primary,
        fontSize: moderateScale(17)
    },
    inputContainer: {
        backgroundColor: Theme.base.secondary,
        paddingHorizontal: WP(8),
        justifyContent: 'center',
        height: scale(50),
        maxHeight: 55,
        minWidth: '90%',
        borderRadius: WP(2),
        marginVertical: scale(10)
    },

    // Modal
    bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },

    // Login
    loginSubHeading: {
        fontSize: WP(6),
        textAlign: 'center',
        color: Theme.highlight.secondary,
    },
    loginHeading: {
        fontSize: WP(10), textTransform: 'capitalize'
    },

    // Dashboard
    dashTopBtn: {
        backgroundColor: Theme.base.secondary,
        padding: scale(10),
        marginVertical: scale(12),
        marginHorizontal: scale(2),
        borderRadius: scale(5),
    },

    dashTitle: {
        marginTop: scale(15),
        marginLeft: scale(15),
        fontSize: scale(35),
    },
    menuSectionTitle: {
        marginTop: scale(15),
        marginLeft: scale(5),
        fontSize: scale(25),
    },

    dashSectionIcon: {
        padding: scale(5),
        borderRadius: scale(5)
    },
    menuIcon: {
        padding: scale(5),
        borderRadius: scale(5),
        textAlign: 'center'
    },

    dashAppointmentCardContainer: {
        width: scale(175),
        backgroundColor: Theme.base.secondary,
        padding: scale(2.5),
        marginRight: scale(10),
        borderRadius: scale(8)
    },
    MedicalRecordPreviewCardContainer: {
        width: scale(130),
        backgroundColor: Theme.base.secondary,
        padding: scale(2.5),
        marginRight: scale(10),
        borderRadius: scale(8)
    },
});

