import { StyleSheet, View } from "react-native";
import { SubstractionStory1 } from "./SubstractionStory1";
import { useState } from "react";
import Result from "./Result";
import { alert } from "../common/alert";

const limitNumber = 10;

const stories = [
    {
        commonName: 'fish',
        component1: { isBig: true, name: 'big fish', image: 'big_gold_fish' },
        component2: { name: 'small fish', image: 'big_gold_fish' },
    },
    {
        commonName: 'fruit',
        component1: { name: ['apple', 'apples'], image: 'apple' },
        component2: { name: ['pear', 'pears'], image: 'pear' },
    },
    {
        commonName: 'balls',
        component1: { name: ['soccer ball', 'soccer balls'], image: 'soccer_ball' },
        component2: { name: ['beach ball', 'beach balls'], image: 'beach_ball' },
    },
    {
        commonName: 'children',
        component1: { name: ['girl', 'girls'], image: 'girl' },
        component2: { name: ['boy', 'boys'], image: 'boy' },
    }
];

function SubstractionStories({ style, numberOfExercises }) {
    const [story, setStory] = useState(getRandomStory());
    const [exerciseResults, setExerciseResults] = useState(Array(numberOfExercises).fill(-1));
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);

    function getRandomStory() {
        const randomIndex = Math.floor(Math.random() * stories.length);
        const value1 = Math.floor(Math.random() * (limitNumber - 1)) + 1;
        const value2 = Math.floor(Math.random() * (limitNumber - value1)) + 1;
        return {
            ...stories[randomIndex],
            value1,
            value2
        };
    }

    function successHandler() {
        setExerciseResults(prev => prev.map((_, i) => i === currentExerciseIndex ? 1 : prev[i]));
        alert('Result', "Congratulation! You've got a star");
    }

    function failureHanlder() {
        setExerciseResults(prev => prev.map((_, i) => i === currentExerciseIndex ? 0 : prev[i]));
        alert('Result', 'Wrong. Please try again!');
    }

    function nextExeciseHandler() {
        if (currentExerciseIndex === numberOfExercises - 1) {
            alert('Info', 'This is the last exercise');
            return;
        }

        setCurrentExerciseIndex(prev => prev + 1);
        setStory(getRandomStory());
    }

    return (
        <View style={style}>
            <View style={styles.resultContainer}>
                <Result execiseResults={exerciseResults} current={currentExerciseIndex} />
            </View>
            <SubstractionStory1 {...story}
                key={currentExerciseIndex}
                onSuccess={successHandler}
                onFailure={failureHanlder}
                onNextExecise={nextExeciseHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    resultContainer: {
        alignItems: 'flex-end',
        marginBottom: 16
    }
})

export default SubstractionStories;