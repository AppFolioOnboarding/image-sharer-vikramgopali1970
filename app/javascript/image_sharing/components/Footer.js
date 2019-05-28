import React, { Component } from 'react';
import { Row, Col, Label } from 'reactstrap';
import PropTypes from 'prop-types';

class Footer extends Component {
  static propTypes = {
    footer: PropTypes.string.isRequired
  };

  render() {
    const footer = this.props.footer;
    return (
      <div>
        <Row>
          <Col lg={{ size: 4, offset: 4 }} className="footer-feedback">
            <Label >
              {footer}
            </Label>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
