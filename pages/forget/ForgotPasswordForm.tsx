import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

interface ForgotPasswordFormProps {
  onSubmit: (email: string) => void;
}

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // onSubmit(email);
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
      <Button title="Submit" onPress={handleSubmit} />
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
});

export default ForgotPasswordForm;
