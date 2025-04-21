import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useRouter } from 'expo-router';

const ButtonPrimary = ({title, bgBtn, bgText, rute}: any) => {
    const navigation = useRouter();
  return (
    <TouchableOpacity style={tw`bg-${bgBtn} px-4 py-2 rounded-lg mx-12`} onPress={() => navigation.navigate(rute)}>
      <Text style={tw`text-${bgText} text-center`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({})