import {StyleSheet} from 'react-native';

export const MovieDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent overlay
    padding: 20,
    justifyContent: 'flex-end', // align content at the bottom
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'white',
    marginBottom: '10%',
  },
  details: {
    marginTop: 10,
  },
  detailItem: {
    fontSize: 14,
    color: 'white',
  },
});
