import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
// import {Header} from './header';

import LinearGradient from 'react-native-linear-gradient';
import Styles, {Theme} from 'styles'

export const RootWrapper = props => {
    const barStyle = Theme.mode =='light'?'dark-content':'light-content';
    return(
        <LinearGradient colors={[props.headerEnabled?Theme.base.secondary:Theme.base.primary, Theme.base.primary]} style={{flex:1}}>
            <StatusBar
                translucent={true}
                backgroundColor={props.StatusBarColor?props.StatusBarColor:'#ffffff00'}
                barStyle={props.StatusBarStyle?props.StatusBarStyle:barStyle}/>
            <SafeAreaView
                style={[Styles.androidSafeArea].concat(props.style)}>
                <View style={{flex:1, backgroundColor:Theme.base.primary}}>
                    {props.children}
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}
