import { Image, StyleSheet, Platform, ScrollView, Text, TouchableOpacity } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import Menu from '@/components/Menu';

export default function HomeScreen() {
  const dataMenu = [
    { title: 'ECU Racing', icon: 'trophy-outline' },
    { title: 'Settings', icon: 'settings-outline' },
    { title: 'Analytics', icon: 'analytics-outline' },
    { title: 'History', icon: 'time-outline' },
    { title: 'Profile', icon: 'person-outline' },
  ];

  const videoCards = [
    { id: 1, image: require('@/assets/images/ecu4.png'), title: 'ECU Racing Pro' },
    { id: 2, image: require('@/assets/images/ecu6.png'), title: 'Performance Test' },
    { id: 3, image: require('@/assets/images/ecu5.png'), title: 'Speed Analysis' },
    { id: 4, image: require('@/assets/images/ecu3.png'), title: 'Track Day' },
  ];

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={tw`mx-4`}>
          {/* Header Section */}
          <View style={tw`flex-row justify-between items-center py-2`}>
            <Image
              source={require('@/assets/images/foto_vidio.png')}
              style={tw`w-20 h-20`}
              resizeMode="contain"
            />
            <View style={tw`flex-row items-center gap-4`}>
              <Ionicons name="search" size={24} />
              <Ionicons name="notifications" size={24} />
              <Ionicons name="menu" size={24} />
            </View>
          </View>

          {/* Featured Images Carousel */}
          <View style={tw`mt-2`}>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              pagingEnabled
            >
              <View style={tw`flex-row gap-3`}>
                <Image
                  source={require('@/assets/images/ecu1.png')}
                  style={tw`w-80 h-40 rounded-xl`}
                  resizeMode="cover"
                />
                <Image
                  source={require('@/assets/images/ecu2.png')}
                  style={tw`w-80 h-40 rounded-xl`}
                  resizeMode="cover"
                />
              </View>
            </ScrollView>
          </View>

          {/* Menu Section */}
          <View style={tw`flex-row justify-between mt-6`}>
            {dataMenu.map((item, index) => (
              <Menu 
                key={index}
                title={item.title} 
                simbol={item.icon}
              />
            ))}
          </View>

          {/* Video Section with Cards */}
          <View style={tw`mt-6`}>
            <Text style={tw`text-lg font-bold mb-3`}>Video Original</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
            >
              <View style={tw`flex-row gap-4`}>
                {videoCards.map((card) => (
                  <TouchableOpacity 
                    key={card.id}
                    style={tw`bg-white rounded-xl shadow-lg w-40`}
                  >
                    <View style={tw`relative`}>
                      <Image
                        source={card.image}
                        style={tw`w-40 h-48 rounded-xl`}
                        resizeMode="cover"
                      />
                      <View style={tw`absolute bottom-0 left-0 right-0 bg-black/50 p-2 rounded-b-xl`}>
                        <Text style={tw`text-white text-sm font-medium`}>
                          {card.title}
                        </Text>
                        <View style={tw`flex-row items-center mt-1`}>
                          <Ionicons name="play-circle-outline" size={14} color="white" />
                          <Text style={tw`text-white text-xs ml-1`}>4:30</Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
