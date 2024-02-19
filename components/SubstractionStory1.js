import { Text, View, StyleSheet, Button } from 'react-native';
import StyleBase from '../common/StyleBase';
import NumberInput from './NumberInput';
import IllustrationImages from './IllustrationImages';
import { useState } from 'react';

export function SubstractionStory1({
    commonName,
    component1: { name: name1, image: image1, isBig: isBig1 },
    component2: { name: name2, image: image2, isBig: isBig2 },
    value1,
    value2,
    onSuccess,
    onFailure,
    onNextExecise
}) {
    const [inputValue, setInputValue] = useState({
        minuend1: '',
        minuend2: '',
        difference1: '',
        difference2: '',
    })

    function submitHandler() {
        if (inputValue.minuend1 === value1
            && inputValue.minuend1 === inputValue.minuend2
            && inputValue.difference1 === value2
            && inputValue.difference1 === inputValue.difference2) {
            onSuccess();
        } else {
            onFailure();
        }
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
            <View style={styles.buttonContainer}>
                <Button title='Submit' onPress={submitHandler} />
                <Button title='Next execise' onPress={onNextExecise} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    substrahend: {
        marginTop: StyleBase.verticleGap,
        fontSize: StyleBase.fontSize
    },
    minuend: {
        flexDirection: 'row',
        marginTop: StyleBase.verticleGap,
        alignItems: 'center'
    },
    substraction: {
        flexDirection: 'row',
        marginTop: StyleBase.verticleGap,
        alignItems: 'center'
    },
    difference: {
        flexDirection: 'row',
        marginTop: StyleBase.verticleGap,
        alignItems: 'center'
    },
    text: {
        fontSize: StyleBase.fontSize
    },
    buttonContainer: {
        flexDirection: 'row-reverse',
        gap: 16,
        marginTop: StyleBase.verticleGap,
    }
})