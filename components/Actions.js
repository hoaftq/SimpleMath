import { Button, StyleSheet, View } from "react-native";

function Actions({ style, onSubmit, onNextExercise }) {
    return (
        <View style={[style, styles.container]}>
            <Button title='Submit' onPress={onSubmit} />
            <Button title='Next exercise' onPress={onNextExercise} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row-reverse',
        gap: 16,
    }
});

export default Actions;