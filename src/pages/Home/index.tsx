import {View} from 'react-native';
import React from 'react';
import NavBottom from '../../routes/NavBottom';
import globalStyles from '../../styles/globalStyles';
import {FocusAwareStatusBar} from '../../components';
import {WHITE} from '../../styles/colors';

const Home = () => {
  return (
    <View style={globalStyles.displayFlex}>
      <FocusAwareStatusBar barStyle={'dark-content'} backgroundColor={WHITE} />
      <NavBottom />
    </View>
  );
};

export default Home;
