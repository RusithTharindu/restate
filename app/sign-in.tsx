import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import icons from '@/constants/icons';

const SignIn = () => {
  const handleLogin = () => {};

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6 "
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="font-rubik uppercase text-center text-base text-black-200">
            Welcome to Restate
          </Text>
          <Text className="text-3xl font-bold text-black-300 text-center mt-2">
            Let's get closer to{'\n'}
            <Text className="text-blue-700">Your dream home</Text>
          </Text>
          <Text className="mt-12 text-center font-rubik-semibold text-lg text-slate-700">
            Login to Restate with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5 flex flex-row items-center justify-center gap-5"
          >
            <Image
              source={icons.google}
              className="w-5 h-5"
              resizeMode="contain"
            />
            <Text className="text-lg font-bold">Continue with Google</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
