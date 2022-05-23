import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {Footercontainer, Footersubcription, Footersubheading, Footersubtext, Form, Forminput, 
  Footerlinkscontainer, Footerlinkswrapper, Footerlinksitems, Footerlinkstitle, Footerlink,
  Socialmedia, Socialmediawrap, Sociallogo, Socialicon, Websiterights, Socialicons, Socialiconlink} from './footer.element';
import { Button } from '../../Globalstyle';

const Footer = () => {
  return (
    <Footercontainer>
      <Footersubcription>
          <Footersubheading>
            Join our exclusive membership to receive
            the latest news and trends
          </Footersubheading>
          <Footersubtext>
            You can unsubscribe at any time.
          </Footersubtext>
          <Form>
              <Forminput name="email" type="email" placeholder="Your Email" />
              <Button fontBig>Subscription</Button>
          </Form>
      </Footersubcription>
      <Footerlinkscontainer>
        <Footerlinkswrapper>
          <Footerlinksitems>
            <Footerlinkstitle>
              About Us
            </Footerlinkstitle>
            <Footerlink to='/sign-up'>How it works</Footerlink>
            <Footerlink to='/'>Testimonials</Footerlink>
            <Footerlink to='/'>Careers</Footerlink>
            <Footerlink to='/'>Investors</Footerlink>
            <Footerlink to='/'>Terms of Service</Footerlink>
          </Footerlinksitems>
          <Footerlinksitems>
            <Footerlinkstitle>
              Contact Us
            </Footerlinkstitle>
            <Footerlink to='/sign-up'>Contact</Footerlink>
            <Footerlink to='/'>Support</Footerlink>
            <Footerlink to='/'>Destinations</Footerlink>
            <Footerlink to='/'>Sponsorships</Footerlink>
          </Footerlinksitems>
          </Footerlinkswrapper>
          <Footerlinkswrapper>
          <Footerlinksitems>
            <Footerlinkstitle>
              Videos
            </Footerlinkstitle>
            <Footerlink to='/sign-up'>Submit Videos</Footerlink>
            <Footerlink to='/'>Ambassadors</Footerlink>
            <Footerlink to='/'>Agency</Footerlink>
            <Footerlink to='/'>Influencer</Footerlink>
          </Footerlinksitems>
          <Footerlinksitems>
            <Footerlinkstitle>
              Social Media
            </Footerlinkstitle>
            <Footerlink to='/sign-up'>Instagram</Footerlink>
            <Footerlink to='/'>Youtube</Footerlink>
            <Footerlink to='/'>Facebook</Footerlink>
            <Footerlink to='/'>Twitter</Footerlink>
            <Footerlink to='/'>Linkedin</Footerlink>
          </Footerlinksitems>
        </Footerlinkswrapper>
      </Footerlinkscontainer>
      <Socialmedia>
        <Socialmediawrap>
          <Sociallogo to='/'>
            <Socialicon />
              ULTRA
          </Sociallogo>
          <Websiterights>ULTRA © 2020</Websiterights>
          <Socialicons>
            <Socialiconlink href='/' target="_blank" aria-laber="Facebook">
              <FaFacebook />
            </Socialiconlink>
            <Socialiconlink href='/' target="_blank" aria-laber="Instagram">
              <FaInstagram />
            </Socialiconlink>
            <Socialiconlink href='/' target="_blank" aria-laber="Youtube">
              <FaYoutube />
            </Socialiconlink>
            <Socialiconlink href='/' target="_blank" aria-laber="Linkedin">
              <FaLinkedin />
            </Socialiconlink>
            <Socialiconlink href='/' target="_blank" aria-laber="Twitter">
              <FaTwitter />
            </Socialiconlink>
          </Socialicons>
        </Socialmediawrap>
      </Socialmedia>
    </Footercontainer>
  )
}

export default Footer;
