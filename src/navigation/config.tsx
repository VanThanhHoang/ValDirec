import { AgentScreen, HomeScreen, SplashScreen } from '@/screens';
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
  {
    name: ScreenName.AgentScreen,
    component: AgentScreen, 
  }
];
export default RootScreen;
