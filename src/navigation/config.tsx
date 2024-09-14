import { HomeScreen, SplashScreen } from '@/screens';
import {ScreenName, ScreenProps} from './types';
const RootScreen: ScreenProps[] = [
  {
    name: ScreenName.SplashScreen,
    component: SplashScreen,
  },
  {
    name: ScreenName.HomeScreen,
    component: HomeScreen,
  },
 
];
export default RootScreen;
