import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Welcome from '../Welcome';

describe('Welcome (Snapshot)', () => {
  it('Welcome renders hello world', () => {
    const component = renderer.create(<Welcome />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});