import React from 'react'
import { storiesOf } from '@storybook/react'

import gatsbyConfig from '../../../gatsby-config';
import Layout from '../index'

const stories = storiesOf('Layout', module)

const Hello = () => <h1>Hello</h1>;

stories.add('default', () => (
  <Layout data={{ site: gatsbyConfig }} children={Hello} />
));
