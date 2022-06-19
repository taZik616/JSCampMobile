import React from 'react'
import { View, StyleSheet } from 'react-native'
import { progressElementT } from './'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { s } from 'react-native-size-matters'
import { Text } from '../'
import { en_color, green } from '../../constants'
import ProgressCircle from 'react-native-progress-circle'

interface RenderCircleT {
  item: progressElementT
  index: number
  text: string
  circleColor: string
}

export const RenderCircle = ({ item, index, text, circleColor }: RenderCircleT) => {
  const isComplete = item === 'complete'
  return isComplete ? (
    <View style={[circle, { borderColor: text }]}>
      <MaterialIcon name="check" size={s(20)} color={green} />
    </View>
  ) : item.isStarted ? (
    <ProgressCircle
      percent={item.percents}
      radius={s(13)}
      borderWidth={s(1.5)}
      color={green}
      shadowColor={text}
      bgColor={circleColor}
    >
      <Text title={item.percents.toString()} h2 oneColor={text} />
    </ProgressCircle>
  ) : (
    <View style={[circle, { borderColor: text }]}>
      <MaterialIcon name="close" size={s(20)} color={text} />
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s(26),
    width: s(26),
    height: s(26),
    borderWidth: s(1)
  }
})
const { circle } = styles
