import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RoutesParam} from '../../routes/types';
import {BLACK, WHITE} from '../../styles/colors';
import globalStyles from '../../styles/globalStyles';
import {FocusAwareStatusBar, Spacer} from '../../components';
import {percentageWidth} from '../../services/utils/screen_size';

const SplashScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RoutesParam>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2500);
  }, []);

  const imageUrl =
    'https://2.bp.blogspot.com/-SCZVjygyQqQ/WPZJh9OE5UI/AAAAAAAAAc8/pC-tgM9mLW8M7NVyMMKas8Zr_ChPNggBwCLcB/s1600/logo_telkomsigma_trusted-IT-company_official1.png';

  return (
    <View
      style={[
        globalStyles.displayFlex,
        globalStyles.justifyCenter,
        globalStyles.alignCenter,
        {backgroundColor: WHITE},
      ]}>
      <FocusAwareStatusBar barStyle={'dark-content'} backgroundColor={WHITE} />
      <Image source={{uri: imageUrl}} style={styles.imageSize} />
      <Spacer height={15} />
      <Text style={{color: BLACK}}>Twin Edo Nugraha</Text>
      <Text style={{color: BLACK}}>2022</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  imageSize: {
    width: percentageWidth(80),
    height: percentageWidth(23),
    resizeMode: 'cover',
  },
});
