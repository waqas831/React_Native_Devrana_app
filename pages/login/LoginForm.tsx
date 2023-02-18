import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// interface LoginFormProps {
//   onSubmit: (email: string, password: string) => void;
//   onSwitchToSignup: () => void;
// }

const LoginForm = () => {
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />
      <Button title="Login" onPress={handleSubmit} />
      <Text style={styles.signupText}>
        Don't have an account?{' '}
        <Text style={styles.signupLink}>
          <TouchableOpacity
          
            onPress={() => {
              navigation.navigate('UserSignupForm');
            }}>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  signupText: {
    marginTop: 20,
  },
  signupLink: {
    color: 'blue',
  },
});

export default LoginForm;
