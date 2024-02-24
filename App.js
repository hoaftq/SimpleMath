import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntryScreen from './screens/EntryScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='EntryScreen' component={EntryScreen} options={{ title: 'Start' }} />
        <Stack.Screen name='ExerciseScreen' component={ExerciseScreen} options={{ title: 'Exercise' }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}