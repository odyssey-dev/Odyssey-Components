import { action } from '@storybook/addon-actions';

import Button from './button.svelte';

import LoadingIcon from '@odyssey-dev/loading-icon';

export default {
  title: 'Button',
  component: Button,
};


export const Loading = () => ({
  Component: LoadingIcon,
});

export const Text = () => ({
  Component: Button,
  props: { text: 'Hello Button' },
  on: { click: action('clicked') },
});

export const Emoji = () => ({
  Component: Button,
  props: {
    text: '😀 😎 👍 💯',
  },
  on: { click: action('clicked') },
});
