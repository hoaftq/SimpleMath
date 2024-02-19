import { Image, StyleSheet, View } from "react-native";
import StyleBase from "../common/StyleBase";

function Result({ execiseResults, current }) {
    return (
        <View style={styles.container}>
            {execiseResults.map((r, i) => {
                let resultImage;
                switch (r) {
                    case 1:
                        resultImage = require('../assets/images/yellow_star.png');
                        break;
                    case 0:
                        resultImage = require('../assets/images/failed.png')
                        break;
                    default:
                        resultImage = require('../assets/images/empty_star.png');
                }

                const style = i === current ? [styles.star, styles.current] : [styles.star];
                return <Image style={style} source={resultImage} />;
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    star: {
        width: 40,
        height: 40,
        marginRight: 10
    },
    current: {
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 4
    }
})

export default Result;

