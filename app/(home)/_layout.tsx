import React from 'react';
import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
      <Stack>
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