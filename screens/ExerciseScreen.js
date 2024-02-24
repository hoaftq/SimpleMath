import { ScrollView, StyleSheet, useWindowDimensions } from "react-native";
import CommonStyle from "../common/StyleBase";
import Exercise from "../exercises/Exercise";
import { alert } from "../common/alert";
import { View } from "react-native";

function ExerciseScreen({ navigation, route }) {
    const { numberOfExercises } = route.params;
    const { width } = useWindowDimensions();

    function finishHandler() {
        alert('Info',
            "This is the last exercise. Let's start a new one!",
            () => navigation.navigate('EntryScreen'));
    }

    const exerciseStyle = { width: width > CommonStyle.largeWidth ? CommonStyle.largeWidth : '100%' };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.exerciseContainer}>
                <Exercise style={exerciseStyle}
                    numberOfExercises={numberOfExercises}
                    onFinish={finishHandler} />
            </View>
        </ScrollView>)
}

const styles = StyleSheet.create({
    container: {
        padding: CommonStyle.screenPadding
    },
    exerciseContainer: {
        flex: 1,
        alignItems: 'center'
    }
})

export default ExerciseScreen;