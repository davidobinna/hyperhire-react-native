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

const handleInputChange = (key: string, value: string) => {
   setFormData({
    ...formData, 
    [key]: value,
   });
};

const handleSubmit = () => {
    // Handle form submission
    console.log(formData);
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
          />
    </View>
  );
}
