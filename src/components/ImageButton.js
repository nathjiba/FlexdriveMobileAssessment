import React from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const ImageButton = props => (
    <TouchableOpacity style={[styles.mainContainer, props.style]}>
        <Image style={styles.buttonImageStyle} source={props.image}></Image>
        <Text style={styles.buttonTextStyle}>{props.text}</Text>
    </TouchableOpacity>
);

const styles = EStyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#A1AABC',
        flex: 1,
        marginRight: 5,
        marginRight: 5,
        marginTop: 8,
        marginBottom: 8,
        justifyContent: 'center'
    },
    headerTextStyle: {
        fontSize: 16,
        fontWeight: '600'
    },
    // TODO : I have used hardcoded image style, when I will get proper image like
    // 1x,2x and 3x, no need to give hardcoded size
    locationImageStyle: {
        height: 8,
        width: 8
    },
    buttonTextStyle: {
        fontSize: 13,
        fontWeight: '700',
        marginLeft: 5

    },
    // TODO : I have used hardcoded image style, when I will get proper image like
    // 1x,2x and 3x, no need to give hardcoded size
    buttonImageStyle: {
        height: 22,
        width: 22
    }

});

export default ImageButton;
