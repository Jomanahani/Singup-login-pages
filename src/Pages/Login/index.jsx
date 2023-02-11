import React, { Component } from "react";

import Layout from "../../Component/Layout";
import Titles from "../../Component/Titles";
import IntroSide from "../../Component/IntroSide";
import FormSide from "../../Component/FormSide";
import LoginIntro from "../../Component/LoginIntro";
import LoginForm from "../../Component/LoginForm";

export default class Login extends Component {
  render() {
    return (
      <Layout>
        <IntroSide>
          <LoginIntro />
        </IntroSide>
        <FormSide>
          <Titles
            login="true"
            title="Join the game!"
            supTitle="Go inside the best gamers social network!"
          />
          <LoginForm login={this.props.login} />
        </FormSide>
      </Layout>
    );
  }
}
