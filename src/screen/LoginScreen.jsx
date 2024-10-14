import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Linking } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const googleLoginUrl = 'https://accounts.google.com/signin';
  const facebookLoginUrl = 'https://www.facebook.com/login/';
  const appleLoginUrl = 'https://appleid.apple.com/auth/authorize';

  // Email and phone number validation regex patterns
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10}$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$&]).{8,}$/;

  // Function to handle login button click
  const handleLogin = () => {
    // Check if email or phone is provided
    if (!emailOrPhone) {
      setErrorMessage('Phone Number or Email is required.');
      return;
    }

    // Validate email or phone number
    const isEmail = emailPattern.test(emailOrPhone);
    const isPhone = phonePattern.test(emailOrPhone);

    if (!isEmail && !isPhone) {
      setErrorMessage('Please enter a valid Email (e.g., xyz@gmail.com) or a 10-digit Phone Number.');
      return;
    }

    // Check if password is provided
    if (!password) {
      setErrorMessage('Password is required.');
      return;
    }

    // Validate password based on criteria
    if (!passwordPattern.test(password)) {
      setErrorMessage('Password must be at least 8 characters long, with one uppercase letter, one lowercase letter, one special character (@, #, $, &), and one number.');
      return;
    }

    // If validation passes, navigate to Resume screen
    setErrorMessage('');
    navigation.navigate('Resume');
  };

  return (
    <View style={styles.container}>
      <View style={styles.LoginIamgecontainer}>
        <Image source={require("../assets/login_page.png")} style={styles.Welcome_page} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.loginText}>Log in</Text>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <FontAwesome name="user" size={20} color="rgba(22, 145, 184, 1)" style={styles.icon} />
            <TextInput
              placeholder="Phone Number or email id"
              style={styles.input}
              value={emailOrPhone}
              onChangeText={setEmailOrPhone}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputWrapper}>
            <AntDesign name="lock" size={20} color="rgba(22, 145, 184, 1)" style={styles.icon} />
            <TextInput
              placeholder="Password"
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
          </View>
        </View>

        {/* Error Message Display */}
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}

        <View style={styles.optionsContainer}>
          <View style={styles.checkboxContainer}>
            <AntDesign name="checksquare" size={20} color="rgba(22, 145, 184, 1)" />
            <Text style={styles.rememberText}> Remember me. </Text>
            <Text style={styles.learnMoreText}>Learn more</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or sign in with</Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton} onPress={() => Linking.openURL(googleLoginUrl)}>
            <Image source={require("../assets/Frame1.png")} style={styles.google} />
            <Text style={styles.socialButtonText}>Sign in with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton} onPress={() => Linking.openURL(facebookLoginUrl)}>
            <Image source={require("../assets/Frame2.png")} style={styles.facebook} />
            <Text style={styles.socialButtonText}>Sign in with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton} onPress={() => Linking.openURL(appleLoginUrl)}>
            <Image source={require("../assets/Frame3.png")} style={styles.apple} />
            <Text style={styles.socialButtonText}>Sign in with Apple</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.signupText}>
          Don’t have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  LoginIamgecontainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 200,
    alignItems: 'center',
  },
  Welcome_page: {
    width: "100%",
    height: 862,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  loginText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'rgba(22, 145, 184, 1)',
    marginBottom: 30,
    left: 4
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "rgba(22, 145, 184, 1)",
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 15,
    height: 50,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "rgba(40, 76, 141, 1)",
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    fontSize: 15,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  learnMoreText: {
    color: 'rgba(40, 76, 141, 1)',
    fontSize: 15,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: 'rgba(40, 76, 141, 1)',
    fontSize: 14,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: 'rgba(22, 145, 184, 1)',
    borderRadius: 22,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: 'rgba(5, 99, 129, 1)',
    marginBottom: 21,
    fontWeight: 'bold',
  },
  socialContainer: {
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.53)',
    paddingVertical: 11,
    paddingHorizontal: 10,
    marginBottom: 10,
    justifyContent: 'center',
    borderRadius: 8,
    elevation: 13.5,
  },
  socialButtonText: {
    color: 'rgba(50, 51, 52, 1)',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  google: {
    right: 5
  },
  apple: {
    right: 12
  },
  signupText: {
    textAlign: 'center',
    color: 'rgba(50, 51, 52, 1)',
    marginBottom: 30,
    fontWeight: 'bold'
  },
  signupLink: {
    color: 'rgba(40, 76, 141, 1)',
    fontWeight: 'bold',
  },

  // Existing styles
  // Add this for the error message
  errorMessage: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
    bottom: 30,
    right: 70
    
  },

  
  


});
