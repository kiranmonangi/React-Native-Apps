import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './Style/styles';
import Contacts from '../../Contacts.json';

const ContactScreen = (props) => {
  const FirstName = props.navigation.getParam('firstName', 'no-firstName');
  const LastName = props.navigation.getParam('lastName', 'no-lastName');
  const picture = props.navigation.getParam('picture', 'no-pic');
  const Title = props.navigation.getParam('title', 'no-Title');
  const Number = props.navigation.getParam('phone', 'no-phoneNumber');
  const Email = props.navigation.getParam('email', 'no-emailId');
  const Id = props.navigation.getParam('id', 'no-id');
  const manager = props.navigation.getParam('managerName', 'no-managerName');
  const [data, setData] = useState([]);
  const [superior, setSuperior] = useState([]);

  const checking = () => {
    setData(Contacts.filter(((contact) => (contact.managerid === Id))));
    setSuperior(Contacts.filter((contact) => (contact.firstName === manager)));
  };
  return (
    <View onLayout={checking}>
      <View style={styles.superior}>
        {superior.map((user) => (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Contact', user);
            }}
          >
            <Image
              style={styles.userImage}
              source={{ uri: user.picture }}
            />
            <View>
              <Text
                style={{
                  fontSize: 18, fontWeight: '500', opacity: 0.5, right: 15,
                }}
              >
                {`${user.firstName} ${user.lastName}`}
              </Text>
              <Text style={{ opacity: 0.2 }}>{`${user.title}`}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        <View style={styles.conactUser}>
          <Image
            style={styles.contactUserImage}
            source={{ uri: picture }}
          />
          <Text />
          <Text />
          <Text style={styles.nameTextStyle}>
            { FirstName}
            {LastName}
          </Text>
          <Text style={styles.titleTextStyle}>{Title}</Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => { Linking.openURL(`tel:${Number}`); }}>
            <Icon
              raised
              name="call"
              type="ionicon"
              color="#517fa4"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { Linking.openURL(`mailto:${Email}`); }}>
            <Icon
              raised
              name="mail"
              type="ionicon"
              color="#517fa4"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { Linking.openURL(`sms:${Number}`); }}>
            <Icon
              raised
              name="chatbox-sharp"
              type="ionicon"
              color="#517fa4"
            />
          </TouchableOpacity>
        </View>
        <View>
          <ScrollView style={styles.contactScroll}>
            {data.map((user) => (
              <TouchableOpacity
                style={styles.userCard}
                onPress={() => {
                  props.navigation.navigate('Contact', user);
                }}
              >
                <Image
                  style={styles.userImage}
                  source={{ uri: user.picture }}
                />
                <View style={styles.userCardRight}>
                  <Text
                    style={{ fontSize: 18, fontWeight: '500' }}
                  >
                    {`${user.firstName} ${user.lastName}`}
                  </Text>
                  <Text>{`${user.title}`}</Text>
                </View>
              </TouchableOpacity>
            ))}

            <View style={{ height: 50 }} />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
export default ContactScreen;
