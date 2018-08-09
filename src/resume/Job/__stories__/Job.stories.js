import React from 'react'
import styled from 'styled-components';
import { storiesOf } from '@storybook/react'
import { text, date, array } from '@storybook/addon-knobs/react'

import Job from '../index'
import Project from '../../Project'
import technologies from '../../../core/enums/technologies'

const stories = storiesOf('Job', module)

const Container = styled.div`
  padding: 2rem;
`;

stories.add('default', () => (
  <Container>
    <Job
      enterprise={text('enterprise', 'Chauffeur privé')}
      position={text('position', 'Software engineer')}
      startDate={date('start date', new Date('Nov 01 2015'))}
    >
      Hello
    </Job>
  </Container>
));

stories.add('with some projects', () => (
  <Container>
    <Job
      enterprise={text('enterprise', 'Chauffeur privé')}
      position={text('position', 'Software engineer')}
      startDate={date('start date', new Date('Nov 01 2015'))}
      endDate={date('end date', new Date('Oct 15 2018'))}
    >
      <Project
        title={text('title', 'Sauron (real time driver and booking manager) ')}
        abstract={text(
          'abstract',
          'initialization de la stack et developpement de la web app de gestion de la flotte chauffeurs.',
        )}
        technologies={array('technologies', [
          technologies.Javascript,
          technologies.NodeJS,
          technologies.ReactJS,
          technologies.Webpack,
          technologies.Bootstrap,
          technologies.SocketIO,
          technologies.IndexedDB,
          technologies.MongoDB,
        ])}
      />
    </Job>
  </Container>
));
