import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PRIMARY, BLACK, WHITE} from 'styles/colors';
import {Spacer} from 'components';
import globalStyles from 'styles/globalStyles';
import {Health, Tech} from '../../pages';

const Tab = createBottomTabNavigator();

const TabBar = ({state, descriptors, navigation}: any) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.barStyle}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={Math.random().toString()}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarStyle}>
            <Spacer height={5} />
            <Text
              style={[
                globalStyles.headingBold.h3,
                {color: isFocused ? PRIMARY : BLACK},
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export type NavBottomParams = {
  Tech: any;
  Health: undefined;
};

const NavBottom = () => {
  const {Navigator, Screen} = Tab;
  return (
    <Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Tech"
      tabBar={props => <TabBar {...props} />}>
      <Screen name="Tech" component={Tech} options={{tabBarLabel: 'Tech'}} />
      <Screen
        name="Health"
        component={Health}
        options={{tabBarLabel: 'Health'}}
      />
    </Navigator>
  );
};

export default NavBottom;

const styles = StyleSheet.create({
  barStyle: {
    flexDirection: 'row',
    backgroundColor: WHITE,
    elevation: 10,
    borderTopWidth: 0.2,
    borderTopColor: '#e5e5e5',
    paddingVertical: 8,
  },
  tabBarStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
