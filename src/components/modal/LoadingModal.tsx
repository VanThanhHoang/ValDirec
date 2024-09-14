import {appAnimations} from '@/asset';
import {RootState} from '@/redux/app.store';
import LottieView from 'lottie-react-native';
import {Modal, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
const LoadingModal = () => {
  const isLoading = useSelector((state: RootState) => state.app.isLoading);
  return (
    <Modal statusBarTranslucent transparent visible={isLoading}>
      <View style={styles.container}>
        <LottieView
          source={appAnimations.loading}
          style={{width: 200, height: 200}}
          autoPlay
          loop
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
export default LoadingModal;
