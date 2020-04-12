import React from 'react'
import { View } from 'react-native'
import AllTasks from '../components/AllTasks'
import DoneTasks from '../components/DoneTasks'
import ActiveTasks from '../components/ActiveTasks'
import styles from '../assets/styles'

export default function TasksContainer (props) {
  return (
    <View style={styles.tasks}>
      {
        (props.current === 'all')
          ? <AllTasks tasks={props.all} toggleCheckbox={props.toggleCheckbox}></AllTasks>
          : (props.current === 'active')
            ? <ActiveTasks tasks={props.active} toggleCheckbox={props.toggleCheckbox}></ActiveTasks>
            : <DoneTasks tasks={props.done} toggleCheckbox={props.toggleCheckbox}></DoneTasks>
      }
    </View>
  )
}
