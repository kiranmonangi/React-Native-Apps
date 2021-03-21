import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import Astroiddetails from './src/screens/Astroiddetails';
import RandomAstroid from './src/screens/RandomAstroid';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Astroiddetails,
    Random: RandomAstroid,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: '',
    },
  },
);

export default createAppContainer(navigator);
