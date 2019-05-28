import React, { Component } from 'react';
import { inject } from 'mobx-react';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  /* Add Prop Types check*/
  render() {
    return (
      <div>
        <div className="container ">
          <Header title="Tell us what you think" />
          <Footer footer="Copyright: Appfolio Inc. Onboarding" />
        </div>
      </div>
    );
  }
}

export default inject('stores')(App);
