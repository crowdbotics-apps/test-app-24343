import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile201594Navigator from '../features/UserProfile201594/navigator';
import Tutorial201593Navigator from '../features/Tutorial201593/navigator';
import NotificationList201565Navigator from '../features/NotificationList201565/navigator';
import Settings201564Navigator from '../features/Settings201564/navigator';
import Settings201556Navigator from '../features/Settings201556/navigator';
import UserProfile201554Navigator from '../features/UserProfile201554/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile201594: { screen: UserProfile201594Navigator },
Tutorial201593: { screen: Tutorial201593Navigator },
NotificationList201565: { screen: NotificationList201565Navigator },
Settings201564: { screen: Settings201564Navigator },
Settings201556: { screen: Settings201556Navigator },
UserProfile201554: { screen: UserProfile201554Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
