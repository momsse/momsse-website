import React from 'react'
import renderer from 'react-test-renderer'
import Job from '../index'

describe('<Job />', () => {
  it('should render successfully', () => {
    const tree = renderer
      .create(
        <Job
          enterprise="Chauffeur privé"
          position="Software engineer"
          startDate={new Date('Nov 01 2015')}
        >
          Hello
        </Job>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
