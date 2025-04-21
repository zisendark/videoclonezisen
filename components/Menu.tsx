import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons'

const Menu = ({ title, simbol }: any) => {
    return (
        <View style={tw`flex-col w-15 items-center justify-center gap-2`}>
            <View style={tw`p-2 items-center rounded-full border border-neutral-300`}>
                <Ionicons name={simbol} size={24} color='black' />
            </View>
            <Text style={tw`text-center text-xs`}>{title}</Text>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({})