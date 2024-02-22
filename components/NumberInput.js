import { TextInput, StyleSheet } from "react-native";
import StyleBase from "../common/StyleBase";
import { useState } from "react";
import { alert } from "../common/alert";

function NumberInput({ onChange }) {
    const [textValue, setTextValue] = useState('');

    function blurHandler(event) {
        if (!isValidNumber(textValue)) {
            alert('Input', 'Please enter a valid number');

            setTextValue('');
            event.target.focus();
            return;
        }

        onChange(parseInt(textValue));
    }

    function changeTextHandler(text) {
        setTextValue(text);
    }

    function isValidNumber(number) {
        return number === '' || /^\d{1,2}$/.test(number);
    }

    return (
        <TextInput
            style={styles.numberInput}
            maxLength={2}
            value={textValue}
            keyboardType="number-pad"
            selectTextOnFocus={true}
            onChangeText={changeTextHandler}
            onBlur={blurHandler} />
    )
}

const styles = StyleSheet.create({
    numberInput: {
        width: 45,
        borderColor: StyleBase.primaryColor,
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: 'lightyellow',
        fontSize: StyleBase.fontSize,
        textAlign: 'center',
        padding: 8
    },
})

export default NumberInput;