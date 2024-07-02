import RegisterForm from '@/components/RegisterForm';
import { useState } from 'react';
import { View, Text } from 'react-native';

export default function Register() {
const [formData, setFormData] = useState({
    userName: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
})

const [errorMessages, SetErrorMessages] = useState({
  userName: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: ''
})

const handleInputChange = (key: string, value: string) => {
   setFormData({
    ...formData, 
    [key]: value,
   });
};

type ErrorProp = {
  newError: {};
}

const handleSubmit = () => {
    const newErrors: Error = {};
    if (!formData.userName.trim()) {
       newErrors.userName = 'You must Pick a competition name to register'
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'You must Pick a competition name to register'
   }

   if (!formData.confirmPassword.trim()) {
    newErrors.confirmPassword = 'You must Pick a competition name to register'
 }

 if (!formData.firstName.trim()) {
  newErrors.firstName = 'You must Pick a competition name to register'
}
if (!formData.lastName.trim()) {
  newErrors.lastName = 'You must Pick a competition name to register'
}
    
if (!Object.keys(newErrors).length) {
   SetErrorMessages(newErrors);
   return
  }

  console.log(formData)
};

  return (
    <View>
          <RegisterForm
            userName={formData.userName}
            password={formData.password}
            confirmPassword={formData.confirmPassword}
            firstName={formData.firstName}
            lastName={formData.lastName}
            buttonText="Sign Up"
            onButtonPress={handleSubmit}
            onChangeText={handleInputChange}
            errorMessages={errorMessages}
          />
    </View>
  );
}
