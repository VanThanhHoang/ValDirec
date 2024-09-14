import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
export enum ScreenName {
  SplashScreen = 'SplashScreen',
  HomeScreen = 'HomeScreen',
}
export type ScreenProps = {
  name: ScreenName;
  component: () => React.JSX.Element;
  option?: StackNavigationOptions;
};
type RootStackParamList = {
  [ScreenName.SplashScreen]: undefined;
  [ScreenName.HomeScreen]: undefined;
};
export type AppNavigationProp = StackNavigationProp<RootStackParamList>;
