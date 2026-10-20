import { View, StyleSheet } from 'react-native';
import colors from '../styles/colors';


export default function BrandMark({ size = 54, inverted = false }) {
  const ratio = size / 54;
  return (
    <View
      accessible
      accessibilityLabel="Símbolo do FatecVerde"
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size * 0.34,
          backgroundColor: inverted ? colors.secondary : colors.primary,
        },
      ]}
    >
      <View
        style={[
          styles.leaf,
          {
            width: 14 * ratio,
            height: 29 * ratio,
            borderRadius: 15 * ratio,
            left: 14 * ratio,
            top: 12 * ratio,
            backgroundColor: inverted ? colors.primary : colors.secondary,
          },
        ]}
      />
      <View
        style={[
          styles.leaf,
          {
            width: 14 * ratio,
            height: 28 * ratio,
            borderRadius: 15 * ratio,
            left: 27 * ratio,
            top: 15 * ratio,
            transform: [{ rotate: '45deg' }],
            backgroundColor: inverted ? colors.primary : '#B6CC91',
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    position: 'relative',
  },
  leaf: {
    position: 'absolute',
    transform: [{ rotate: '-42deg' }],
  },
});
