import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import {HomeMenuItemProps} from '../type';
import {appColor} from '@/theme';
import {useTranslation} from 'react-i18next';

const HomeMenuItem = ({menuItem}: {menuItem: HomeMenuItemProps}) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
              {t(menuItem.title)}
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <Image source={menuItem.image} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeMenuItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 138,
    borderWidth: 2,
    borderColor: appColor.borderColor,
    overflow: 'hidden',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    paddingLeft: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  imageContainer: {
    width: 138,
    height: '100%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: appColor.textColor,
  },
});
