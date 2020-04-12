import React from 'react'
import { View } from 'react-native'
import Header from './components/Header'
import Buttons from './components/Buttons'
import TasksContainer from './components/TasksContainer'
import styles from './assets/styles'
import AllTasks from './components/AllTasks'

export default function App () {
  const [all, setAll] = React.useState([])
  const [done, setDone] = React.useState([])
  const [active, setActive] = React.useState([])
  const [newTask, setNewTask] = React.useState('')

  const [current, setCurrent] = React.useState('all')
  const [errorMSG, setErrorMSG] = React.useState('')

  const showAll = () => {
    setCurrent('all')
    setErrorMSG('')
  }
  const showActive = () => {
    setCurrent('active')
    setErrorMSG('')
  }
  const showDone = () => {
    setCurrent('done')
    setErrorMSG('')
  }

  const toggleCheckbox = (task) => {
    if (task.isDone) {
      setDone(done.filter(t => (t.name !== task.name)))
      task.isDone = false
      setActive(active.concat(task))
    } else {
      setActive(active.filter(t => (t.name !== task.name)))
      task.isDone = true
      setDone(done.concat(task))
    }
    setErrorMSG('')
  }

  const addTask = (task) => {
    if (all.find((t, index) => {
      if (t.name === task.name) {
        return true
      } else {
        return false
      }
    })) {
      setErrorMSG('This task already exist!')
    } else if (task.name === '') {
      setErrorMSG("Title can't be empty!")
    } else {
      setNewTask('')
      setErrorMSG('')
      setAll(all.concat(task))
      setActive(active.concat(task))
    }
  }

  const handleAdding = (e) => {
    const task = { name: newTask, isDone: false }
    addTask(task)
  }

  const handleTyping = (text) => {
    setNewTask(text)
  }

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Header
          handleAdding={handleAdding}
          handleTyping={handleTyping}
          newTask={newTask}
          errorMSG={errorMSG}
        ></Header>
        <Buttons
          showAll={showAll}
          showActive={showActive}
          showDone={showDone}
        ></Buttons>
        <TasksContainer
          current={current}
          all={all}
          active={active}
          done={done}
          toggleCheckbox={toggleCheckbox}
        ></TasksContainer>
      </View>
    </View>
  )
}
