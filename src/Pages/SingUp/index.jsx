import React, { Component } from "react";
import Layout from '../../Component/Layout/index'
import Titles from "../../Component/Titles";
import IntroSide from '../../Component/IntroSide/index'
import FormSide from '../../Component/FormSide/index'
import SignIntro from '../../Component/SignIntro/index'

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
        </FormSide>
      </Layout>
      </div>
    );
  }
}
export default SingUp;
