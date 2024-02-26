import { StyleSheet, Text, View } from "react-native";
import IllustrationImages from "../components/IllustrationImages";
import PlaceHolderStatement from "../components/PlaceHolderStatement";
import CommonStyle from "../common/StyleBase";
import { useState } from "react";
import Actions from "../components/Actions";

function SubstractionStory2({
    template: { name, image, isBig },
    substrahend,
    minuend,
    onResult,
    onNextExercise }) {
    const difference = substrahend - minuend;
    const [inputValue, setInputValue] = useState({
        substrahend: '',
        minuend: '',
        difference: ''
    });

    function changeHandler(identifier, _, text) {
        setInputValue(prev => ({
            ...prev,
            [identifier]: text
        }));
    }

    function submitHandler() {
        const valid = inputValue.substrahend == substrahend
            && inputValue.minuend == minuend
            && inputValue.difference == difference;
        onResult(valid);
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

    return (
        <View>
            <Text style={styles.title}>Complete the substraction story.</Text>
            <PlaceHolderStatement
                statement={`${getDisplayText(substrahend)} [] ${getDisplayName(name, substrahend)}.`}
                onChange={changeHandler.bind(this, 'substrahend')} />
            <IllustrationImages imagesInfo={[
                { name: image, isBig, count: difference },
                { name: image, isBig, count: minuend, isDeleted: true }]} />
            <PlaceHolderStatement
                statement={`${getDisplayText(minuend)} [] less.`}
                onChange={changeHandler.bind(this, 'minuend')} />
            <PlaceHolderStatement
                statement={`${getDisplayText(difference)} [] ${getDisplayName(name, difference)} left.`}
                onChange={changeHandler.bind(this, 'difference')} />
            <Actions
                style={styles.actions}
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
    text: {
        fontSize: CommonStyle.fontSize
    },
    actions: {
        marginVertical: CommonStyle.verticleGap,
    }
})

export default SubstractionStory2;