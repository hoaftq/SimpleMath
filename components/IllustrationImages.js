import { Image, View, StyleSheet } from "react-native";
import CommonStyle from "../common/StyleBase";
import CrossImage from "./CrossImage";

const builtInImage = {
    soccer_ball: require('../assets/images/soccer_ball.png'),
    beach_ball: require('../assets/images/beach_ball.png'),
    small_gold_fish: require('../assets/images/small_gold_fish.png'),
    big_gold_fish: require('../assets/images/big_gold_fish.png'),
    boy: require('../assets/images/boy.png'),
    girl: require('../assets/images/girl.png'),
    pear: require('../assets/images/pear.png'),
    apple: require('../assets/images/apple.png'),
    yellow_flight_ticket: require('../assets/images/yellow_flight_ticket.png'),
    cyan_flight_ticket: require('../assets/images/cyan_flight_ticket.png'),
}

function IllustrationImages({ isMultiLine, isMixed, imagesInfo }) {

    function getKey(imgInfo, index) {
        return `${imgInfo.name}_${imgInfo.isBig ? 'big' : ''}_${imgInfo.isDeleted ? 'deleted' : ''}_${index}`;
    }

    if (isMultiLine) {
        return <View style={[styles.imageContainer, { flexDirection: 'column' }]}>
            {imagesInfo.map((imgInfo, index) => <View key={`${imgInfo.name}${index}`} style={styles.imageRow}>
                {[...Array(imgInfo.count)].map((_, index) =>
                    <IllustrationImage
                        key={getKey(imgInfo, index)}
                        name={imgInfo.name}
                        isBig={imgInfo.isBig}
                        isDeleted={imgInfo.isDeleted} />)}
            </View>)}
        </View>
    }

    return (
        <View style={styles.imageContainer}>
            {imagesInfo.flatMap(imgInfo => [...Array(imgInfo.count)].map((_, index) =>
                <IllustrationImage
                    key={getKey(imgInfo, index)}
                    name={imgInfo.name}
                    isBig={imgInfo.isBig}
                    isDeleted={imgInfo.isDeleted} />))}
        </View>
    );
}

function IllustrationImage({ name, isBig, isDeleted }) {
    const size = isBig ? 100 : 60;
    const imageStyle = {
        width: size,
        height: size
    };

    return isDeleted
        ? <CrossImage style={imageStyle} source={builtInImage[name]} />
        : <Image style={imageStyle} source={builtInImage[name]} resizeMode="contain" />;
}

const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        borderWidth: 2,
        borderColor: CommonStyle.primaryColor,
        padding: 16,
        borderRadius: 12,
        backgroundColor: 'white'
    },
    imageRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginVertical: 6
    }
});

export default IllustrationImages;