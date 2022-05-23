import React from 'react';
import { Infosection, Pricing } from '../../components';
import { Homeobjfour } from './data';

const Products = () => {
  return (
    <div>
     
      
      <Pricing />
      <Infosection {...Homeobjfour} />
    </div>
  )
}

export default Products;
