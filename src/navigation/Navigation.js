import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../screens/Account";
import Favorite from "../screens/Favorite";
import Pokedex from "../screens/Pokedex";
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Image} from 'react-native'

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Favorite" component={Favorite} options={{tabBarLabel:'Favoritos', tabBarIcon: ({color, size}) => (
                <Icon name="heart" color={color} size={size}/>
            )}} />
            <Tab.Screen name="Pokedex" component={Pokedex} options={{tabBarLabel:'' ,tabBarIcon: () => (<RenderPokeball/>)}}/>
            <Tab.Screen name="Account" component={Account} options={{tabBarLabel:'Mi cuenta', tabBarIcon:({color, size}) => (
                <Icon name="user" color={color} size={size}/>
             )}} />
        </Tab.Navigator>
    );
}

const RenderPokeball = () => (<Image source={require('../assets/pokeball.png')} style={{width:75, height:75, top:-15}} />)