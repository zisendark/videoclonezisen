import { Text, View, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonPrimary from '@/components/ButtonPrimary';
import tw from 'twrnc';

const index = () => {
  return (
    <SafeAreaView style={tw`flex-1 justify-center items-center bg-white`}>
      <View style={tw`px-5 items-center`}>
        {/* Menampilkan Gambar */}
        <Image 
          source={require('@/assets/images/foto_depan.png')} // Pastikan path sesuai
          style={tw`w-72 h-68 mb-5`}
          resizeMode="contain"
        />

        {/* Teks */}
        <Text style={tw`text-lg font-bold text-center mb-2`}>
          TV Channels, Soap Operas, Sport & K-Drama, we have it all
        </Text>
        <Text style={tw`text-sm text-gray-600 text-center mb-5`}>
          Pick anything you like from 40+ TV channels and hundreds of thousands of free content to watch in your free time.
        </Text>

        {/* Tombol */}
        <ButtonPrimary title="Sign in Or Register" bgBtn="[#ED203F]" bgText="neutral-200" rute="auth/signin"/>
        <ButtonPrimary title="Find Content" bgText="neutral-900"/>
      </View>
    </SafeAreaView>
  );
};

export default index;
