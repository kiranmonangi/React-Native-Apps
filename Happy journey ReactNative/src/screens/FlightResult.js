/* eslint-disable import/no-unresolved */
import React, { useState, useRef } from 'react';
import {
  Text, View, TouchableOpacity,
} from 'react-native';
import { Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CardFlip from 'react-native-card-flip';
import flightsdata from '../../Flights.json';
import styles from './styles/styles';

const FlightResult = (props) => {
  const flipcard = useRef();
  const flipcard2 = useRef();
  const Source = props.navigation.getParam('source', 'no-source');
  const Destination = props.navigation.getParam('destination', 'no-destination');
  const Passengers = props.navigation.getParam('passengers', 'no-passengers');
  const [airline, setAirline] = useState('');
  const [cost, setCost] = useState('');
  const [, setplane] = useState('');
  const [airlined, setAirlined] = useState('');
  const [costd, setCostd] = useState('');
  const Departurecost = cost * Passengers;
  const Returncost = costd * Passengers;

  const SearchByData = () => {
    try {
      const sourceFlights = flightsdata.filter(
        ((flight) => (flight.source === Source)
                                             && (flight.destination === Destination)
                                             && (flight.seats >= Passengers)),
      );

      setAirline(sourceFlights[0].airline);
      setCost(sourceFlights[0].cost);
      setplane(sourceFlights[0].img);

      const destinationFlights = flightsdata.filter(
        ((flight) => (flight.source === Destination)

                                                && (flight.destination === Source)
                                                && (flight.seats >= Passengers)),
      );

      setAirlined(destinationFlights[0].airline);
      setCostd(destinationFlights[0].cost);
    } catch (error) {
      props.navigation.navigate('Home');
      alert('sorry for the inconvenience....please provide another inputs...');
    }
  };

  return (
    <View style={{ bottom: 45 }} onLayout={SearchByData}>
      <Header
        centerComponent={{
          text: 'Happy - Jouney',
          style: { color: '#fff', fontSize: 25 },
        }}
        style={styles.header}
      />
      <Text />
      <Text />
      <CardFlip ref={flipcard} style={{ width: 250, height: 300 }}>
        <TouchableOpacity
          style={{
            width: '170%',
            height: 300,
            backgroundColor: 'rgb(134,147,158)',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 30,
            borderRadius: 10,

          }}
          onPress={() => flipcard.current.flip()}
        >
          <View>

            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
              {Source}
              {' '}
              To
              {' '}
              {Destination}
            </Text>
            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
              {airline}
              {' '}
              AirLines
            </Text>
            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
              Cost of the ticket  &#8377;
              {cost}
            </Text>
            <Text />

          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '170%',
            height: 300,
            backgroundColor: 'rgb(134,147,158)',
            paddingHorizontal: 30,
            borderRadius: 10,
          }}
          onPress={() => flipcard.current.flip()}
        >
          <Text
            style={{
              textAlign: 'center', color: 'white', fontSize: 30, fontWeight: 'bold', top: 100,
            }}
          >
            You have to pay &#8377;
            {Departurecost}
            {' '}
            for
            {' '}
            {Passengers}
            {' '}
            Passengers
          </Text>
        </TouchableOpacity>
      </CardFlip>
      <Text />
      <Text />
      <Text />

      <CardFlip ref={flipcard2} style={styles.flipcard2}>

        <TouchableOpacity
          style={{
            width: '170%',
            height: 300,
            backgroundColor: 'rgb(134,147,158)',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 30,
            borderRadius: 10,
          }}
          onPress={() => flipcard2.current.flip()}
        >
          <View>
            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
              {Destination}
              {' '}
              To
              {' '}
              {Source}
            </Text>
            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
              {airlined}
              {' '}
              AirLines
            </Text>
            <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
              Cost of the ticket  &#8377;
              {costd}
            </Text>
            <Text />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '170%',
            height: 300,
            backgroundColor: 'rgb(134,147,158)',
            paddingHorizontal: 30,
            borderRadius: 10,
          }}
          onPress={() => flipcard2.current.flip()}
        >
          <Text
            style={{
              textAlign: 'center', color: 'white', fontSize: 30, fontWeight: 'bold', top: 100,
            }}
          >
            You have to pay &#8377;
            {Returncost}
            {' '}
            for
            {' '}
            {Passengers}
            {' '}
            Passengers
          </Text>
        </TouchableOpacity>
      </CardFlip>

      <Button
        buttonStyle={{ width: 150 }}
        containerStyle={{ margin: 5, left: 250 }}
        disabledStyle={{
          borderWidth: 2,
          borderColor: '#00F',
        }}
        disabledTitleStyle={{ color: '#00F' }}
        icon={<Icon name="airplane-takeoff" size={15} color="#0FF" />}
        iconContainerStyle={{ background: '#000' }}
        loadingProps={{ animating: true }}
        onPress={() => props.navigation.navigate('Details', {
          Passengers, Departurecost, Returncost, Source, Destination,
        })}
        title="Continue"
        titleStyle={{ marginHorizontal: 5 }}
      />
    </View>
  );
};
export default FlightResult;
