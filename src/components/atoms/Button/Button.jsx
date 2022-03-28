import React from 'react';
import { Button as PaperButton } from 'react-native-paper';
import styles from './styles';
import { string, shape } from 'prop-types';
const Button = (props) => {
  const { mode, style, ...rest } = props;
  return (
    <PaperButton style={[styles.button, style]} labelStyle={styles.text} mode={mode} {...rest} />
  );
};
Button.propTypes = {
  style: shape().isRequired,
  mode: string.isRequired,
};
export default Button;
