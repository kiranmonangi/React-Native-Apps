import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import City from './src/screens/City';
import Citydetails from './src/screens/Citydetails';
import Cityweather from './src/screens/Cityweather';

const navigator = createStackNavigator(
  {
    Home: City,
    Citydetailss: Citydetails,
    Cityweatherr: Cityweather,

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
