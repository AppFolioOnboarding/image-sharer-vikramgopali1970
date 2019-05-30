import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Row, Col } from 'reactstrap';

class FlashMessage extends Component {
  static propTypes = {
    flashMessage: PropTypes.string.isRequired,
    flashType: PropTypes.string.isRequired
  };

  render() {
    const flashMessage = this.props.flashMessage;
    const flashType = this.props.flashType;
    return (
      <div className="mt-3">
        <Row>
          <Col md={{ offset: 4, size: 4 }}>
            <Alert color={flashType}>
              {flashMessage}
            </Alert>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FlashMessage;
