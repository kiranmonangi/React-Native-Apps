import React from 'react';
import renderer from 'react-test-renderer';

import HomeScreen from '../../src/screens/HomeScreen';
import 'react-native';

it('renders correctly', () => {
  renderer.create(<HomeScreen />);
});
