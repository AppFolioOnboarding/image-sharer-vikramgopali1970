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
          <Col md={{ offset: 4, size: 4 }} className='text-center'>
            <Label style={{ fontSize: 10 }}>
              {footer}
            </Label>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Footer;
