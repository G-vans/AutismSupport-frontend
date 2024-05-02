import { StyleSheet } from 'react-native';

const dynamicStyles = (appStyles, colorScheme) => {
  return StyleSheet.create({
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 25,
      color: 'white',
    },
    text: {
      fontSize: 18,
      textAlign: 'center',
      color: 'white',
      paddingLeft: 10,
      paddingRight: 10,
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 60,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: appStyles.colorSet[colorScheme].mainThemeForegroundColor,
    },
    button: {
      fontSize: 18,
      color: '#6666ff',
      marginTop: 10,
    },
    button2: {
      marginTop: 20,
      backgroundColor: '#ff9999',
      textAlign: 'center',
      paddingVertical: 12,
      paddingHorizontal: 120,
      borderRadius: 5,
      color: '#6666ff',
    },
  });
};

export default dynamicStyles;
