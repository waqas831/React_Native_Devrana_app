import {View,Text,TouchableOpacity} from 'react-native'
import MainTabBar from '../components/Tabs/MainTabBar';
import UserSignupForm from '../pages/signup/UserSignupForm';
import LoginForm from '../pages/login/LoginForm';
import UserFormData from '../pages/user/form/UserFormData';
import ForgotPasswordForm from '../pages/forget/ForgotPasswordForm';

export const AllScreens = [
  {
    name: 'TabBar',
    screen: 'TabBar',
    component: MainTabBar,
    options: {
      title: 'TabBar',
      headerShown: false,
      headerRight: () => (
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <Text style={{color: 'white', fontSize: 16}}>
            Welcome
          </Text>
        </View>
      ),
    },
  },
  {
    name: 'UserSignupForm',
    screen: 'UserSignupForm',
    component: UserSignupForm,
    options: {
      title: 'UserSignupForm',
      headerShown: true,
      headerRight: () => (
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <Text style={{color: 'white', fontSize: 16}}>
            Welcome
          </Text>
        </View>
      ),
    },
  },
  {
    name: 'LoginForm',
    screen: 'LoginForm',
    component: LoginForm,
    options: {
      title: 'LoginForm',
      headerShown: false,
      headerRight: () => (
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <Text style={{color: 'white', fontSize: 16}}>
            Welcome
          </Text>
        </View>
      ),
    },
  },
  {
    name: 'UserFormData',
    screen: 'UserFormData',
    component: UserFormData,
    options: {
      title: 'UserFormData',
      headerShown: false,
      headerRight: () => (
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <Text style={{color: 'white', fontSize: 16}}>
            Welcome
          </Text>
        </View>
      ),
    },
  },
  {
    name: 'ForgotPasswordForm',
    screen: 'ForgotPasswordForm',
    component: ForgotPasswordForm,
    options: {
      title: 'ForgotPasswordForm',
      headerShown: false,
      headerRight: () => (
        <View style={{flexDirection: 'row', marginRight: 10}}>
          <Text style={{color: 'white', fontSize: 16}}>
            Welcome
          </Text>
        </View>
      ),
    },
  },
];
