import {AppNavigator} from '@/navigation';
import {appColor} from '@/theme';
import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <AppNavigator />
    </SafeAreaView>
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
