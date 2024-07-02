import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


type FormProps = {
    userName: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    buttonText: string;
    onButtonPress: () => void;
    onChangeText: (key: string, value: string) => void;
}

const RegisterForm: React.FC<FormProps> = (props) => {
const {
       userName,
       password,
       confirmPassword,
       firstName,
       lastName,
       buttonText,
       onButtonPress, 
       onChangeText
    } = props ;

    return (
        <View style={styles.container}>
        <View style={styles.group}>
            <View style={styles.iconRow}>
                <TouchableOpacity onPress={() => {router.back()}}>
                <AntDesign name="leftcircleo" size={24} color="black" style={styles.icon}/>
                </TouchableOpacity>
                <Text style={styles.createAccount}>Create Account</Text>
            </View>
            <TextInput
                placeholder="User Name"
                textBreakStrategy="simple"
                placeholderTextColor="rgba(183,169,169,1)"
                keyboardAppearance="default"
                style={styles.placeholder}
                value={userName}
                onChangeText={(text) => onChangeText('userName', text)}
            />
            <TextInput
                placeholder="Password"
                textBreakStrategy="simple"
                placeholderTextColor="rgba(183,169,169,1)"
                keyboardAppearance="default"
                secureTextEntry
                style={styles.textInput}
                value={password}
                onChangeText={(text) => onChangeText('password', text)}
            />
            <TextInput
                placeholder="retype password"
                textBreakStrategy="simple"
                placeholderTextColor="rgba(183,169,169,1)"
                keyboardAppearance="default"
                secureTextEntry
                style={styles.textInput2}
                value={confirmPassword}
                onChangeText={(text) => onChangeText('confirmPassword', text)}
            />
            <TextInput
                placeholder="First Name"
                textBreakStrategy="simple"
                placeholderTextColor="rgba(183,169,169,1)"
                keyboardAppearance="default"
                style={styles.textInput3}
                value={firstName}
                onChangeText={(text) => onChangeText('firstName', text)}
            />
            <TextInput
                placeholder="Last Name"
                textBreakStrategy="simple"
                placeholderTextColor="rgba(183,169,169,1)"
                keyboardAppearance="default"
                style={styles.textInput4}
                value={lastName}
                onChangeText={(text) => onChangeText('lastName', text)}
            />
                <Text style={styles.he}>
                By signing up, i agree to Clot&#39;s terms &amp;{"\n"}condition and
                Privacy&amp; policy
                </Text>
            <TouchableOpacity style={styles.button} onPress={onButtonPress}>
                <Text style={styles.signUp}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    group: {
      width: 334,
      height: 696,
      marginTop: 72,
      marginLeft: 20
    },
    icon: {
      color: "rgba(128,128,128,1)",
      fontSize: 40
    },
    createAccount: {
      fontFamily: "roboto-700",
      color: "#121212",
      fontSize: 27,
      marginLeft: 22,
      marginTop: 6
    },
    iconRow: {
      height: 44,
      flexDirection: "row",
      marginRight: 84
    },
    placeholder: {
      fontFamily: "roboto-regular",
      color: "rgba(237,233,233,1)",
      height: 48,
      width: 301,
      backgroundColor: "rgba(249,239,239,0.58)",
      borderRadius: 16,
      textAlign: "justify",
      opacity: 0.9,
      marginTop: 76,
      marginLeft: 20
    },
    textInput: {
      fontFamily: "roboto-regular",
      color: "rgba(237,233,233,1)",
      height: 48,
      width: 301,
      backgroundColor: "rgba(249,239,239,0.58)",
      borderRadius: 19,
      textAlign: "justify",
      opacity: 0.9,
      marginTop: 37,
      marginLeft: 20
    },
    textInput2: {
      fontFamily: "roboto-regular",
      color: "rgba(237,233,233,1)",
      height: 48,
      width: 301,
      backgroundColor: "rgba(249,239,239,0.58)",
      borderRadius: 16,
      textAlign: "justify",
      opacity: 0.9,
      marginTop: 41,
      marginLeft: 20
    },
    textInput3: {
      fontFamily: "roboto-regular",
      color: "rgba(237,233,233,1)",
      height: 48,
      width: 301,
      backgroundColor: "rgba(249,239,239,0.58)",
      textAlign: "justify",
      opacity: 0.9,
      marginTop: 56,
      marginLeft: 17
    },
    textInput4: {
      fontFamily: "roboto-regular",
      color: "rgba(237,233,233,1)",
      height: 48,
      width: 301,
      backgroundColor: "rgba(249,239,239,0.58)",
      textAlign: "justify",
      opacity: 0.9,
      marginTop: 31,
      marginLeft: 20
    },
    
    he: {
        fontFamily: "roboto-700",
        color: "rgba(148,135,135,1)",
        fontSize: 16,
        marginTop: 37,
        marginLeft: 60
      },

    button: {
      width: '100%',
      height: 50,
      backgroundColor: "rgba(76,128,219,1)",
      borderRadius: 31,
      marginTop: 59,
      marginLeft: 20,
    },
    signUp: {
      fontFamily: "roboto-700",
      color: "rgba(255,255,255,1)",
      fontSize: 21,
      marginTop: 13,
      alignSelf: 'center'
    }
  });

export default RegisterForm;