import React from "react";
import { View, Image, Text, useColorScheme, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import AppIntroSlider from "react-native-app-intro-slider";
import LoginScreen from "../LoginScreen";
import { useNavigation } from '@react-navigation/native';
import dynamicStyles from "./styles";

const WalkthroughScreen = ({ appConfig, appStyles }) => {

  const navigation = useNavigation();
  // const { appConfig, appStyles, navigation } = props;
  const colorScheme = useColorScheme();
  const styles = dynamicStyles(appStyles, colorScheme);

  const handleNavigateToLogin = () => {
    navigation.navigate('WelcomeScreen');
  };

  const slides = appConfig.onboardingConfig.walkthroughScreens.map(
    (screenSpec, index) => {
      return {
        key: `${index}`,
        text: screenSpec.description,
        title: screenSpec.title,
        image: screenSpec.icon,
      };
    }
  );

  const _renderItem = ({ item, dimensions, navigation }) => (
    <View style={[styles.container, dimensions, navigation]}>
      <Image
        style={styles.image}
        source={item.image}
        size={100}
        color="white"
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
        <TouchableOpacity
        style={styles.button2}
        onPress={handleNavigateToLogin}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <AppIntroSlider
      data={slides}
      slides={slides}
      renderItem={_renderItem}
      //Handler for the done On last slide
      showSkipButton={false}
      showDoneButton={false}
      showNextButton={false}
    />
  );
};

WalkthroughScreen.propTypes = {
  appStyles: PropTypes.object,
  appConfig: PropTypes.object,
  navigation: PropTypes.object,
};

export default WalkthroughScreen;
