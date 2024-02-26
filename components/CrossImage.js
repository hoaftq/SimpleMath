import { Image, ImageBackground, StyleSheet, View } from "react-native";

function CrossImage({ style, source }) {
    return (
        <ImageBackground
            style={[styles.imageBackground, style]}
            source={source}
            resizeMode="contain">
            <Image
                style={styles.image}
                source={require('../assets/images/x_icon.png')}
                resizeMode="contain" />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200
    },
    image: {
        width: 100,
        height: 100
    }
})

export default CrossImage;