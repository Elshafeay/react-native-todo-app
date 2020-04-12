/* eslint-disable react/prop-types */
import React from 'react'
import { Text, View, TextInput } from 'react-native'
import styles from '../assets/styles'
import { SimpleLineIcons } from '@expo/vector-icons'

export default function Header (props) {
  return (
    <React.Fragment>
      <View>
        <Text style={styles.headerText}>ToDo App</Text>
      </View>
      <View style={styles.inputBar}>
        <TextInput
          style={styles.taskInput}
          onChangeText={text => props.handleTyping(text)}
          value={props.newTask}
          placeholder="Enter Your New Task..."
        />
        <SimpleLineIcons
          name="plus"
          size={35}
          color="orange"
          onPress={props.handleAdding}
        ></SimpleLineIcons>
      </View>
      <Text style={styles.error}>{props.errorMSG}</Text>
    </React.Fragment>
  )
}
