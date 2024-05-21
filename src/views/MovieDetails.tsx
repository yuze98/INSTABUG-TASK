import React, {useState} from 'react';
import {View, Text, ImageBackground, Animated} from 'react-native';
import {MovieDetailsStyles} from '../styles/MovieDetailsStyles';

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
      style={MovieDetailsStyles.container}>
      <ImageBackground
        source={{uri: imageUri}}
        style={MovieDetailsStyles.imageBackground}>
        <Animated.View
          style={[MovieDetailsStyles.overlay, {opacity: fadeAnim}]}>
          <Text style={MovieDetailsStyles.title}>{title}</Text>
          <Text style={MovieDetailsStyles.description}>{description}</Text>
          <View style={MovieDetailsStyles.details}>
            <Text style={MovieDetailsStyles.detailItem}>
              Release Date: {release_date}
            </Text>
            <Text style={MovieDetailsStyles.detailItem}>
              Popularity: {popularity}
            </Text>
            <Text style={MovieDetailsStyles.detailItem}>
              Vote Average: {vote_average}
            </Text>
            <Text style={MovieDetailsStyles.detailItem}>
              Vote Count: {vote_count}
            </Text>
          </View>
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

export default MovieDetails;
