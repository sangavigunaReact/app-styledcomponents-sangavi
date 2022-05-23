import React from 'react';
import { Infosection, Pricing } from '../../components';
import { Homeobjfour, Homeobjthree } from './data';

const Contact = () => {
  return (
    <div>
      <Infosection {...Homeobjthree} />  
      <Pricing />
      <Infosection {...Homeobjfour} />
    </div>
  )
}

export default Contact;
