import React from "react";
import {createBottomTabNavigator} from "react-navigation-tabs"
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"
import Icons from "react-native-vector-icons/Ionicons"
import Icon from "react-native-vector-icons/Octicons"

import AboutScreen from "./screens/AboutScreen"
import HomeScreen from "./screens/HomeScreen"
import TranslateScreen from "./screens/TranslateScreen"

const Auth= createStackNavigator({
  Home:{
    screen:HomeScreen,
    navigationOptions:{
      headerShown:false
    }
  },
  About:{
    screen:AboutScreen,
    navigationOptions:{
      headerShown:true,
    }
  },
  Translate:{
    screen:TranslateScreen,
    navigationOptions:{
      headerShown:true
    }
  },

  
});




export default createAppContainer(
  createSwitchNavigator(
    {
      AuthSt:Auth
    },
    {
      initialRouteName:"AuthSt",
    }
  )
);