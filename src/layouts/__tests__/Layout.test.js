import React from 'react'
import renderer from 'react-test-renderer'

import gatsbyConfig from '../../../gatsby-config'
import Layout from '../index'

describe('<Layout />', () => {
  const Hello = () => <h1>Hello</h1>

  it('should render successfully', () => {
    const tree = renderer
      .create(<Layout data={{ site: gatsbyConfig }} children={Hello} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
