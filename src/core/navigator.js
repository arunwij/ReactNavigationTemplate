import { createStackNavigator } from 'react-navigation-stack';

// Screens
import HomeScreen from '../screens/HomeScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default AppNavigator;
