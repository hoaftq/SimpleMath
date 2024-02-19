import { StyleSheet, View } from 'react-native';
import SubstractionStories from './components/SubstractionStories';

export default function App() {
  return (
    <View style={styles.container}>
      <SubstractionStories style={{ width: 700 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
