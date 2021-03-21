import React from 'react';
import {
  View,
} from 'react-native';
import {
  Header, Input, Button, Icon,
} from 'react-native-elements';
import styles from './styles/styles';

const UserDetails = (props) => {
  const Customers = props.navigation.getParam('Passengers', 'no-Passengers');
  const Departurecost = props.navigation.getParam('Departurecost', 'no-Departurecost');
  const Returncost = props.navigation.getParam('Returncost', 'no-Returncost');
  const TotalCost = Departurecost + Returncost;
  const Source = props.navigation.getParam('Source', 'no-source');
  const Destination = props.navigation.getParam('Destination', 'no-destination');
  const name = [];
  const names = [];
  for (let index = 0; index < Customers; index += 1) {
    name.push(
      <Input
        key={index}
        disabledInputStyle={{ background: '#ddd' }}
        label="Passenger *"
        leftIcon={<Icon name="face" size={20} />}
        onChangeText={(names[index])}
        value={names[index]}
        placeholder="Enter Passenger Name"
      />,
    );
  }
  return (
    <View style={{ bottom: 45 }}>
      <Header
        centerComponent={{
          text: 'Happy Jouney',
          style: { color: '#fff', fontSize: 25 },
        }}
        style={styles.header}
      />
      {name}
      <Button
        buttonStyle={{ width: 150 }}
        containerStyle={{ margin: 5, left: 250 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: '#00F',
        }}
        disabledTitleStyle={{ color: '#00F' }}
        loadingProps={{ animating: true }}
        onPress={() => props.navigation.navigate('Book', {
          TotalCost, Source, Destination, names,
        })}
        title="Pay and Submit"
        titleStyle={{ marginHorizontal: 5 }}
      />

    </View>
  );
};
export default UserDetails;
