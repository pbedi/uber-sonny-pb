//import liraries
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import tw from 'tailwind-react-native-classnames'
import { selectOrigin } from '../slices/navSlice';

const data = [
  {
    id: 123,
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreenM'
  },
  {
    id: 456,
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen'
  }
]
const NavOptions = () => {
  const navigation = useNavigation()
  const origin = useSelector(selectOrigin)

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          disabled={!origin}>
          <View >
            <Image
              source={{ uri: item.image }}
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name='arrowright'
              color={'white'}
              type='antdesign'
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};


//make this component available to the app
export default NavOptions;
