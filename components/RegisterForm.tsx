import { View } from "react-native-reanimated/lib/typescript/Animated"

type FormProps = {
    userName: string 
    password: string
    confirmPassword: string
    firstName: string
    lastName: string
    buttonText: string
    onButtonPress: () => void
}

const RegisterForm: React.FC<FormProps> = (props) => {
const {
       userName,
       password,
       confirmPassword,
       firstName,
       lastName,
       buttonText,
       onButtonPress
    } = props ;

    return (
        <View>  
            
        </View>
    )
}