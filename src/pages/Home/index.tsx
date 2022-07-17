import {View} from 'react-native';
import React from 'react';
import NavBottom from '../../routes/NavBottom';
import globalStyles from '../../styles/globalStyles';

const Home = () => {
  return (
    <View style={globalStyles.displayFlex}>
      <NavBottom />
    </View>
  );
};

export default Home;
