import React, {useState} from 'react';
import {View, Text, ImageBackground, StyleSheet, Animated} from 'react-native';

const MovieDetails = ({route}: {route: any}) => {
  const {item} = route.params;
  const {
    title,
    description,
    imageUri,
    vote_average,
    vote_count,
    release_date,
    popularity,
  } = item;
  const [touchY, setTouchY] = useState(0);

  const fadeAnim = useState(new Animated.Value(1))[0];

  const handleTouchStart = (e: {nativeEvent: {pageY: number}}) => {
    setTouchY(e.nativeEvent.pageY);
  };

  const handleTouchEnd = (e: {nativeEvent: {pageY: number}}) => {
    const deltaY = touchY - e.nativeEvent.pageY;
    if (deltaY < 20) {
      console.log('Swiped up');
      Animated.timing(
        fadeAnim, // The value to drive
        {
          toValue: 0, // Target value
          duration: 500, // Duration of the animation
          useNativeDriver: true, // Use the native driver for performance
        },
      ).start(); // Start the animation
    } else if (deltaY > -20) {
      console.log('Swiped down');
      Animated.timing(
        fadeAnim, // The value to drive
        {
          toValue: 1, // Target value
          duration: 500, // Duration of the animation
          useNativeDriver: true, // Use the native driver for performance
        },
      ).start(); // Start the animation
    }
  };

  return (
    <View
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={styles.container}>
      <ImageBackground source={{uri: imageUri}} style={styles.imageBackground}>
        <Animated.View style={[styles.overlay, {opacity: fadeAnim}]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.details}>
            <Text style={styles.detailItem}>Release Date: {release_date}</Text>
            <Text style={styles.detailItem}>Popularity: {popularity}</Text>
            <Text style={styles.detailItem}>Vote Average: {vote_average}</Text>
            <Text style={styles.detailItem}>Vote Count: {vote_count}</Text>
          </View>
        </Animated.View>
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

export default MovieDetails;
