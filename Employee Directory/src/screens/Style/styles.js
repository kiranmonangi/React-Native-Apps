/* eslint-disable linebreak-style */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 10,
  },
  searchView: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputView: {
    flex: 1,
    height: 40,
    backgroundColor: '#dfe4ea',
    paddingHorizontal: 10,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 18,
  },
  userCard: {
    backgroundColor: '#fafafa',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 10,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  superiorUserCard: {
    backgroundColor: '#fafafa',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  userCardRight: {
    paddingHorizontal: 10,
  },
  messageBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageBoxText: {
    fontSize: 20,
    fontWeight: '500',
  },
  contactUserImage: {
    top: 50,
    width: 115,
    height: 115,
    borderRadius: 100,
  },
  nameTextStyle: {
    fontSize: 25,
    fontWeight: '800',
    top: 10,
  },
  titleTextStyle: {
    fontSize: 20,
    top: 3,
    opacity: 0.3,
  },
  conactUser: {
    top: 5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    top: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  contactScroll: {
    top: 50,
  },
  searchScroll: {
    top: 10,
  },
  superior: {
    left: 180,
    top: 15,
    opacity: 0.6,
  },
});
export default styles;
