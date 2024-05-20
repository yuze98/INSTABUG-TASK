import {DefaultTheme} from '@react-navigation/native';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#121212', // Dark background color
  },
};

export default MyTheme;
