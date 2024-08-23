import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Yup from 'yup'; // Import Yup for schema validation
import Screen from '../components/Screen';
import AppForm from '../components/forms/AppForm';
import AppFormField from '../components/forms/AppFormField'; // Import AppFormField from your components
import SubmitButton from '../components/forms/SubmitButton'; // Import SubmitButton from your components

const validationSchema = Yup.object().shape({

  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),

})

const SigninScreen = () => {
  const handleSubmit = (values) => {
    console.log(values); // Replace with your form submission logic
  };
  const handleSignInPress = () => {
    // Handle navigation to sign-in screen or other action
    console.log("Navigate to Sign In screen");
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>Welcome Back!</Text>
      </View>
      <View style={styles.form}>


        <AppForm
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >


          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            name="email"
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />


          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={handleSignInPress}>
              <Text style={styles.signInText}>
                Don't have an account? <Text style={styles.linkText}>Sign up</Text>
              </Text>
            </TouchableOpacity>

            <SubmitButton title="Sign In" color="pink" />
          </View>
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    position: 'absolute',
    paddingTop: 50, // Adjust top padding for header positioning
    alignItems: 'center', // Centers items horizontally within the header
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  form: {
    top: 170, // Adjust top padding for form positioning"
  },
  signInText: {
    marginTop: 20,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
  },
  linkText: {
    color: '#0FBEE5',
    textDecorationLine: 'underline',
    padding: 5,
  },
  buttonsContainer: {
    position: "absoulte",
    top: 10, // Adjust top padding for button positioning
    padding: 20,
    width: '100%',
    height: 400, // Adjust height for button positioning
    alignItems: "center",
  },
});

export default SigninScreen;
