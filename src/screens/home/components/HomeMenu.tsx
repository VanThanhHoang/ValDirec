import {FlatList, StyleSheet, View} from 'react-native';
import HomeMenuItem from './HomeMenuItem';
import {homeMenuItemList} from '../data';

const HomeMenu = () => {
  return (
    <FlatList
      style={{flex: 1, width: '100%'}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={style.container}
      data={homeMenuItemList}
      renderItem={({item}) => <HomeMenuItem menuItem={item} />}
      keyExtractor={item => item.title}
    />
  );
};
const style = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    gap: 20,
    paddingTop: 20,
    paddingBottom: 180,
  },
});
export default HomeMenu;
