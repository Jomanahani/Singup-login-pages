import React, { Component } from "react";

import Layout from '../../Component/Layout'
import Titles from "../../Component/Titles";
import IntroSide from '../../Component/IntroSide'
import FormSide from '../../Component/FormSide'
import SignIntro from '../../Component/SignIntro'
import SingupForm from '../../Component/SingupForm'
import Back from '../../Component/Back'

class SingUp extends Component {
  render() {
    return (
      <Layout>
        <IntroSide>
          <SignIntro />
        </IntroSide>
        <FormSide>  
        <Back/>
      <Titles
        title="Register Individual Account!"
        supTitle="For the purpose of gamers regulation, your details are required."
      />
      <SingupForm login={this.props.login}/>
        </FormSide>
      </Layout>
    );
  }
}
export default SingUp;
