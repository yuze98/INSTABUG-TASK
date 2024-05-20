import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

const MovieDetails = ({route}) => {
  const {title, description, imageUri} = route.params;

  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: imageUri}} style={styles.imageBackground}>
        <View style={styles.overlay}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
});

export default MovieDetails;
