import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AccountScreen from '../screens/AccountScreen';
import PokedexScreen from '../screens/PokedexScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

import second from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-paper/lib/typescript/src/components/Icon';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>

        <Tab.Screen name='accountScreen' component={ AccountScreen } />

        <Tab.Screen name='pokedexScreen' component={ PokedexScreen }/>

        <Tab.Screen name='favoriteScreen' component={ FavoriteScreen} options={ {
            tabBarLabel: "Favoritos",
            tabBarIcon: ( { color, size } ) => (  
                <Icon name='heart' color={ color } size={ size } />
            ),
        } }/>
    </Tab.Navigator>
  )
}