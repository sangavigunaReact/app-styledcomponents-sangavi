import React from 'react';
import { Button } from '../../Globalstyle';
import { GiRock } from 'react-icons/gi';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond } from 'react-icons/gi';
import {IconContext} from 'react-icons/lib';
import {Pricingsection, Pricingwrapper, Pricingheading, Pricingcontainer, Pricingcard,
        Pricingcardinfo, Pricingcardicon, Pricingcardplan, Pricingcardcost, Pricingcardlength,
        Pricingcontainerfeatures, Pricingcontainerfeature } from './pricing.element';

function Pricing() {
  return (
    <IconContext.Provider value={{color:'#fff', size:'64'}}>
    <Pricingsection>
      <Pricingwrapper>
        <Pricingheading>Our Services</Pricingheading>
        <Pricingcontainer>
          <Pricingcard to="/sign-up">
            <Pricingcardinfo>
              <Pricingcardicon>
               <GiRock />
            </Pricingcardicon>
            <Pricingcardplan>Starter Pack</Pricingcardplan>
            <Pricingcardcost>$8.99</Pricingcardcost>
            <Pricingcardlength>per month</Pricingcardlength>
            <Pricingcontainerfeatures>
              <Pricingcontainerfeature>100 New Users</Pricingcontainerfeature>
              <Pricingcontainerfeature>$10,000 Budget</Pricingcontainerfeature>
              <Pricingcontainerfeature>Retargeting Analytics</Pricingcontainerfeature>
            </Pricingcontainerfeatures>
          <Button primary>Choose Plan</Button>
          </Pricingcardinfo>
          </Pricingcard>

          <Pricingcard to="/sign-up">
            <Pricingcardinfo>
              <Pricingcardicon>
               <GiCrystalBars />
            </Pricingcardicon>
            <Pricingcardplan>Gold Rush</Pricingcardplan>
            <Pricingcardcost>$299.99</Pricingcardcost>
            <Pricingcardlength>per month</Pricingcardlength>
            <Pricingcontainerfeatures>
              <Pricingcontainerfeature>1000 New Users</Pricingcontainerfeature>
              <Pricingcontainerfeature>50,000 Budget</Pricingcontainerfeature>
              <Pricingcontainerfeature>Lead Gen Analytics</Pricingcontainerfeature>
            </Pricingcontainerfeatures>
          <Button primary>Choose Plan</Button>
          </Pricingcardinfo>
          </Pricingcard>

          <Pricingcard to="/sign-up">
            <Pricingcardinfo>
              <Pricingcardicon>
               <GiCutDiamond />
            </Pricingcardicon>
            <Pricingcardplan>Diamond Kings</Pricingcardplan>
            <Pricingcardcost>$999.99</Pricingcardcost>
            <Pricingcardlength>per month</Pricingcardlength>
            <Pricingcontainerfeatures>
              <Pricingcontainerfeature>Unlimited Users</Pricingcontainerfeature>
              <Pricingcontainerfeature>Unlimited Budget</Pricingcontainerfeature>
              <Pricingcontainerfeature>24/7 Support</Pricingcontainerfeature>
            </Pricingcontainerfeatures>
          <Button primary>Choose Plan</Button>
          </Pricingcardinfo>
          </Pricingcard>
        </Pricingcontainer>
        </Pricingwrapper>
        </Pricingsection>
    </IconContext.Provider>
  );
}

export default Pricing;