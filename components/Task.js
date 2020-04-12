import React from 'react'
import { Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styles from '../assets/styles'

export default function Task (props) {
  return (
    <MaterialCommunityIcons name = {(props.task.isDone) ? 'checkbox-marked-outline' : 'checkbox-blank-outline'} size={30}
      onPress={() => props.toggle(props.task)}>
      <Text
        style={styles.task}
        ellipsizeMode='middle'
        numberOfLines={1}
      >{props.task.name}</Text>
    </MaterialCommunityIcons>
  )
}
