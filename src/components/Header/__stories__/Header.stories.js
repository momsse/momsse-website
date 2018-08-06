import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs/react'

import Header from '../index'

const stories = storiesOf('Header', module)

stories.add('default', () => (
  <Header siteTitle={text('siteTitle', 'Hello world')} />
));
