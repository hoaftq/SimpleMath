import { StyleSheet, View } from "react-native";
import { useState } from "react";
import Result from "../components/Result";
import { alert } from "../common/alert";
import FamilyOfFacts from "../exercises/FamilyOfFacts";
import { SubstractionStory1 } from "../exercises/SubstractionStory1";
import CommonStyle from "../common/StyleBase";
import SubstractionStory2 from "./SubstractionStory2";

const templates = [
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

function Exercise({ style, numberOfExercises, onFinish }) {
    const [story, setStory] = useState(getRandomStory());
    const [exerciseResults, setExerciseResults] = useState(Array(numberOfExercises).fill(-1));
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
    const [exerciseType, setExerciseType] = useState(0);

    function getRandomStory() {
        const randomIndex = Math.floor(Math.random() * templates.length);
        const value1 = Math.floor(Math.random() * (numberOfExercises - 1)) + 1;
        const value2 = Math.floor(Math.random() * (numberOfExercises - value1)) + 1;
        return {
            ...templates[randomIndex],
            value1,
            value2
        };
    }

    function resultHandler(valid) {
        if (valid) {
            setExerciseResults(prev => prev.map((_, i) => i === currentExerciseIndex ? 1 : prev[i]));
            alert('Result', "Congratulation! You've got a star.");
        } else {
            setExerciseResults(prev => prev.map((_, i) => i === currentExerciseIndex ? 0 : prev[i]));
            alert('Result', 'Wrong! Please try again.');
        }
    }

    function nextExerciseHandler() {
        if (currentExerciseIndex === numberOfExercises - 1) {
            onFinish();
            return;
        }

        setCurrentExerciseIndex(prev => prev + 1);
        setStory(getRandomStory());
        setExerciseType(Math.floor(Math.random() * 5));
    }

    return (
        <View style={[styles.container, style]}>
            <View style={styles.resultContainer}>
                <Result exerciseResults={exerciseResults} current={currentExerciseIndex} />
            </View>
            {exerciseType === 0 && <SubstractionStory1 {...story}
                key={currentExerciseIndex}
                onResult={resultHandler}
                onNextExercise={nextExerciseHandler} />}

            {exerciseType === 1 && <FamilyOfFacts {...story}
                key={currentExerciseIndex}
                type="--X"
                onResult={resultHandler}
                onNextExercise={nextExerciseHandler} />}

            {exerciseType === 2 && <FamilyOfFacts {...story}
                key={currentExerciseIndex}
                type="XX-"
                onResult={resultHandler}
                onNextExercise={nextExerciseHandler} />}

            {exerciseType === 3 && <FamilyOfFacts {...story}
                key={currentExerciseIndex}
                type="---"
                onResult={resultHandler}
                onNextExercise={nextExerciseHandler} />}

            {exerciseType === 4 && <SubstractionStory2
                key={currentExerciseIndex}
                template={{
                    name: story.component1.name,
                    image: story.component1.image,
                    isBig: story.component1.isBig
                }}
                substrahend={story.value1 + story.value2}
                minuend={story.value1}
                onResult={resultHandler}
                onNextExercise={nextExerciseHandler} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: CommonStyle.screenPadding
    },
    resultContainer: {
        alignItems: 'flex-end',
        marginBottom: 16,
    }
})

export default Exercise;