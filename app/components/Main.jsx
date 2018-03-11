import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import * as actions from '../actions/authActions';
import PrivateRoute from './common/PrivateRoute';
import LoginPage from './pages/login/LoginPage';
import NotFoundPage from './pages/not_found/NotFoundPage';
import HomePage from './pages/home/HomePage';
import Header from './pages/partials/header/Header';
import Footer from './pages/partials/footer/Footer';

export class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    // TODO: Update to JSX fragments syntax once is offically supported by Enzyme and ESLint.
    // https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html
    // https://github.com/airbnb/enzyme/issues/1213
    return (
      <div>
        <Header />
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} isAuthenticated={this.props.isAuthenticated} />
          <Route path="/login" component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

Main.propTypes = {
  actions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
