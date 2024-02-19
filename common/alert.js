import { Alert, Platform } from "react-native";

export function alert(title, message) {
    if (Platform.OS === 'web') {
        window.alert(message);
    } else {
        Alert.alert(title, message, [{ text: 'OK', style: 'cancel' }]);
    }
}