import { expect } from 'chai';
import { shallow } from 'enzyme';
import { describe, it } from 'mocha';
import React from 'react';
import App from '../../components/App';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

describe('<App />', () => {
  it('should render Header', () => {
    const wrapper = shallow(<App stores={{}} />).dive();
    expect(wrapper.find(Header)).to.have.lengthOf(1);
    expect(wrapper.find(Header).props().title).to.equals('Tell us what you think');
  });

  it('should render Footer', () => {
    const wrapper = shallow(<App stores={{}} />).dive();
    expect(wrapper.find(Footer)).to.have.lengthOf(1);
    expect(wrapper.find(Footer).props().footer).to.equals('Copyright: Appfolio Inc. Onboarding');
  });
});
