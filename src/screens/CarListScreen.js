import React, {Component} from 'react';
import {View, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Header from '../components/Header'
import CarCard from '../components/CarCard'
import GreenBanner from '../components/GreenBanner'
import * as actionsCreator from "../redux/cars/actions";

type Props = {};
class CarListScreen extends Component < Props > {
    constructor(props) {
        super(props)
        this.state = {
            showGreenBanner: true
        }
    }
    componentDidMount() {
        this
            .props
            .carAction
            .getCars({nextPage: false, resetPage: true, skip: this.props.carList.length, take: 10})
    }
    _keyExtractor = (item) => item.id;

    _renderItem = ({item}) => {
        const {
            featureImage,
            location,
            rideshareEligible,
            model,
            pricing,
            year,
            make,
            id
        } = item.node
        return (
            <TouchableOpacity style={styles.listParent} key={id}>
                <CarCard
                    image={featureImage}
                    location={location}
                    rideshareEligible={rideshareEligible}
                    model={model}
                    price={pricing[0]}
                    year={year}
                    make={make}/>
            </TouchableOpacity>
        );
    }

    loadMore = () => {
        if (this.props.pageInfo.hasNextPage) {
            this
                .props
                .carAction
                .getCars({nextPage: true, resetPage: false, skip: this.props.carList.length, take: 10})
        }
    }

    closeBanner = () => {
        this.setState({showGreenBanner: false})
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header count={this.props.carList.length} location={"ATLANTA, GA"}></Header>
                {this.state.showGreenBanner
                    ? <GreenBanner
                            closeBanner={this.closeBanner}
                            text={'The price includes insurance, maintenance & Road side.'}/>
                    : <View/>}
                <FlatList
                    data={this.props.carList}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    initialNumToRender={10}
                    maxToRenderPerBatch={10}
                    onEndReachedThreshold={1}
                    onEndReached={() => {
                    this.loadMore();
                }}/>
            </SafeAreaView>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F9'
    },
    listParent: {
        backgroundColor: 'white',
        paddingBottom: 10
    }
});

const mapStateToProps = (state) => ({carList: state.Car.carList, pageInfo: state.Car.pageInfo});

const mapDispatchToProps = dispatch => ({
    dispatch,
    carAction: bindActionCreators(actionsCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CarListScreen);