import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Movie} from '../utils/types';
import React from 'react';
import {PosterStyles} from '../styles/PosterStyles';
/**
 * Description:
 * Poster component represents a customizable movie poster with the title of the movie.
 * It displays an image of the movie poster along with the title.
 * Tapping on the poster navigates to the movie details screen.
 *
 * Component:
 * @param {Movie} item - The movie object containing information like title and image URI.
 * @param {any} navigation - Navigation object for navigating to the movie details screen.
 * @returns {JSX.Element} Poster component.
 */
const Poster = (item: Movie, navigation: any) => {
  return (
    <View style={PosterStyles.item}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('MovieDetails', {
            item: item,
          })
        }>
        <Image source={{uri: item.imageUri}} style={PosterStyles.image} />
      </TouchableOpacity>
      <Text style={PosterStyles.title}>{item.title}</Text>
    </View>
  );
};
export default Poster;
