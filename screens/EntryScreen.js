import { Button, StyleSheet, View } from "react-native";
import CommonStyle from "../common/StyleBase";

function EntryScreen({ navigation }) {

    function newExercisesHandler() {
        navigation.navigate("ExerciseScreen", { numberOfExercises: 10 })
    }

    return (
        <View style={styles.container}>
            <Button title="New exercises" onPress={newExercisesHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: CommonStyle.screenPadding,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default EntryScreen;