import { Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';
import ButtonPrimary from '@/components/ButtonPrimary';
import { useRouter } from 'expo-router';

const SignInScreen = () => {
    const navigation = useRouter();

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={tw`flex-1 justify-center`}
      >
        <View style={tw`px-6 w-full items-center`}>
          {/* Logo */}
          <Image 
            source={require('@/assets/images/foto_vidio.png')}
            style={tw`w-20 h-20 mb-6`}
          />

          {/* Header */}
          <Text style={tw`text-2xl font-bold mb-2 text-gray-800`}>Sign in to Vidio for free!</Text>
          <Text style={tw`text-base text-gray-600 text-center mb-8 px-4`}>
            Get content recommendations and download your favorite videos
          </Text>

          {/* Input Fields */}
          <View style={tw`w-full space-y-4 mb-6`}>
            <View>
              <Text style={tw`text-sm font-medium text-gray-700 mb-1 ml-1`}>Email</Text>
              <TextInput
                style={tw`w-full bg-gray-50 p-4 rounded-xl border border-gray-200`}
                placeholder="Enter your email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View>
              <Text style={tw`text-sm font-medium text-gray-700 mb-1 ml-1`}>Password</Text>
              <TextInput
                style={tw`w-full bg-gray-50 p-4 rounded-xl border border-gray-200`}
                placeholder="Enter your password"
                secureTextEntry
              />
            </View>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity>
            <Text style={tw`text-red-500 text-right font-semibold mb-6`}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Tombol Sign In dengan ButtonPrimary */}
          <ButtonPrimary title="   Sign in   " bgBtn="[#ED203F]" bgText="neutral-200" rute="auth/signin" />

          {/* Social Login Section */}
          <View style={tw`w-full items-center mt-2 mb-6`}>
            <Text style={tw`text-gray-500 mb-4`}>or continue with</Text>
            <View style={tw`flex-row justify-center space-x-6 gap-3`}>
              {['apple', 'google', 'facebook'].map((platform) => (
                <TouchableOpacity 
                  key={platform}
                  style={tw`p-4 bg-gray-50 rounded-xl border border-gray-200`}
                >
                  <FontAwesome name={platform} size={24} color={platform === 'apple' ? '#000' : '#4285F4'} />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Sign Up Link */}
          <View style={tw`flex-row`}>
            <Text style={tw`text-gray-600`}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text style={tw`text-red-500 font-bold`} onPress={() => navigation.navigate("/auth/register")}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInScreen;
