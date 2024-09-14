import {View, StyleSheet} from 'react-native';
import React from 'react';
import {appColor} from '@/theme';
import AppHeader from '@/components/AppHeader';
import HomeMenu from './components/HomeMenu';
import { resourcesKey } from '@/lang/i18n.cofig';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader  title={resourcesKey.homeHeaderTitle} />
      <HomeMenu />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: appColor.background,
  },
});
export default HomeScreen;
