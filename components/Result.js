import { Image, StyleSheet, View, useWindowDimensions } from "react-native";

function Result({ exerciseResults, current }) {
    const { width, height } = useWindowDimensions();

    const starSize = Math.min(40, Math.min(width, height) / 10 - 10);
    const starStyle = {
        width: starSize,
        height: starSize,
        marginRight: 6
    }

    return (
        <View style={styles.container}>
            {exerciseResults.map((r, i) => {
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

                const style = i === current ? [starStyle, styles.current] : [starStyle];
                return <Image key={i} style={style} source={resultImage} />;
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    current: {
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 4
    }
})

export default Result;
