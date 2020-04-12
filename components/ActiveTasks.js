import React from 'react'
import Task from './Task'

export default function ActiveTasks (props) {
  return (
    props.tasks.map(task => (
      <Task
        key={task.name}
        toggle={props.toggleCheckbox}
        task={task}>
      </Task>
    ))
  )
}
