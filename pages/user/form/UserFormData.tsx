import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// import RazorpayCheckout from 'react-native-razorpay';

interface FormData {
  name: string;
  developmentType: 'app' | 'website';
  paymentOption: 'moduleWise' | 'partial' | 'full';
  documents: any[];
}

const HomePage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    developmentType: 'app',
    paymentOption: 'moduleWise',
    documents: [],
  });

  const handleNameChange = (value: string) => {
    setFormData(prevState => ({ ...prevState, name: value }));
  };

  const handleDevelopmentTypeChange = (value: 'app' | 'website') => {
    setFormData(prevState => ({ ...prevState, developmentType: value }));
  };

  const handlePaymentOptionChange = (value: 'moduleWise' | 'partial' | 'full') => {
    setFormData(prevState => ({ ...prevState, paymentOption: value }));
  };

  const handleDocumentUpload = (files: Document[]) => {
    setFormData(prevState => ({ ...prevState, documents: prevState.documents.concat(files) }));
  };

//   const handlePayment = () => {
//     RazorpayCheckout.open({
//       amount: 1000,
//       name: formData.name,
//       description: 'Payment for development',
//       prefill: {
//         email: 'example@example.com',
//         contact: '1234567890',
//       },
//       theme: { color: '#F37254' },
//     }).then((paymentResult:any) => {
//       console.log(paymentResult);
//     }).catch((error:any) => {
//       console.log(error);
//     });
//   };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formItem}>
        <Text style={styles.label}>Name of the startup/company/package:</Text>
        <TextInput style={styles.input} value={formData.name} onChangeText={handleNameChange} />
      </View>
      {/* <View style={styles.formItem}>
        <Text style={styles.label}>Develop app or website:</Text>
        <RadioButton.Group onValueChange={handleDevelopmentTypeChange} value={formData.developmentType}>
          <View style={styles.radioButtonItem}>
            <Text style={styles.radioButtonLabel}>App</Text>
            <RadioButton style={styles.radioButton} value="app" />
          </View>
          <View style={styles.radioButtonItem}>
            <Text style={styles.radioButtonLabel}>Website</Text>
            <RadioButton style={styles.radioButton} value="website" />
          </View>
        </RadioButton.Group>
      </View> */}
      {/* <View style={styles.formItem}>
        <Text style={styles.label}>Select payment option:</Text>
        <RadioButton.Group onValueChange={handlePaymentOptionChange} value={formData.paymentOption}>
          <View style={styles.radioButtonItem}>
            <Text style={styles.radioButtonLabel}>Module wise</Text>
            <RadioButton style={styles.radioButton} value="moduleWise" />
          </View>
          <View style={styles.radioButtonItem}>
            <Text style={styles.radioButtonLabel}>Partial payment</Text>
            <RadioButton style={styles.radioButton} value="partial" />
          </View>
          <View style={styles.radioButtonItem}>
            <Text style={styles.radioButtonLabel}>Full payment</Text>
            <RadioButton style={styles.radioButton} value="full" />
          </View>
        </RadioButton.Group>
      </View> */}
      <View>
      <Text style={styles.label}>Upload extra documents:</Text>
    {/* Add file upload component here */}
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Proceed to payment</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.payment}>
    <Text style={styles.paymentHeader}>In-App Payment:</Text>
    {/* Add Razorpay payment component here */}
  </View>
  <View style={styles.progress}>
    <Text style={styles.progressHeader}>Check development progress:</Text>
    {/* Add tracker and dashboard component here */}
  </View>
  <View style={styles.payment}>
    <Text style={styles.paymentHeader}>Payment history:</Text>
    {/* Add payment history component here */}
  </View>
</ScrollView>

);
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 20,
    },
    formItem: {
    marginBottom: 20,
    },
    label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    },
    input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    },
    radioButtonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    },
    radioButton: {
    marginLeft: 10,
    },
    radioButtonLabel: {
    fontSize: 16,
    marginLeft: 5,
    },
    button: {
    backgroundColor: '#F37254',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    },
    buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    },
    payment: {
    marginTop: 30,
    },
    paymentHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    },
    progress: {
    marginTop: 30,
    },
    progressHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    },
    });
    
    export default HomePage;

