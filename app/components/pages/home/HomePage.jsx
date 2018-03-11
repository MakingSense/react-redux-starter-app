import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../../actions/authActions';

export class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <section>
        <h2>Home</h2>
        <p>Hello {this.props.user.name}!</p>
      </section>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  user: PropTypes.object
};

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
