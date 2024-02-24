import { Alert, Platform } from "react-native";

export function alert(title, message, onPress) {
    if (Platform.OS === 'web') {
        window.alert(message);
        onPress();
    } else {
        Alert.alert(title, message, [{ text: 'OK', style: 'cancel', onPress }]);
    }
}