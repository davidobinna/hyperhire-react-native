import { Button, StyleSheet, Text, View } from "react-native";


type HeroProps = {
    title: string
    buttonText: string
    onButtonPress: () => void
}



const Hero: React.FC<HeroProps>  = (props) => {
    const {title, buttonText, onButtonPress} = props;

    return <View> 
             <Text style={styles.title}>{title}</Text>
             <Button title={buttonText} onPress={onButtonPress} ></Button>
          </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32, 
        marginBottom: 10,
        textAlign: 'center'
    }
})

export default Hero;