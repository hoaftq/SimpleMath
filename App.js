import { StyleSheet, View, useWindowDimensions } from 'react-native';
import Exercise from './exercises/Exercise';
import StyleBase from './common/StyleBase';

export default function App() {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Exercise style={{ width: width > StyleBase.largeWidth ? StyleBase.largeWidth : '100%' }} numberOfExercises={10} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 8,
    marginTop: 50,
    // marginBottom: 8
  },
});
