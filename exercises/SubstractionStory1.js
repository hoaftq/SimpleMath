import { Text, View, StyleSheet } from 'react-native';
import CommonStyle from '../common/StyleBase';
import NumberInput from '../components/NumberInput';
import IllustrationImages from '../components/IllustrationImages';
import { useState } from 'react';
import Actions from '../components/Actions';

export function SubstractionStory1({
    commonName,
    component1: { name: name1, image: image1, isBig: isBig1 },
    component2: { name: name2, image: image2, isBig: isBig2 },
    value1,
    value2,
    onResult,
    onNextExercise
}) {
    const [inputValue, setInputValue] = useState({
        minuend1: '',
        minuend2: '',
        difference1: '',
        difference2: '',
    })

    function submitHandler() {
        const valid = inputValue.minuend1 === value1
            && inputValue.minuend1 === inputValue.minuend2
            && inputValue.difference1 === value2
            && inputValue.difference1 === inputValue.difference2;
        onResult(valid);
    }

    function inputChangeHandler(inputIdentifier, text) {
        setInputValue(prev => ({
            ...prev,
            [inputIdentifier]: text
        }));
    }

    function getDisplayText(value) {
        return value === 1 ? 'There is ' : 'There are ';
    }

    function getDisplayName(name, value) {
        if (typeof name === 'string') {
            return name;
        }

        return value === 1 ? name[0] : name[1];
    }

    const substrahend = value1 + value2;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Complete the substraction story.</Text>
            <IllustrationImages imagesInfo={[
                { name: image1, isBig: isBig1, count: value1 },
                { name: image2, isBig: isBig2, count: value2 }]}
                isMultiLine={true} />
            <Text style={styles.substrahend}>
                There are {substrahend} {commonName}
            </Text>
            <View style={styles.minuend}>
                <Text style={styles.text}>{getDisplayText(value1)}</Text>
                <NumberInput onChange={(number) => inputChangeHandler('minuend1', number)} />
                <Text style={styles.text}> {getDisplayName(name1, value1)}</Text>
            </View>
            <View style={styles.substraction}>
                <Text style={styles.text}>{substrahend} - </Text>
                <NumberInput onChange={(number) => inputChangeHandler('minuend2', number)} />
                <Text style={styles.text}> = </Text>
                <NumberInput onChange={(number) => inputChangeHandler('difference1', number)} />
            </View>
            <View style={styles.difference}>
                <Text style={styles.text}>{getDisplayText(value2)}</Text>
                <NumberInput onChange={(number) => inputChangeHandler('difference2', number)} />
                <Text style={styles.text}> {getDisplayName(name2, value2)}</Text>
            </View>
            <Actions
                style={styles.actions}
                onSubmit={submitHandler}
                onNextExercise={onNextExercise} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    title: {
        fontSize: CommonStyle.fontSize,
        marginBottom: CommonStyle.verticleGap
    },
    substrahend: {
        marginTop: CommonStyle.verticleGap,
        fontSize: CommonStyle.fontSize
    },
    minuend: {
        flexDirection: 'row',
        marginTop: CommonStyle.verticleGap,
        alignItems: 'center'
    },
    substraction: {
        flexDirection: 'row',
        marginTop: CommonStyle.verticleGap,
        alignItems: 'center'
    },
    difference: {
        flexDirection: 'row',
        marginTop: CommonStyle.verticleGap,
        alignItems: 'center'
    },
    text: {
        fontSize: CommonStyle.fontSize
    },
    actions: {
        marginVertical: CommonStyle.verticleGap,
    }
})