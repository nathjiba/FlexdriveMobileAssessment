import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const PriceButton = props => {
    //add "," seprator for number
    const numberWithCommas = (x) => {
        return x
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return (
        <TouchableOpacity style={[styles.mainContainer, props.style]}>
            <Text style={styles.priceTextStyle}>{`$ ${numberWithCommas(Math.ceil(props.price.value))}`}</Text>
            <Text style={styles.daysTextStyle}>{`For ${props.price.duration} days`}</Text>
        </TouchableOpacity>
    );
}

const styles = EStyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        borderRadius: 5,
        flex: 1,
        padding: 10,
        backgroundColor: '$appBlue',
        justifyContent: 'center'
    },
    priceTextStyle: {
        fontSize: '1.2 rem',
        fontWeight: '800',
        color: 'white'
    },
    daysTextStyle: {
        fontSize: '0.6 rem',
        fontWeight: '700',
        color: '#DFD0E6'
    }
});

export default PriceButton;
