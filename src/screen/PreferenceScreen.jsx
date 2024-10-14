import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PreferenceScreen = ({ navigation }) => {
  const [selectedQualification, setSelectedQualification] = useState(null);
  const [completedSteps, setCompletedSteps] = useState({ education: true, experience: false, preference: false });
  const [selectedOption, setSelectedOption] = useState(null); // State to track selected job option

  // Navigate to the EducationScreen on Back button press
  const handleBack = () => {
    navigation.navigate('Experience');
  };

  // Navigate to the PreferenceScreen on Next button press
  const handleNext = () => {
    setCompletedSteps((prevSteps) => ({
      ...prevSteps,
      experience: true,
    }));
    navigation.navigate('Preference1');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require("../assets/Education_page.png")} style={styles.headerImage} />
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressItem}>
          {completedSteps.education ? (
            <AntDesign name="checkcircle" size={22} color="white" />
          ) : (
            <View style={styles.circle}>
              <Text style={styles.circleText}>1</Text>
            </View>
          )}
          <Text style={styles.progressText}>Education</Text>
        </View>
        <View style={styles.progressLine} />
        <View style={styles.progressItem}>
          {completedSteps.experience ? (
            <AntDesign name="checkcircle" size={22} color="#3EC623" />
          ) : (
            <View style={styles.circle}>
              <Text style={styles.circleText}>2</Text>
            </View>
          )}
          <Text style={styles.progressText}>Experience</Text>
        </View>
        <View style={styles.progressLine} />
        <View style={styles.progressItem}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>3</Text>
          </View>
          <Text style={styles.progressText}>Preference</Text>
        </View>
        <View style={styles.progressLine} />
        <View style={styles.progressItem}>
          <Image source={require("../assets/rocket.png")} style={styles.rocket} />
          <Text style={styles.progressText}>Jobs</Text>
        </View>
      </View>

      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>
          Select preferred department / Area of work
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Image source={require("../assets/search.png")} style={styles.search} />
          <TextInput placeholder="Search Job Title" style={styles.input} />
        </View>
      </View>

      <View>
        <Text style={styles.job}>Your job preference based on experience</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputbox}>
          <Image source={require("../assets/chair.png")} style={styles.chair} />
          <Text style={styles.input2}>Office / Admin / Computer Oper...</Text>
          <Text style={styles.input3}>Administrative and office support roles</Text>

 
          <TouchableOpacity
            style={styles.radioButton}
            onPress={() => setSelectedOption('admin')}
          >
            {selectedOption === 'admin' && <View style={styles.radioButtonChecked} />}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputbox}>
          <Image source={require("../assets/customer.png")} style={styles.chair} />
          <Text style={styles.input2}>Customer Support</Text>
          <Text style={styles.input4}>Calling customers, informing them about products/{"\n"}services, receiving calls, and resolving calls</Text>

      
          <TouchableOpacity
            style={styles.radioButton1}
            onPress={() => setSelectedOption('support')}
          >
            {selectedOption === 'support' && <View style={styles.radioButtonChecked} />}
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={styles.all}>All Department</Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputbox1}>
          <Image source={require("../assets/teaching.png")} style={styles.teaching} />
          <Text style={styles.input5}>Teaching & Training</Text>
          <Text style={styles.input6}>Education, training, and academic roles</Text>

         
          <TouchableOpacity
            style={styles.radioButton2}
            onPress={() => setSelectedOption('teaching')}
          >
            {selectedOption === 'teaching' && <View style={styles.radioButtonChecked} />}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputbox2}>
          <Image source={require("../assets/human.png")} style={styles.human} />
          <Text style={styles.input7}>Human Resources</Text>
          <Text style={styles.input8}>Handling HR management and recruitment processes</Text>

       
          <TouchableOpacity
            style={styles.radioButton3}
            onPress={() => setSelectedOption('hr')}
          >
            {selectedOption === 'hr' && <View style={styles.radioButtonChecked} />}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.footerButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.footerButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PreferenceScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    height: 200,
  },
  headerImage: {
    width: '100%',
    height: '420%',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  progressItem: {
    alignItems: 'center',
    bottom: 155,
  },
  progressText: {
    marginTop: 5,
    fontSize: 15,
    color: 'white',
    fontWeight: '500',
  },
  progressLine: {
    width: 35,
    height: 2,
    backgroundColor: 'white',
    marginHorizontal: 5,
    bottom: 165,
  },
  circle: {
    width: 25,
    height: 24,
    borderRadius: 12,
    borderColor: 'white',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: 'white',
    fontSize: 12,
  },
 
  instructionText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'rgba(40, 76, 141, 1)',
    bottom: 123,
    height: 55,
    fontWeight: '600',
    marginTop: 10

  },

  inputContainer: {
    marginBottom: 20,
  },

  search: {
    left: 340
  },

 
   selectedButton: {
    backgroundColor: 'rgba(22, 145, 184, 1)',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 15
  },

  inputContainer: {
    marginBottom: 20,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
    height: 40,
    width: 375,
    left: 20,
    marginTop: -100
  },

  input2: {
    fontWeight: '700',
    fontSize: 17,
    color: 'rgba(40, 76, 141, 1)',
    bottom: 10,
    right: 3
  },

  input3: {
    right: 258,
    marginTop: 20,
    fontSize: 10,
    color: 'rgba(109, 109, 109, 1)'
  },
    

  input4: {
    right: 141,
    marginTop: 26,
    fontSize: 10,
    color: 'rgba(109, 109, 109, 1)'
  },

  input5: {
    fontWeight: '700',
    fontSize: 17,
    color: 'rgba(40, 76, 141, 1)',
    bottom: 10,
    right: 15
  },

  input6: {
    right: 167,
    marginTop: 20,
    fontSize: 10,
    color: 'rgba(109, 109, 109, 1)'
  },

  teaching: {
    marginBottom: 20,
    right: 8
  },

  input7: {
    fontWeight: '700',
    fontSize: 17,
    color: 'rgba(40, 76, 141, 1)',
    bottom: 10,
    left: 19
  },

  input8: {
    right: 121,
    marginTop: 20,
    fontSize: 10,
    color: 'rgba(109, 109, 109, 1)'
  },

  human: {
    left: 8
  },


  location: {
     marginTop: 20,
     left: 35,
     fontSize: 20,
     color: 'rgba(40, 76, 141, 1)',
     fontWeight: '700',
  },

  company: {
     marginTop: 2,
     left: 35,
     fontSize: 20,
     color: 'rgba(40, 76, 141, 1)',
     fontWeight: '700',
  },

  input: {
     width: 150,
     left: -8,
     Top: 15,
     color: 'rgba(109, 109, 109, 1)'      
    },

    job: {
      left: 40,
      marginTop: -55,
      fontWeight: '700',
      fontSize: 18,
      color: 'rgba(40, 76, 141, 1)'
            },


    all: {
      left: 28,
      fontSize: 19,
      color: 'rgba(40, 76, 141, 1)',
      fontWeight: '600',
      bottom: 5
    },


    inputbox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
    height: 65,
    width: 350,
    left: 33,
    marginTop: -7,
    backgroundColor: 'rgba(22, 145, 184, 0.4)'
    },

    inputbox1: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: "white",
      borderWidth: 2,
      borderRadius: 8,
      height: 65,
      width: 350,
      left: 33,
      marginTop: 13,
      backgroundColor: 'rgba(22, 145, 184, 0.4)'
      },

      inputbox2: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 8,
        height: 65,
        width: 350,
        left: 33,
        marginTop: 5,
        backgroundColor: 'rgba(22, 145, 184, 0.4)'
        },

  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  backButton: {
    backgroundColor: 'rgba(22, 145, 184, 1)',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 25,
    left: 45
  },
  nextButton: {
    backgroundColor: 'rgba(22, 145, 184, 1)',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 25,
    right: 45,

  },
  footerButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  
  
  radioButton: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(22, 145, 184, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    right: 174,
    backgroundColor: 'white'
  },

  radioButton1: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(22, 145, 184, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    right: 125,
    backgroundColor: 'white'
  },

  radioButton2: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(22, 145, 184, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    right: 97,
    backgroundColor: 'white'
  },

  radioButton3: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(22, 145, 184, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    right: 115,
    backgroundColor: 'white'
  },

  radioButtonChecked: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(22, 145, 184, 1)"
  },

});
