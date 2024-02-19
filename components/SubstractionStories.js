import { View } from "react-native";
import { SubstractionStory1 } from "./SubstractionStory1";
import { useState } from "react";

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

function SubstractionStories({ style }) {
    const [story, setStory] = useState(getRandomStory());

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

    function nextExeciseHandler() {
        setStory(getRandomStory());
    }

    return (
        <View style={style}>
            <SubstractionStory1 {...story} onNextExecise={nextExeciseHandler} />
        </View>
    );
}

export default SubstractionStories;