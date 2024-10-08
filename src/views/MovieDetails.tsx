import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {MovieDetailsStyles} from '../styles/MovieDetailsStyles';

/**
 * Description:
 * MovieDetails component displays detailed information about a specific movie.
 * It includes the movie title, description, release date, rating, popularity, and an option to watch the movie.
 *
 * Screen:
 * @param {Object} route - Navigation route containing the movie details.
 * @returns {JSX.Element} MovieDetails component.
 */

const MovieDetails = ({route}: {route: any}) => {
  const {item} = route.params;
  const {
    title,
    description,
    vote_average,
    vote_count,
    release_date,
    popularity,
    backdrop_path,
    imageUri,
  } = item;

  // redirects to the netflix website and could be enhanced to redirect
  // to the movie if there was a link provided
  const handleWatchNowPress = () => {
    Linking.openURL('https://www.netflix.com'); // Open Netflix website
  };

  return (
    <View style={MovieDetailsStyles.container}>
      <ImageBackground
        source={{uri: backdrop_path ?? imageUri}} // if the backdrop is not available then use the poster
        style={MovieDetailsStyles.imageBackground}
      />

      <View style={MovieDetailsStyles.overlay}>
        <View>
          <View style={MovieDetailsStyles.pad20}>
            <Text style={MovieDetailsStyles.title}>{title}</Text>
            <View style={MovieDetailsStyles.titleSubContainer}>
              <Text
                style={[MovieDetailsStyles.title, MovieDetailsStyles.titleSub]}>
                {release_date.split('-')[0]}
              </Text>
              <View>
                <Text
                  style={[
                    MovieDetailsStyles.title,
                    MovieDetailsStyles.titleSub,
                    MovieDetailsStyles.rate,
                  ]}>{`${vote_average.toPrecision(2)}`}</Text>
              </View>
            </View>
            <Text style={MovieDetailsStyles.description}>
              {description === '' ? 'No Description' : description}
            </Text>
            <View>
              <Text style={MovieDetailsStyles.detailItem}>
                Release Date: {release_date}
              </Text>
              <Text style={MovieDetailsStyles.detailItem}>
                Popularity: {parseInt(popularity, 10)}
              </Text>
              <Text style={MovieDetailsStyles.detailItem}>
                Ratinge: {vote_average.toPrecision(2)}
              </Text>
              <Text style={MovieDetailsStyles.detailItem}>
                Count: {vote_count}
              </Text>
            </View>
          </View>
        </View>
        <View style={MovieDetailsStyles.buttonContainer}>
          <TouchableOpacity
            style={MovieDetailsStyles.watchNowButton}
            onPress={handleWatchNowPress}>
            <Text style={MovieDetailsStyles.buttonText}>Watch Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MovieDetails;
