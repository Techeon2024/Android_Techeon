// src/screen/ResumeScreen.js
import { Image, StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ResumeScreen = () => {
    

    return (
        <View style={styles.container}>
            <View style={styles.LoginIamgecontainer}>
                <Image source={require("../assets/Resume_Page.png")} style={styles.Welcome_page} />
            </View>
            <View style={styles.firstcontainer}>
                <Text style={styles.resumeText}>Let's build your resume!</Text>
            </View>
            <View style={styles.hellocontainer}>
                <Text style={styles.namasteText}>Add your details, so that employers{"\n"}       can find you easily for a job. </Text>
            </View>
            <View style={styles.profileContainer}>
          <Image source={require("../assets/profile_placeholder.png")} style={styles.profileImage} />
          <TouchableOpacity style={styles.addPhotoButton}>
          <Image source={require("../assets/camera.png")} style={styles.camera} />
            <Text style={styles.addPhotoText}>Add Photo</Text>
          </TouchableOpacity>
        </View>
            
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <FontAwesome name="user" size={20} color="rgba(22, 145, 184, 1)" style={styles.icon} />
            <TextInput placeholder="Phone Number or email id" style={styles.input} />
          </View>
          </View>
            
            
        </View>
    );
}

export default ResumeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F5F5",
        flex: 1,
    },

    LoginIamgecontainer: {
        height: 20,
    },

    Welcome_page: {
        width: "100%",
        height: 857,
    },


    resumeText: {
        width: 300,
        height: 33,
        top: 25,
        left: 70,
        fontSize: 25,
        fontWeight: "bold",
        color: "rgba(40, 76, 141, 1)"
    },

    namasteText: {
        width: 450,
        height: 50,
        top: 40,
        left: 90,
        fontSize: 14,
        color: "rgba(255, 255, 255, 1)"
    },

    profileContainer: {
        
        
      },
      profileImage: {
        width: 110,
        height: 110,
        borderRadius: 60,
        borderColor: 'rgba(255, 255, 255, 1)',
        borderWidth: 5,
        marginTop: 40,
        left: 145
      },

      addPhotoButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        left: 150
      },
      addPhotoText: {
        color: 'rgba(40, 76, 141, 1)',
        fontSize: 16,
        marginLeft: 5,
      },

      formContainer: {
        width: '100%',
      },
      label: {
        fontSize: 16,
        color: '#34495E',
        marginBottom: 5,
      },
      input: {
        width: '90%',
        height: 50,
        borderColor: '#4A90E2',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 15,
        marginBottom: 20,
        fontSize: 16,
        backgroundColor: 'white',
        left: 20
      },

      icon: {
        left: 30
      }
    
});
 