import React from 'react';
import {TouchableOpacity, Image, Text, View, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import sampleCar from '../assets/car_placeholder.png'
import lyfticon from '../assets/lyft_icon.png'
import PriceButton from '../components/PriceButton'

const {width, height} = Dimensions.get('window');

const CarCard = props => {
    return (
        <TouchableOpacity style={[styles.mainContainer]}>
            <View>
                <Image
                    source={{
                    uri: props.image.url
                }}
                    defaultSource={sampleCar}
                    style={styles.carImageStyle}></Image>

                {props.rideshareEligible
                    ? <View style={styles.eligibaleView}>
                            <Image
                                source={lyfticon}
                                style={{
                                height: 26,
                                width: 26,
                                resizeMode: 'contain'
                            }}></Image>
                            <Text style={styles.eligibleTextStyle}>ELIGIBEL</Text>
                        </View>
                    : <View/>}
            </View>
            <View style={{
                flexDirection: 'row'
            }}>

                <View style={styles.textParentStyle}>
                    <Text style={styles.carNameTextStyle} numberOfLines={2} ellipsizeMode={'tail'}>{`${props.year} ${props.make} ${props.model}`}</Text>
                    <Text
                        style={styles.carSubTitleTextStyle}
                        numberOfLines={1}
                        ellipsizeMode={'tail'}>{props.location.name}</Text>
                </View>
                <View style={styles.priceButtonParentStyle}>
                    <PriceButton price={props.price}></PriceButton>
                </View>
            </View>

        </TouchableOpacity>
    );
}

const styles = EStyleSheet.create({
    mainContainer: {
        flex: 1,
        shadowOffset: {
            height: 1
        },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        backgroundColor: 'white',
        elevation: 2
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
    buttonImageStyle: {
        height: 22,
        width: 22
    },
    carNameTextStyle: {
        fontSize: '1 rem',
        fontWeight: '600'
    },
    carSubTitleTextStyle: {
        fontSize: '0.7 rem',
        fontWeight: '600',
        color: '#818A8F'
    },
    textParentStyle: {
        flex: 0.65,
        marginLeft: 16,
        paddingRight: 16,
        justifyContent: 'center'
    },
    priceButtonParentStyle: {
        flex: width <= 320
            ? 0.45
            : 0.35,
        padding: 10
    },
    carImageStyle: {
        aspectRatio: 16 / 9,
        resizeMode: 'cover',
        height: undefined,
        width: undefined
    },
    eligibaleView: {
        backgroundColor: '$appPink',
        position: 'absolute',
        height: 32,
        borderTopRightRadius: 14,
        borderBottomRightRadius: 14,
        marginTop: height * 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 16
    },
    eligibleTextStyle: {
        marginLeft: 6,
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    }

});

export default CarCard;
