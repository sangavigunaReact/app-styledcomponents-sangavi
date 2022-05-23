import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Pricingsection=styled.div`
  padding: 100px 0 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #4b59f7;
`;

export const Pricingwrapper=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width:960px){
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;
  }
`;

export const Pricingheading=styled.h1`
  color: #1c2237;
  text-align: center;
  margin-bottom: 24px;
`;

export const Pricingcontainer=styled.div`
display: flex;
   justify-content: center;
   align-items: center;
   @media screen and (max-width:960px){
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   width: 100%;
   }
   
`;

export const Pricingcard=styled(Link)`
  background: #242424;
  box-shadow: 0 6px 20px rgb(56,125,255,.2);
  width: 280px;
  height: 500px;
  text-decoration: none;
  border-radius: 4px;

  &:nth-child(2){
  margin: 24px;
  }
  &:hover{
  transform: scale(1.06);
  transition: all .3s ease-out;
  color: #1c2237;
  }
  @media screen and (max-width:960px){
    width: 90%;   
  
  &:hover{
    transform: none;
  }
  }
`;

export const Pricingcardinfo=styled.div`
  display: flex;
   flex-direction: column;
   height: 500px;
   padding: 24px;
   align-items: center;
   color: #fff;
`;

export const Pricingcardicon=styled.div`
  align-items: center;
`;

export const Pricingcontainerfeatures=styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`
export const Pricingcontainerfeature=styled.li`
  margin-bottom: 10px;
`;

export const Pricingcardplan=styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
`

export const Pricingcardcost=styled.h4`
  font-size: 40px;
`
export const Pricingcardlength=styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;
