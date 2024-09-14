import { appColor } from '@/theme';
import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/app.store';
import { getAllAgents } from '@/redux/actions';
import AppHeader from '@/components/AppHeader';
import { resourcesKey } from '@/lang/i18n.cofig';
const AgentScreen = () => {
  const useDishPatch = useDispatch<AppDispatch>();
  useEffect(() => {
    useDishPatch(getAllAgents());
  }, []);
  return (
    <View style={styles.container}>
      <AppHeader title={resourcesKey.agents} hasBackButton={true} />
      <Text>Agent Screen</Text>
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
export default AgentScreen;
