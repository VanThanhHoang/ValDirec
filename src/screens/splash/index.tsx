import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProp, ScreenName} from '@/navigation/types';
import {appColor} from '@/theme';
import {appAnimations, appImage} from '@/asset';
import {appStringConstant} from '@/constant';
import LottieView from 'lottie-react-native';
const SplashScreen = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const navigateToHome = () => {
    navigation.reset({
      index: 0,
      routes: [{name: ScreenName.HomeScreen}],
    });
  };
  useEffect(() => {
    setTimeout(() => {
      navigateToHome();
    }, 1000);
  });
  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} source={appImage.logo} />
      <Text style={styles.logoText}>
        {appStringConstant.appName.toUpperCase()}
      </Text>
      <LottieView
        source={appAnimations.loading}
        style={{width: 200, height: 200}}
        autoPlay
        loop
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColor.background,
    gap: 20,
  },
  logoImage: {
    width: 200,
    height: 200,
  },
  logoText: {
    fontSize: 42,
    color: appColor.textColor,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
});
export default SplashScreen;
