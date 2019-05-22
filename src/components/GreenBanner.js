import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import closeIcon from '../assets/close_icon.png'

const GreenBanner = props => {
    return (
        <View style={[styles.mainContainer, props.style]}>
            <Text style={styles.bannerTextStyle}>{props.text}</Text>
            <TouchableOpacity onPress={props.closeBanner}>
                <Image source={closeIcon}></Image>
            </TouchableOpacity>
        </View>
    );
}

const styles = EStyleSheet.create({
    mainContainer: {
        padding: 10,
        backgroundColor: '$appGreen',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bannerTextStyle: {
        fontSize: 12.5,
        color: 'white',
        marginRight: 5
    }
});

export default GreenBanner;