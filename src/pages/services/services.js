import React from 'react';
import { Infosection, Pricing } from '../../components';
import { Homeobjtwo, Homeobjfour,  Homeobjthree } from './data';

const Services = () => {
  return (
    <div>
     <Infosection {...Homeobjtwo} />
      <Infosection {...Homeobjthree} />
      <Pricing />
      <Infosection {...Homeobjfour} />
    </div>
  )
}

export default Services;
