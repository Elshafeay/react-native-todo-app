/* eslint-disable react/prop-types */
import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from '../assets/styles'

export default function Buttons (props) {
  return (
    <View style={styles.headerBtns}>
      <TouchableOpacity onPress={props.showAll}>
        <View
          style={styles.Btn}
        ><Text style={styles.btnText}>All</Text></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.showActive}>
        <View
          style={styles.Btn}
        ><Text style={styles.btnText}>Active</Text></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.showDone}>
        <View
          style={styles.Btn}
        ><Text style={styles.btnText}>Done</Text></View>
      </TouchableOpacity>
    </View>
  )
}
