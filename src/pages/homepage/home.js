import React from 'react';
import { Infosection, Pricing } from '../../components';
import { Homeobjfour, Homeobjone, Homeobjthree, Homeobjtwo } from './data';

const Home = () => {
  return (
    <div>
      <Infosection {...Homeobjone} />
      <Infosection {...Homeobjtwo} />
      <Infosection {...Homeobjthree} />
      <Pricing />
      <Infosection {...Homeobjfour} />
    </div>
  )
}

export default Home;
