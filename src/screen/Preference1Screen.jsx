import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DocumentPicker from 'react-native-document-picker';  // Import Document Picker

const Preference1Screen = ({ navigation }) => {
  const [selectedQualification, setSelectedQualification] = useState(null);
  const [completedSteps, setCompletedSteps] = useState({ education: true, experience: false, preference: false });
  const [preferredLocation, setPreferredLocation] = useState(''); // State for the input box
  const [resumeFile, setResumeFile] = useState(null); // State to store the uploaded resume

  const handleNext = () => {
    setCompletedSteps((prevSteps) => ({
      ...prevSteps,
      experience: true,
    }));
    navigation.navigate('Preference1'); // Navigate to ExperienceScreen
  };

  const handleBack = () => {
    navigation.navigate('Preference'); // Navigate to ResumeScreen
  };

  // Handle resume upload
  const handleResumeUpload = async () => {
    try {
      const file = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.doc, DocumentPicker.types.docx],
      });
      setResumeFile(file); // Update state with the selected file
      Alert.alert('Resume Uploaded', `File: ${file.name}`);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
        console.log('User cancelled file picker');
      } else {
        console.error('Unknown Error: ', err);
      }
    }
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
          Additional info like Language Preferences, Resume, etc. {"\n"} helps us to filter relevant jobs for you. 
        </Text>
      </View>

      <View style={styles.qualificationContainer}>
        <Text style={styles.qualificationText}>English Proficiency </Text>
        <View style={styles.buttonGroup}>
          {["No English ", "Conversational English", "Standard English", "Professional English"].map((qualification) => (
            <TouchableOpacity
              key={qualification}
              style={[
                styles.qualificationButton,
                selectedQualification === qualification && styles.selectedButton,
              ]}
              onPress={() => setSelectedQualification(qualification)}
            >
              <Text style={styles.buttonText}>{qualification}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

  
       <View style={styles.locationContainer}>
        <Text style={styles.locationText}>Preferred Location</Text>
        <Text style={styles.option}>(Optional)</Text>
        
        <TextInput
          style={styles.locationInput}
          placeholder="Enter preferred location"
          value={preferredLocation}
          onChangeText={(text) => setPreferredLocation(text)}
        />
      </View>

       <View style={styles.locationContainer}>
        <Text style={styles.locationText}>Assets</Text>
        <Text style={styles.option1}>(Optional)</Text>
     
        <TextInput
          style={styles.locationInput}
          placeholder="Example: Aadhar"
          value={preferredLocation}
          onChangeText={(text) => setPreferredLocation(text)}
        />
      </View>

        <View style={styles.locationContainer}>
        <Text style={styles.locationText}>Language Known</Text>
        <Text style={styles.option2}>(Optional)</Text>
       
        <TextInput
          style={styles.locationInput}
          placeholder="Enter Language Known"
          value={preferredLocation}
          onChangeText={(text) => setPreferredLocation(text)}
        />
      </View>

      <View>
        <Text style={styles.resume}>Resume</Text>
        <Text style={styles.option3}>(Optional)</Text>
      </View>
      <View>
        <Text style={styles.hire}>Resume increases chances of hiring by 4x</Text>  
 
      </View>
     <View style={styles.progressItem}>
     <Image source={require("../assets/png.png")} style={styles.png1} />
          <Image source={require("../assets/rectangle.png")} style={styles.rectangle} />
          <TouchableOpacity onPress={handleResumeUpload}>
          <Text style={styles.pdf}>Upload Your Resume</Text>
          </TouchableOpacity>
          {resumeFile && <Text style={styles.docx}>Uploaded: {resumeFile.name}</Text>}
         <Text style={styles.docx}> Upload PDF or Docx</Text>
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

export default Preference1Screen;

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
    fontSize: 14,
    textAlign: 'center',
    color: 'rgba(40, 76, 141, 1)',
    bottom: 123,
    height: 55,
    fontWeight: '600'
  },
  qualificationText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(40, 76, 141, 1)',
    position: 'relative', 
    top: -95, 
    textAlign: 'center', 
    right: 88
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: -90,
  },
  qualificationButton: {
    backgroundColor: 'rgba(22, 145, 184, 0.4)',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    margin: 5,
    minWidth: '40%',
    alignItems: 'center',
    width: 175
  },
  selectedButton: {
    backgroundColor: 'rgba(22, 145, 184, 1)',
  },
  buttonText: {
    color: 'rgba(40, 76, 141, 1)',
    fontWeight: '500',
    fontSize: 12,
    fontWeight: '500'
  },
  locationContainer: {
    marginTop: 20,
    marginHorizontal: 35,
  },
  locationText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'black',
    marginBottom: 10,
    left: 8
  },
  option: {
    marginTop: -27,
    left: 113,
    fontSize: 12,
    marginBottom: 5
  },

  option1: {
    marginTop: -27,
    left: 50,
    fontSize: 12,
    marginBottom: 5
  },

  option2: {
    marginTop: -27,
    left: 105,
    fontSize: 12,
    marginBottom: 5
  },

  option2: {
    marginTop: -27,
    left: 105,
    fontSize: 12,
    marginBottom: 5
  },

  option3: {
    marginTop: -20,
    left: 95,
    fontSize: 12,
    marginBottom: 5
  },

  resume: {
 marginTop: 20,
 height: 20,
 fontSize: 13,
 fontWeight: '500',
 left: 43
  },

  hire: {
    left: 43,
    fontSize: 12,
    color: 'rgba(40, 76, 141, 1)',
    fontWeight: '500'
  },

  pdf: {
     marginTop: -48,
     left: 5,
     fontWeight: '500',
     fontSize: 14
  },

  docx: {
      fontSize: 11,
      fontWeight: '400',
      bottom: 27
  },

  png1: {
    right: 80,
    marginTop: 200
  },

  rectangle: {
    marginTop: -50,
  
  },

  locationInput: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 7,
    padding: 10,
    backgroundColor: 'rgba(22, 145, 184, 0.3)',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: -65,

  },

  backButton: {
    backgroundColor: 'rgba(22, 145, 184, 1)',
    paddingVertical: 4,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: -100,
    height: 40,
    left: 45
  },

  nextButton: {
    backgroundColor: 'rgba(22, 145, 184, 1)',
    paddingVertical: 4,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: -100,
    right: 45,
    height: 40

  },

  footerButtonText: {
    color: '#FFF',
    fontSize: 16,
    marginTop: 3
    },
  
});





