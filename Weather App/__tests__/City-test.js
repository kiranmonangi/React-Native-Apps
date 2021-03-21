import React from 'react';
import City from '../src/screens/City';
import renderer from 'react-test-renderer';

describe('<City />', () => {
    it('has 4 children', () => {
      const tree = renderer.create(<City />).toJSON();
      expect(tree.children.length).toBe(4);
    });
  });
