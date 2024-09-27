import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {  // Access the 'navigation' prop here
  return (
    <View style={styles.container}>
      <View style={styles.LoginIamgecontainer}>
        <Image source={require("../assets/login_page.png")} style={styles.Welcome_page} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.loginText}>Sign in</Text>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <FontAwesome name="user" size={20} color="rgba(22, 145, 184, 1)" style={styles.icon} />
            <TextInput placeholder="Email" style={styles.input} />
          </View>

          <View style={styles.inputWrapper}>
            <AntDesign name="lock" size={20} color="rgba(22, 145, 184, 1)" style={styles.icon} />
            <TextInput placeholder="Create Password" style={styles.input} secureTextEntry={true} />
          </View>
        

          <View style={styles.inputWrapper}>
            <AntDesign name="lock" size={20} color="rgba(22, 145, 184, 1)" style={styles.icon} />
            <TextInput placeholder="Confirm Password" style={styles.input} secureTextEntry={true} />
          </View>
        </View>


        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Signup</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          Already have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signupLink}>Login</Text>
          </TouchableOpacity>
          </Text>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require("../assets/Frame1.png")} style={styles.google} />
            <Text style={styles.socialButtonText}>Sign in with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image source={require("../assets/Frame2.png")} style={styles.facebook} />
            <Text style={styles.socialButtonText}>Sign in with Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image source={require("../assets/Frame3.png")} style={styles.apple} />
            <Text style={styles.socialButtonText}>Sign in with Apple</Text>
          </TouchableOpacity>
        </View>
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
});
