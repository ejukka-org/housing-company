import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/home/home.page";
import Header from "./components/header.component";
import AboutPage from "./pages/about/about.page";
import SignIn from "./components/sign-in.component";
import "bootstrap/dist/css/bootstrap.min.css";
import ApartmentsPage from "./pages/apartments/apartments.page";
import HistoryPage from "./pages/history/history.page";

import { checkIsUserLoggedIn } from "./redux/user.action";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount(): void {
    // @ts-ignore
    const { checkIsUserLoggedIn } = this.props;
    checkIsUserLoggedIn();
  }

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/history" component={HistoryPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/apartments" component={ApartmentsPage} />
          <Route exact path="/signin" component={SignIn} />
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  checkIsUserLoggedIn: () => dispatch(checkIsUserLoggedIn())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
