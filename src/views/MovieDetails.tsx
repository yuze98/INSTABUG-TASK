import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import {MovieDetailsStyles} from '../styles/MovieDetailsStyles';

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
        <Text style={MovieDetailsStyles.title}>{title}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={[MovieDetailsStyles.title, MovieDetailsStyles.titleSub]}>
            {release_date.split('-')[0]}
          </Text>
          <View>
            <Text
              style={[
                MovieDetailsStyles.title,
                MovieDetailsStyles.titleSub,
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
            Popularity: {popularity}
          </Text>
          <Text style={MovieDetailsStyles.detailItem}>
            Vote Average: {vote_average}
          </Text>
          <Text style={MovieDetailsStyles.detailItem}>
            Vote Count: {vote_count}
          </Text>
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
