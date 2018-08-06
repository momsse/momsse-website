import React from 'react'
import renderer from 'react-test-renderer'

import Header from '../index';

describe('components/<Header />', () => {
  it('should render successfully', () => {
    const tree = renderer.create(<Header siteTitle="Hello" />).toJSON()

    expect(tree).toMatchSnapshot()
  });
})
