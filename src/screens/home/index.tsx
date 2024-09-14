import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {appColor} from '@/theme';
import AppHeader from '@/components/AppHeader';
import HomeMenu from './components/HomeMenu';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <AppHeader />
      <HomeMenu/>
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
