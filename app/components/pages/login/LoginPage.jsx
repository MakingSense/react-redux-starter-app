import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../../actions/authActions';
import LoginForm from './LoginForm';

export class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(username, password) {
    this.props.actions.login(username, password);
  }

  render() {
    return (
      <section>
        <h2>Login</h2>
        <LoginForm onSubmit={this.handleOnSubmit} />
      </section>
    );
  }
}

LoginPage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
