import { mount } from '@vue/test-utils';
import Index from './index.vue';

describe('Index', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Index);
  });

  test('h1 text', () => {
    expect(wrapper.find('h1').text()).toEqual('MyApp');
  });
});
