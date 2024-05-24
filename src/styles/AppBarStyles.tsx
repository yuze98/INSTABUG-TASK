import {StyleSheet} from 'react-native';

export const AppBarStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 70,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#060606',
    opacity: 0.8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
  },
});
