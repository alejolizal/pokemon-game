import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import App from '../App.vue';

describe('App', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(App);
    expect(wrapper.text()).toContain('¿Quien es ese pokemon?');
  });

  it('renders PokemonGame component', () => {
    const wrapper = mount(App);
    expect(wrapper.findComponent({ name: 'PokemonGame' }).exists()).toBe(true);
  });

  it('renders PokemonOpciones component', () => {
    const wrapper = mount(App);
    expect(wrapper.findComponent({ name: 'PokemonOpciones' }).exists()).toBe(true);
  });
});
