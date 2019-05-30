import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import Header from './Header';
import FeedbackForm from './FeedbackForm';
import Footer from './Footer';
import FlashMessage from './FlashMessage';

@inject('stores')

@observer
class App extends Component {
  /* Add Prop Types check*/

  static propTypes = {
    stores: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        {this.props.stores.feedbackStore.response.msg &&
        <FlashMessage
          flashMessage={this.props.stores.feedbackStore.response.msg}
          flashType={this.props.stores.feedbackStore.response.type}
        />}
        <Header title="Tell us what you think" />
        <FeedbackForm />
        <Footer footer="Copyright: Appfolio Inc. Onboarding" />
      </div>
    );
  }
}

export default App;
