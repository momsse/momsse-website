import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs/react';
import StoryRouter from 'storybook-react-router';
import backgrounds from './backgrounds';

addDecorator(withKnobs);
addDecorator(StoryRouter());
addDecorator(backgrounds);

setOptions({
  addonPanelInRight: true
});

const req = require.context('../src/', true, /\__stories__\/.*.js$/);

function loadStories() {
  req.keys().forEach(module => req(module));
  require('../src/globalStyle');
}

configure(loadStories, module);
