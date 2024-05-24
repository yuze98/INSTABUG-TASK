import {DefaultTheme} from '@react-navigation/native';

// Adding custom theme for scalabilty and for future updates
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#121212', // Dark background color
  },
};

export default MyTheme;
