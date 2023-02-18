import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import {Dimensions, StyleSheet, View} from 'react-native';
import LoginForm from '../../pages/login/LoginForm';
import UserSignupForm from '../../pages/signup/UserSignupForm';
import ForgotPasswordForm from '../../pages/forget/ForgotPasswordForm'
const Tab = createBottomTabNavigator();

const MainTabBar = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            // return 'welcome';
            // return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: TabBarStyle,
        })}
        tabBarPosition="bottom">
        <Tab.Screen
          name="Home"
          options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle: {
              fontSize: 18,
              textAlign: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'green',
              display: 'flex',
              paddingBottom: 10,
            },
          }}
          component={HomeScreen}
        />
        {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
        <Tab.Screen name="login" component={LoginForm} />
        <Tab.Screen name="signup" component={UserSignupForm} />
        <Tab.Screen name="forget" component={ForgotPasswordForm} />
      </Tab.Navigator>
    </View>
  );
};

export default MainTabBar;

const TabBarStyle = {
  backgroundColor: '#F5F5F5',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  borderWidth: 1.5,
  borderColor: 'red',
  elevation: 5,
  shadowColor: 'black',
  shadowOpacity: 0.5,
  shadowRadius: 5,
  shadowOffset: {
    width: 0,
    height: -1,
  },
};

//   assign the type of tabBarLabelStyle

const tabBarLabelStyle = {
  tabBarLabelStyle: {
    fontSize: 12,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'green',
    display: 'flex',
    paddingBottom: 10,
  },
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});
