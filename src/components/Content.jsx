import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Panels from '../screens/Panels';
import Search from './Search';

const Content = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Search />
        <Panels />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

export default Content;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingTop: 10,
  },
});
