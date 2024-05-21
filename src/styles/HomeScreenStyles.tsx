import {StyleSheet} from 'react-native';

export const HomeScreenStyles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  header: {
    fontSize: 24,
    color: '#bbbbbb',
  },
  item: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 175,
    height: 250,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#cccccc',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});
