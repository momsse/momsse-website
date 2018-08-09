import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { text, date, array } from '@storybook/addon-knobs/react'

import technologies from '../../../core/enums/technologies'
import Project from '../index'

const stories = storiesOf('Project', module)

const Container = styled.div`
  padding: 2rem;
`

stories.add('default', () => (
  <Container>
    <Project
      title={text('title', 'Sauron (real time driver and booking manager) ')}
      abstract={text(
        'abstract',
        'initialization de la stack et developpement de la web app de gestion de la flotte chauffeurs.'
      )}
      technologies={array('technologies', [
        technologies.Javascript,
        technologies.NodeJS,
        technologies.Webpack,
        technologies.ReactJS,
        technologies.Bootstrap,
        technologies.SocketIO,
        technologies.IndexedDB,
        technologies.MongoDB,
      ])}
    />
  </Container>
))
