import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ContactScreen from './src/screens/ContactScreen';

const navigator = createStackNavigator(
  {
    Home: SearchScreen,
    Contact: ContactScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'My Contacts',
    },
  },
);
export default createAppContainer(navigator);
