import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <View style={styles.group}>
      <ImageBackground
        source={require('../../assets/images/stock1.png')}
        resizeMode="contain"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <Text style={styles.sooAndCarrots}>Soo {"\n"}and Carrots</Text>
        <View style={styles.group2}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.iconRow}>
              <SimpleLineIcons name="login" style={styles.icon} size={24} color="black" />
              <Text style={styles.signUpForFree}>Sign Up for Free</Text>
                <Ionicons name="chevron-forward-circle-outline" style={styles.icon4} size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.group3}>
          <TouchableOpacity style={styles.button2}>
            <View style={styles.icon2Row}>
            <Fontisto name="email" size={24} style={styles.icon2} color="black" />
              <Text style={styles.continueWithEmail}>
                Continue with Email
              </Text>
              <Ionicons name="chevron-forward-circle-outline" style={styles.icon5} size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
       backgroundColor: "rgba(23,22,22,1)"
    },
    group: {
      width: '100%',
      height: '100%',
      marginTop: 0,
      alignSelf: "center",
    },
    image: {
      width: '100%',
      height: '100%',
    },
    image_imageStyle: {},
    sooAndCarrots: {
      fontFamily: "roboto-700",
      color: "rgba(255,255,255,1)",
      fontSize: 38,
      marginTop: 100,
      marginLeft: 15
    },
 
    
    group2: {
      width: 310,
      height: 69,
      marginTop: 470,
      alignSelf: 'center',
      marginLeft: 0
    },
    button: {
      width: 346,
      height: 58,
      backgroundColor: "rgba(17,98,242,1)",
      borderRadius: 31,
      flexDirection: "row",
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "space-between", // Ensure the children are spaced correctly
      paddingHorizontal: 15,
    },
    icon: {
      color: "rgba(240,222,222,1)",
      fontSize: 25,
      height: 32,
      width: 32,
      marginTop: 0
    },
    signUpForFree: {
      fontFamily: "roboto-regular",
      color: "rgba(255,255,255,1)",
      fontSize: 20,
      marginLeft: 10,
      marginTop: 0
    },
    icon4: {
      color: "rgba(255,255,255,1)",
      fontSize: 41,
      height: 45,
      width: 41,
      position: "absolute",
      right: -30,
      top: '42%',
      transform: [{ translateY: -22.5 }] // Center vertically
    },
    iconRow: {
      height: 44,
      flexDirection: "row",
      flex: 1,
      marginRight: 19,
      marginLeft: 13,
      marginTop: 14
    },
    group3: {
      width: 310,
      height: 69,
      justifyContent: "center",
      marginTop: 1,
      alignSelf: 'center',
    },
    button2: {
      width: 352,
      height: 54,
      backgroundColor: "rgba(6,15,26,1)",
      borderRadius: 31,
      flexDirection: "row",
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "space-between", // Ensure the children are spaced correctly
      paddingHorizontal: 15,
    },
    icon2: {
      color: "rgba(255,255,255,1)",
      fontSize: 20,
      height: 29,
      width: 29,
      marginTop: 3
    },
    continueWithEmail: {
      fontFamily: "roboto-regular",
      color: "rgba(255,255,255,1)",
      fontSize: 20,
      marginLeft: 11,
      marginTop: 0
    },
    icon5: {
      color: "rgba(255,255,255,1)",
      fontSize: 41,
      height: 45,
      width: 41,
      position: "absolute",
      right: -30,
      top: '42%',
      transform: [{ translateY: -22.5 }] // Center vertically
    },
    icon2Row: {
      height: 44,
      flexDirection: "row",
      flex: 1,
      marginRight: 19,
      marginLeft: 13,
      marginTop: 13
    }
  });
  