import React from 'react';
import {appIcons} from '@/asset';
import {appColor} from '@/theme';
import appSizing from '@/theme/sizing';
import {useTranslation} from 'react-i18next';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type AppHeaderProps = {
  hasBackButton?: boolean;
  title: string;
};

const AppHeader = ({hasBackButton, title}: AppHeaderProps) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {hasBackButton ? (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backButton}>
          <Image style={styles.imageButton} source={appIcons.backIcon} />
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}
      <Text style={styles.title}>{t(title)}</Text>
      <View style={styles.placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: appSizing.headerHeight,
    width: '100%',
    paddingHorizontal: 25,
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 35,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: appSizing.h1,
    color: appColor.textColor,
  },
  imageButton: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  placeholder: {
    width: 35,
  },
});

export default AppHeader;
