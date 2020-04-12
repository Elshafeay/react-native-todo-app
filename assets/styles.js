import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#4a0573',
    height: '100%'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Btn: {
    backgroundColor: 'orange',
    borderRadius: 20,
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  btnText: {
    fontSize: 25,
    color: 'black'
  },
  headerBtns: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'orange',
    marginVertical: 25
  },
  tasks: {
    marginTop: 30,
    marginRight: 20
  },
  task: {
    color: 'white',
    fontSize: 25,
    marginLeft: 5
  },
  taskInput: {
    width: 250,
    height: 40,
    borderRadius: 30,
    fontSize: 20,
    backgroundColor: 'white',
    marginBottom: 10,
    marginRight: 10,
    paddingLeft: 10
  },
  inputBar: {
    display: 'flex',
    flexDirection: 'row'
  },
  error: {
    color: '#ff6257',
    fontSize: 20
  }
})

export default styles
