import { ColorValue, Text, View } from 'react-native'

import { THEME } from '../../theme'
import styles from './styles'

interface DuoInfoProps {
  label: string
  value: string
  colorValue?: ColorValue
}

export default function DuoInfo({ label, value, colorValue = THEME.COLORS.TEXT }: DuoInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>

      <Text
        style={[styles.value, {color: colorValue}]}
        numberOfLines={1}
      >
        {value}
      </Text>
    </View>
  )
}