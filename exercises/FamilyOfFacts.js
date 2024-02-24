import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import IllustrationImages from "../components/IllustrationImages";
import Operation from "../components/Operation";
import CommonStyle from "../common/StyleBase";
import { useState } from "react";
import Actions from "../components/Actions";

const titles = {
    '--X': 'Write a substraction equation for the picture.',
    'XX-': 'Complete the equation.',
    '---': 'Complete the family of facts.'
}

function FamilyOfFacts({
    component1: { image: image1, isBig: isBig1 },
    component2: { image: image2, isBig: isBig2 },
    value1,
    value2,
    type,
    onResult,
    onNextExercise }) {
    const { width } = useWindowDimensions();

    const [result, setResult] = useState({
        valid1: false,
        input1: undefined,
        valid2: false,
        input2: undefined,
        valid3: false,
        input3: undefined,
        valid4: false,
        input4: undefined,
    });

    const title = titles[type];
    const visible1 = type[0] === 'X';
    const visible2 = type[1] === 'X';
    const visible3 = type[2] === 'X';

    function resultHandler(operationIndex, valid, strictValid, input) {
        setResult(prev => ({
            ...prev,
            [`valid${operationIndex}`]: valid,
            [`input${operationIndex}`]: input
        }));
    }

    function submitHandler() {
        const valid = result.valid1
            && result.valid2
            && result.valid3
            && result.valid4
            && result.input1.value1 === result.input2.value2
            && result.input3.value2 === result.input4.value3;
        onResult(valid);
    }

    const containerHorizontal = width > CommonStyle.largeWidth ? { flexDirection: 'row' } : undefined;
    const imageContainerHorizontal = width > CommonStyle.largeWidth ? { flex: 1 } : undefined;

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <View style={[styles.container, containerHorizontal]}>
                <View style={imageContainerHorizontal}>
                    <IllustrationImages
                        imagesInfo={[
                            { name: image1, isBig: isBig1, count: value1 },
                            { name: image2, isBig: isBig2, count: value2 }]}
                        isMultiLine={true} />
                </View>
                <View style={styles.operationContainer}>
                    <Operation
                        operation="+"
                        number1={{ value: value1, visible: visible1 }}
                        number2={{ value: value2, visible: visible2 }}
                        visible3={visible3}
                        onResult={resultHandler.bind(this, 1)} />
                    <Operation
                        operation="+"
                        number1={{ value: value2, visible: visible1 }}
                        number2={{ value: value1, visible: visible2 }}
                        visible3={visible3}
                        onResult={resultHandler.bind(this, 2)} />
                    <Operation
                        operation="-"
                        number1={{ value: value1 + value2, visible: visible1 }}
                        number2={{ value: value1, visible: visible2 }}
                        visible3={visible3}
                        onResult={resultHandler.bind(this, 3)} />
                    <Operation
                        operation="-"
                        number1={{ value: value1 + value2, visible: visible1 }}
                        number2={{ value: value2, visible: visible2 }}
                        visible3={visible3}
                        onResult={resultHandler.bind(this, 4)} />
                </View>
            </View>
            <Actions style={styles.actions}
                onSubmit={submitHandler}
                onNextExercise={onNextExercise} />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: CommonStyle.fontSize,
        marginBottom: CommonStyle.verticleGap
    },
    container: {
        gap: 16
    },
    operationContainer: {
        gap: 8,
    },
    actions: {
        marginVertical: CommonStyle.verticleGap,
    }
})

export default FamilyOfFacts;