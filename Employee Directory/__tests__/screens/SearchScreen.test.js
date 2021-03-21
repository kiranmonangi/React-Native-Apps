import React from 'react';
import renderer from 'react-test-renderer';
import SearchScreen from '../../src/screens/SearchScreen';
import 'react-native';

describe('<SearchScreen />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<SearchScreen />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});
