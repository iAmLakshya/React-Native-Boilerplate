import React from 'react'
import { View } from 'react-native';
import Styles, { Theme, scale } from 'styles';
import Hr from "react-native-hr-plus";
export const Divider = () => {
    return (
        <View style={[Styles.center, { width: '100%', height: 2, marginVertical: scale(10) }]}>
            <Hr
                color={Theme.text.primary + '50'}
                width={.5}
                style={{ width: '80%' }}
            ><></></Hr>
        </View>
    );
}