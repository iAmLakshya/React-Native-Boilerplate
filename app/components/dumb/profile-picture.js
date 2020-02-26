import React from 'react';
import { Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { scale } from 'styles';


export const ProfilePicture = ({ size, ...props }) => {
    return (
        <Image
            {...props}
            style={{
                width: scale(size),
                height: scale(size),
                borderRadius: size / 2,
                overflow: 'hidden'
            }} />
    );
}