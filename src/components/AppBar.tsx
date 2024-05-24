import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppBarStyles} from '../styles/AppBarStyles';
/**
 * Description:
 * AppBar component represents a customizable app bar typically positioned at the top of a screen in the Movie app.
 * It provides navigation controls such as a back button and additional action buttons.
 * The rest of the action buttons are just for show, they do not do any functions
 * Component:
 * @returns {JSX.Element} AppBar component.
 */
const AppBar: React.FC = () => {
  const navigation = useNavigation();
  const [canGoBack, setCanGoBack] = useState(navigation.canGoBack());
  const handleBackPress = () => {
    navigation.goBack();
  };
  useEffect(() => {
    // boolean to check if the back button should be visible or not
    setCanGoBack(navigation.canGoBack());
  }, [setCanGoBack, navigation]);
  return (
    <View style={AppBarStyles.container}>
      {canGoBack ? (
        <TouchableOpacity onPress={handleBackPress} style={AppBarStyles.button}>
          <Text style={AppBarStyles.buttonText}>Back</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => {}} style={AppBarStyles.button}>
          <Text style={AppBarStyles.buttonText}>Movies</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={() => {}} style={AppBarStyles.button}>
        <Text style={AppBarStyles.buttonText}>
          {canGoBack ? 'Watch Trailer' : 'Profile'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AppBar;
