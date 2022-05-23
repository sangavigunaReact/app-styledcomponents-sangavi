import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {FaMagento} from 'react-icons/fa';

export const Footercontainer=styled.div`
background-color: #101522;
padding: 4rem 0 2rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Footersubcription=styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-bottom: 24px;
pad: 24px;
color: #fff;
`;

export const Footersubheading=styled.p`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
margin-bottom: 24px;
font-size: 24px;
`;

export const Footersubtext=styled.p`
margin-bottom: 24px;
font-size: 24px;
`;

export const Form=styled.form`
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width:820px){
    flex-direction: column;
    width: 80%;
}
`;

export const Forminput=styled.input`
padding: 10px 20px;
border-radius: 2px;
margin-right: 10px;
outline: none;
border: none;
font-size: 16px;
border: 1px solid #fff;

&::placeholder{
    color: #242424;
}

@media screen and (max-width:820px){
    width: 100%;
    margin: 0 0 16px 0;
}
`
export const Footerlinkscontainer=styled.div`
width: 100%;
max-width: 1000px;
display: flex;
justify-content: center;
@media screen and (max-width:820px){
    padding-top: 32px;
}
`;

export const Footerlinkswrapper=styled.div`
display: flex;
@media screen and (max-width:820px){
    flex-direction: column;
}
`;

export const Footerlinksitems=styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 16px;
text-align: left;
width: 160px;
box-sizing: border-box;
color: #fff;
@media screen and (max-width:820px){
    margin: 0;
    padding: 10px;
    width: 100%;
}
`;

export const Footerlinkstitle=styled.h2`
margin-bottom: 16px;
`;

export const Footerlink=styled(Link)`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
&:hover{
    color: #0467fb;
    transition: all 0.3s ease-out;
}
`;

export const Socialmedia=styled.section`
max-width: 1000px;
width: 100%;
`;

export const Socialmediawrap=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 90%;
max-width: 1000px;
margin: 40px auto 0 auto;
@media screen and (max-width:820px){
    flex-direction: column;
}
`;

export const Sociallogo=styled(Link)`
color: #fff;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
align-items: center;
margin-bottom: 16px;
`;

export const Socialicon=styled(FaMagento)`
margin-right: 10px;
`;
export const Websiterights=styled.small`
color: #fff;
margin-bottom: 16px;
`;

export const Socialicons=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`;

export const Socialiconlink=styled.a`
color: #fff;
font-size: 24px;
`























