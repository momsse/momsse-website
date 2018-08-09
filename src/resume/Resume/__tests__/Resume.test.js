import React from 'react'
import renderer from 'react-test-renderer'
import Resume from '../index'

describe('<Resume />', () => {
  it('should render successfully', () => {
    const tree = renderer.create(<Resume />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
