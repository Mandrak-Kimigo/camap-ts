import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
import theme from '../src/theme';

const storybookTheme = create({
  base: 'light',

  appContentBg: theme.palette.background.default,
});

addons.setConfig({
  theme: storybookTheme,
});
