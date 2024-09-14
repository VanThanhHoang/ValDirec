import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React, {useTransition} from 'react';
import {appColor} from '@/theme';
import AppHeader from '@/components/AppHeader';
import {useTranslation, Trans} from 'react-i18next';
const HomeScreen = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <AppHeader />
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
