import {Pressable, PressableProps, StyleSheet, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {WHITE} from '../../styles/colors';

type CardProps = {
  children: ReactNode;
  viewStyle?: ViewStyle | Array<ViewStyle>;
} & PressableProps;

const Card = (props: CardProps) => {
  const {children, viewStyle} = props;
  return (
    <Pressable style={[styles.container, viewStyle]} {...props}>
      {children}
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    elevation: 5,
    borderRadius: 10,
  },
});
