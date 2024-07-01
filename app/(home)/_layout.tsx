import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
      <Stack 
          screenOptions={{
            headerStyle: {
              backgroundColor: 'rgba(255, 255, 255, 0.5)', 
            },
            headerTintColor: '#000', 
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitle: 'welcome', 
          }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="register"/>
      </Stack>
  );
}


{/*
rm -rf node_modules
rm package-lock.json # or yarn.lock if you're using yarn
npm install
 */}