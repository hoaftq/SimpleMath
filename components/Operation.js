import { View, StyleSheet, Text } from "react-native";
import CommonStyle from "../common/StyleBase";
import { useState } from "react";
import NumberInput from "./NumberInput";

function Operation({ operation,
    number1: { value: value1, visible: visible1 },
    number2: { value: value2, visible: visible2 },
    visible3,
    onResult }) {
    const value3 = calculateResult(value1, value2);
    const [inputValue, setInputValue] = useState({
        value1: visible1 ? value1 : '',
        value2: visible2 ? value2 : '',
        value3: visible3 ? value3 : ''
    })

    function inputChangeHandler(valueIdentifier, text) {
        const updatedInputValue = { ...inputValue, [valueIdentifier]: text };

        const valid = updatedInputValue.value3 === calculateResult(updatedInputValue.value1, updatedInputValue.value2);
        const strictValid = updatedInputValue.value1 === value1 && updatedInputValue.value2 === value2 && updatedInputValue.value3 === value3;
        onResult(valid, strictValid, updatedInputValue);

        setInputValue(updatedInputValue);
    }

    function calculateResult(v1, v2) {
        switch (operation) {
            case '+':
                return v1 + v2;
            case '-':
                return v1 - v2;
            case '*':
                return v1 * v2;
            case '/':
                return v1 / v2;
            default:
                throw new Error('invalid operation');
        }
    }

    return (
        <View style={styles.operationContainer}>
            {visible1
                ? <Text style={styles.value}>{value1}</Text>
                : <NumberInput onChange={(number) => inputChangeHandler('value1', number)} />}
            <Text style={styles.signText}>{operation}</Text>
            {visible2
                ? <Text style={styles.value}>{value2}</Text>
                : <NumberInput onChange={(number) => inputChangeHandler('value2', number)} />}
            <Text style={styles.signText}>=</Text>
            {visible3
                ? <Text style={styles.value}>{value3}</Text>
                : <NumberInput onChange={(number) => inputChangeHandler('value3', number)} />}
        </View>
    );
}

const styles = StyleSheet.create({
    operationContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    signText: {
        width: 50,
        textAlign: 'center',
        fontSize: CommonStyle.fontSize
    },
    value: {
        width: 45,
        textAlign: 'center',
        fontSize: CommonStyle.fontSize
    }
})

export default Operation;