import React, { Component } from "react";

import Layout from '../../Component/Layout'
import Titles from "../../Component/Titles";
import IntroSide from '../../Component/IntroSide'
import FormSide from '../../Component/FormSide'
import SignIntro from '../../Component/SignIntro'
import SingupForm from '../../Component/SingupForm'

class SingUp extends Component {
  render() {
    return (
      <div>
      <Layout>
        <IntroSide>
          <SignIntro />
        </IntroSide>
        <FormSide>  
      <Titles
        title="Register Individual Account!"
        supTitle="For the purpose of gamers regulation, your details are required."
      />
      <SingupForm/>
        </FormSide>
      </Layout>
      </div>
    );
  }
}
export default SingUp;
