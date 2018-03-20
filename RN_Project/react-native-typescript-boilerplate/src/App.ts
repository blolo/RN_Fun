import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import { configureStore } from 'src/Store';

import LandingScreen from 'src/Landing/LandingScreen';
import MakeMyMealScreen from 'src/MakeMyMeal/MakeMyMealScreen';

const store = configureStore();

// Register navigation for the app. Update this file to register all navigation
// paths for the app, set the base navigation type (single screen, tabs, or
// other options available), and handle initial navigation.

Navigation.registerComponent('Landing', () => LandingScreen);
Navigation.registerComponent(
  'MakeMyMeal',
  () => MakeMyMealScreen,
  store,
  Provider,
);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Landing',
    title: 'Landing',
  },
});
