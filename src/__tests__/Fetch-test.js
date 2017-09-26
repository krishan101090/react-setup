import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import InfoHeader from '../InfoHeader';

describe('InfoHeader (Snapshot)', () => {
  it('Welcome renders hello world', () => {
    const component = renderer.create(<InfoHeader />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});

