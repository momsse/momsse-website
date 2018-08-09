import React from 'react'
import styled from 'styled-components';
import { storiesOf } from '@storybook/react'

import Resume from '../index'

const stories = storiesOf('Resume', module)

const Container = styled.div`
  padding: 2rem;
`;

stories.add('default', () => (
  <Container>
    <Resume />
  </Container>
));
