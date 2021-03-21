import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#52a5f2',
  },
  itemRow: {
    borderBottomColor: 'red',
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  itemText: {
    color: 'black',
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',

  },
  itemTextTitle: {
    color: 'black',
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  itemTextTime: {
    color: 'black',
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '500',
    left: 70,
  },
  header: {
    backgroundColor: '#52a5f2',
    alignItems: 'center',

    height: 150,
  },
  headerText: {
    color: 'black',
    fontSize: 30,
    paddingTop: 70,
    fontWeight: 'bold',

  },
  button: {
    width: 410,
    marginTop: 20,
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    left: 6,
  },
  btnText: {
    color: '#d62dc5',
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },

});

export default styles;
