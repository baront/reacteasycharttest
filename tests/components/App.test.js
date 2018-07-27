import React from 'react';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';

import App from '../../app/components/App';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Provider store={null}><App /></Provider>);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  // it('should have one heading', () => {
  //   expect(wrapper.find('#heading').type()).toEqual('h2');
  // });
});
