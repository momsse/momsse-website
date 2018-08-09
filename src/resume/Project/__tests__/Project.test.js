import React from 'react'
import renderer from 'react-test-renderer'

import technologies from '../../../core/enums/technologies'
import Project from '../index'

describe('<Project />', () => {
  it('should render successfully', () => {
    const tree = renderer
      .create(
        <Project
          title="Sauron (real time driver and booking manager)"
          abstract="initialization de la stack et developpement de la web app de gestion de la flotte chauffeurs."
          technologies={[
            technologies.Javascript,
            technologies.NodeJS,
            technologies.ReactJS,
            technologies.Webpack,
            technologies.Bootstrap,
            technologies.SocketIO,
            technologies.IndexedDB,
            technologies.MongoDB,
          ]}
        />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
