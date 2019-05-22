import React from 'react';
import {Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ImageButton from './ImageButton'
import backIcon from '../assets/back_arrow.png'
import paperPlan from '../assets/paper_plane.png'
import filter from '../assets/filter_icon.png'

const {width} = Dimensions.get('window');

const Header = props => {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.sideComponentParent}>
                <Image style={styles.backImageStyle} source={backIcon}></Image>
            </TouchableOpacity>
            <View style={styles.headerTextParent}>
                <Text style={styles.headerTextStyle} numberOfLines={1} ellipsizeMode={'tail'}>{props.count > 0
                        ? props.count + " CARS FOUND"
                        : "NO CARS FOUND"}</Text>
                <View style={styles.subTitleParent}>
                    <Image source={paperPlan} style={styles.locationImageStyle}></Image>
                    <Text style={styles.subTitle}>{props.location}</Text>
                </View>
            </View>
            <View style={styles.sideComponentParent}>
                <ImageButton image={filter} text={'FILTER'}></ImageButton>
            </View>
        </View>
    );
}

const styles = EStyleSheet.create({
    mainContainer: {
        height: 56,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
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
    // TODO : I have used hardcoded image style, when I will get proper image like
    // 1x,2x and 3x, no need to give hardcoded size
    backImageStyle: {
        height: 28,
        width: 28
    },
    // Need to adjust filter button on small sceen size devices like iphonSE and
    // want to make text center so divided space equally
    sideComponentParent: {
        flex: width <= 320
            ? 0.63
            : 0.60,
        height: '100%',
        justifyContent: 'center'
    },
    subTitle: {
        fontSize: 12,
        fontWeight: '500'
    },
    subTitleParent: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3
    },
    headerTextParent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default Header;
