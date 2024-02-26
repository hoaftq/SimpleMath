import { StyleSheet, Text, View } from "react-native";
import NumberInput from "./NumberInput";
import CommonStyle from "../common/StyleBase";
import { Fragment } from "react";

function PlaceHolderStatement({ statement, onChange }) {
    const statementParts = statement.split('[]');
    return (
        <View style={styles.container}>
            {statementParts.map((p, i) => <Fragment key={i}>
                {p && <Text style={styles.text}>{p}</Text>}
                {i < statementParts.length - 1 && <NumberInput style={styles.input} onChange={(number) => onChange(i, number)} />}
            </Fragment>)}
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: CommonStyle.fontSize
    },
    input: {
        margin: 8
    }
})

export default PlaceHolderStatement;