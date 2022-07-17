import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RoutesParam} from '../../routes/types';
import {BLACK} from '../../styles/colors';

const SplashScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RoutesParam>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2500);
  }, []);

  return (
    <View>
      <Text style={{color: BLACK}}>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
