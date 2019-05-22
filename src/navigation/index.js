import {createStackNavigator, createAppContainer} from 'react-navigation'
import CarListScreen from '../screens/CarListScreen';

const RootStack = createStackNavigator({
    CarList: {
        screen: CarListScreen,
        navigationOptions: {
            header: null
        }
    }
}, {initialRouteName: 'CarList'});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;