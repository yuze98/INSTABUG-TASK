import {StyleSheet} from 'react-native';

export const MovieDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  imageBackground: {
    flex: 1,
    height: '85%',
    width: '100%',
    justifyContent: 'center',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent overlay
    padding: 20,
    justifyContent: 'flex-end', // align content at the bottom
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  titleSub: {
    fontSize: 24,
  },
  description: {
    fontSize: 16,
    color: 'white',
    marginBottom: '5%',
  },

  detailItem: {
    fontSize: 14,
    color: 'white',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  watchNowButton: {
    backgroundColor: '#4444FFaa',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
