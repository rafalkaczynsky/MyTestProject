import {MainScreen, OtherScreen} from './containers';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


const BottomTabBar = createMaterialBottomTabNavigator(
    {
        Home: MainScreen,
        Details: OtherScreen,
    },
    {
      labeled: true,
      initialRouteName: 'Home',
      activeColor: '#f0edf6',
      inactiveColor: '#3e2465',
      barStyle: { backgroundColor: '#694fad' },
    }
);

// const SomeStack = createStackNavigator(
//     {
//       Home: MainScreen,
//       Details: OtherScreen,
//     },
//     {
//       initialRouteName: 'Home',
//     }
//   );
  

  const RootStack = createSwitchNavigator(
    { 
      App: {
        screen: createStackNavigator(
          { Main: { screen:  BottomTabBar } },
          { defaultNavigationOptions: () => ({ header: null }) }
        )
      }
    },
    {
      initialRouteName: 'App'
    })

  const AppContainer = createAppContainer(RootStack);

  export default AppContainer;
