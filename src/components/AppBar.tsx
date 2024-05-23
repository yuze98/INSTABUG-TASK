import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AppBarStyles} from '../styles/AppBarStyles';
const AppBar: React.FC = () => {
  const navigation = useNavigation();
  const [canGoBack, setCanGoBack] = useState(navigation.canGoBack());
  const handleBackPress = () => {
    navigation.goBack();
  };
  useEffect(() => {
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
