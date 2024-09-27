/* import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.LoginIamgecontainer}>
                <Image source={require("../assets/Welcome_page.png")} style={styles.Welcome_page} />
            </View>
            <View style={styles.hellocontainer}>
                <Text style={styles.helloText}>HELLO!</Text>
            </View>
            <View style={styles.hellocontainer}>
                <Text style={styles.namasteText}>NAMASTE!</Text>
            </View>
            <View>
                <Text style={styles.mainText}>Select a preferred languages</Text>
            </View>
            <View style={styles.languageContainer}>
                <Text style={styles.languageItem}>Arabic</Text>
                <Text style={styles.languageItem}>American English</Text>
                <Text style={styles.languageItem}>Spanish</Text>
                <Text style={styles.languageItem}>French</Text>
                <Text style={styles.languageItem}>German</Text>
                <Text style={styles.languageItem}>Chinese</Text>
                <Text style={styles.languageItem}>Japanese</Text>
                <Text style={styles.languageItem}>Korean</Text>
                <Text style={styles.languageItem}>Hindi</Text>
                <Text style={styles.languageItem}>Bengali</Text>
            </View>
        </View>
    )
}

export default LoginScreen

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

    helloText: {

        width: 70,
        height: 30,
        top: 70,
        left: 200,
        fontSize: 20,
        fontWeight: "bold",
        color: " rgba(5, 99, 129, 1)"
    },

    namasteText: {
        width: 100,
        height: 30,
        top: 133,
        left: 275,
        fontSize: 19,
        fontWeight: "bold",
        color: " rgba(5, 99, 129, 1)"
    },

    mainText: {
        width: 500,
        height: 40,
        top: 217.77,
        left: 50,
        fontSize: 25,
        fontWeight: "bold",
        color: "rgba(0, 0, 0, 1)"

    },

    languageContainer: {
        top: 250,
        left: 150,
        flexDirection: 'column',  // Vertically align the items
    },

    languageItem: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 1)',
        marginBottom: 15, // Space between each language item
    },




});

 */

/* import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

const LoginScreen = () => {
    const [hoveredLanguage, setHoveredLanguage] = useState(null);

    const languages = [
        "Arabic", "American English", "Spanish", "French",
        "German", "Chinese", "Japanese", "Korean", "Hindi", "Bengali"
    ];

    const handlePressIn = (language) => {
        setHoveredLanguage(language);
    };

    const handlePressOut = () => {
        setHoveredLanguage(null);
    };

    return (
        <View style={styles.container}>
            <View style={styles.LoginIamgecontainer}>
                <Image source={require("../assets/Welcome_page.png")} style={styles.Welcome_page} />
            </View>
            <View style={styles.hellocontainer}>
                <Text style={styles.helloText}>HELLO!</Text>
            </View>
            <View style={styles.hellocontainer}>
                <Text style={styles.namasteText}>NAMASTE!</Text>
            </View>
            <View>
                <Text style={styles.mainText}>Select a preferred language</Text>
            </View>
            <View style={styles.languageContainer}>
                {languages.map((language, index) => (
                    <TouchableOpacity
                        key={index}
                        onPressIn={() => handlePressIn(language)}
                        onPressOut={handlePressOut}
                        activeOpacity={0.7}
                    >
                        <Text
                            style={[
                                styles.languageItem,
                                hoveredLanguage === language && styles.hoveredLanguageItem,
                            ]}
                        >
                            {language}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.ButtonContainer}>
                <AntDesign
                    name={"arrowright"}
                    size={40}
                    color={"white"}
                    backgroundColor={"rgba(22, 145, 184, 1)"}

                />
            </View>
        </View>
    );
}

export default LoginScreen

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

    helloText: {
        width: 70,
        height: 30,
        top: 70,
        left: 200,
        fontSize: 20,
        fontWeight: "bold",
        color: " rgba(5, 99, 129, 1)"
    },

    namasteText: {
        width: 100,
        height: 30,
        top: 133,
        left: 275,
        fontSize: 19,
        fontWeight: "bold",
        color: " rgba(5, 99, 129, 1)"
    },

    mainText: {
        width: 500,
        height: 40,
        top: 217.77,
        left: 50,
        fontSize: 25,
        fontWeight: "bold",
        color: "rgba(0, 0, 0, 1)"
    },

    languageContainer: {
        top: 250,
        left: 150,
        flexDirection: 'column',  // Vertically align the items
    },

    languageItem: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 1)',
        marginBottom: 15, // Space between each language item
    },

    hoveredLanguageItem: {
        color: "rgba(5, 99, 129, 1)",  // Change color on hover-like effect
        fontSize: 22,                  // Slightly increase font size
    },

    ButtonContainer: {
       width: 40 ,
       left: 100,
       height: 50,
       Top: 1500

}
});
 */

import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const [hoveredLanguage, setHoveredLanguage] = useState(null);

    const languages = [
        "Arabic", "American English", "Spanish", "French",
        "German", "Chinese", "Japanese", "Korean", "Hindi", "Bengali"
    ];

    const handlePressIn = (language) => {
        setHoveredLanguage(language);
    };

    const handlePressOut = () => {
        setHoveredLanguage(null);
    };
    
    const navigation = useNavigation();
    const handleLogin = () => {
        navigation.navigate("Login");
    }

    return (
        <View style={styles.container}>
            <View style={styles.LoginIamgecontainer}>
                <Image source={require("../assets/Welcome_page.png")} style={styles.Welcome_page} />
            </View>
            <View style={styles.hellocontainer}>
                <Text style={styles.helloText}>HELLO!</Text>
            </View>
            <View style={styles.hellocontainer}>
                <Text style={styles.namasteText}>NAMASTE!</Text>
            </View>
            <View>
                <Text style={styles.mainText}>Select a preferred language</Text>
            </View>
            <View style={styles.languageContainer}>
                {languages.map((language, index) => (
                    <TouchableOpacity
                        key={index}
                        onPressIn={() => handlePressIn(language)}
                        onPressOut={handlePressOut}
                        activeOpacity={0.7}
                    >
                        <Text
                            style={[
                                styles.languageItem,
                                hoveredLanguage === language && styles.hoveredLanguageItem,
                            ]}
                        >
                            {language}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            
            <View style={styles.buttonWrapper}>
                <TouchableOpacity onPress={handleLogin} style={styles.button}>
                    <AntDesign
                        name={"arrowright"}
                        size={40}
                        color={"white"}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default WelcomeScreen;

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


    helloText: {
        width: 70,
        height: 30,
        top: 70,
        left: 200,
        fontSize: 20,
        fontWeight: "bold",
        color: " rgba(5, 99, 129, 1)"
    },

    namasteText: {
        width: 100,
        height: 30,
        top: 133,
        left: 275,
        fontSize: 19,
        fontWeight: "bold",
        color: " rgba(5, 99, 129, 1)"
    },

    mainText: {
        width: 500,
        height: 40,
        top: 217.77,
        left: 50,
        fontSize: 25,
        fontWeight: "bold",
        color: "rgba(0, 0, 0, 1)"
    },

    languageContainer: {
        top: 250,
        left: 150,
        flexDirection: 'column',
    },

    languageItem: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 1)',
        marginBottom: 15,
    },

    hoveredLanguageItem: {
        color: "rgba(5, 99, 129, 1)",  // Change color on hover-like effect
        fontSize: 22,
    },

    buttonWrapper: {
        position: 'absolute',
        bottom: 10,   // Adjust to your desired position
        right: 10,    // Adjust to your desired position
        backgroundColor: 'rgba(22, 145, 184, 1)',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        width: 70,
        height: 40
    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',

    },
});
 