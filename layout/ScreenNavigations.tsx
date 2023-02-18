import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AllScreens} from '../screenoptions/screenoptions';

type Screen = {
  name: string;
  component: React.ComponentType<any>;
  options?: Record<string, any>;
};

const Stack = createNativeStackNavigator();
const ScreenNavigations: React.FC<any> = () => {
  return (
    <Stack.Navigator initialRouteName="TabBar">
      {AllScreens.map(({name, component, options}: Screen) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={options}
        />
      ))}
      {}
    </Stack.Navigator>
  );
};

export default ScreenNavigations;
