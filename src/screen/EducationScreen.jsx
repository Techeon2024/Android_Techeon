import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const EducationScreen = ({ navigation, completedSteps = {}, markStepAsComplete }) => {
  const [selectedQualification, setSelectedQualification] = useState(null);

  // Define the handleBack function
  const handleBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  const handleNext = () => {
    if (selectedQualification) {
      if (typeof markStepAsComplete === 'function') {
      // Mark the education step as complete
      markStepAsComplete('education');
      }
      navigation.navigate('Experience');
    } else {
      alert("Please select your highest qualification");
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
            <AntDesign name="checkcircle" size={22} color="#3EC623" />
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
          Providing your education details can give employers a better understanding of your strengths as a candidate.
        </Text>
      </View>

      <View style={styles.qualificationContainer}>
        <Text style={styles.qualificationText}>What's your highest qualification?</Text>
        <View style={styles.buttonGroup}>
          {["Less than Tenth", "Tenth", "Twelfth & Above", "Graduate & Above"].map((qualification) => (
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

export default EducationScreen;

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
    fontWeight: '600',
  },
  qualificationText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(40, 76, 141, 1)',
    marginBottom: 30,
    position: 'relative',
    top: -60,
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: -60,
  },
  qualificationButton: {
    backgroundColor: 'rgba(22, 145, 184, 1)',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    margin: 5,
    minWidth: '40%',
    alignItems: 'center',
    width: 170,
  },
  selectedButton: {
    backgroundColor: 'rgba(22, 145, 184, 1)',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 15,
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
    marginTop: 325,
    left: 45,
  },
  nextButton: {
    backgroundColor: 'rgba(22, 145, 184, 1)',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 325,
    right: 45,
  },
  footerButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  // Your existing styles here
});
