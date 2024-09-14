import { LoadingModal } from '@/components';
import {AppNavigator} from '@/navigation';
import { store } from '@/redux';
import {appColor} from '@/theme';
import {StatusBar, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <AppNavigator />
      <LoadingModal/>
    </SafeAreaView>
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.background,
    paddingTop: StatusBar.currentHeight ?? 54,
  },
});
export default App;
