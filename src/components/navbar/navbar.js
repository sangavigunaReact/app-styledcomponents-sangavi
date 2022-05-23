import React,{useState, useEffect} from 'react';
import { Nav, NavbarContainer, Navlogo, Navicon, Mobileicon, Navmenu, Navitem, Navlink, Navitembtn, Navbtnlink  } from './navbar.element';
import {FaTimes, FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../Globalstyle';


const Navbar = () => {
  const [click,setclick]=useState(false);
  const [button,setbutton]=useState(true);
  const showbutton = () =>{
    if(window.innerWidth<=960){
      setbutton(false)
    }
    else{
      setbutton(true)
    }
    
  }
  useEffect(() => {
    showbutton()
    }, [])
    window.addEventListener('resize',showbutton);

  const handleclick = () => setclick(!click);
  const closemobilemenu = () => setclick(false);

  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
      <Nav>
        <NavbarContainer>
          <Navlogo to="/" onClick={closemobilemenu} click={click}>
            <Navicon />
              ULTRA
          </Navlogo>
          <Mobileicon onClick={handleclick}>
              {click ? <FaTimes /> : <FaBars />}
          </Mobileicon>
          <Navmenu onClick={handleclick} click={click}> 
              <Navitem>
                <Navlink to="/">Home</Navlink>
              </Navitem>
              <Navitem>
                <Navlink to="/products">Products</Navlink>
              </Navitem>
              <Navitem>
                <Navlink to="/about">About</Navlink>
              </Navitem>
              <Navitem>
                <Navlink to="/contact">Contact</Navlink>
              </Navitem>
              <Navitembtn>
                {button? (
                  <Navbtnlink to="/sign-up">
                      <Button primary>SIGN UP</Button>
                  </Navbtnlink>
                ):(
                  <Navbtnlink to="/sign-up">
                      <Button fontbig primary>SIGN UP</Button>
                  </Navbtnlink>
                )}
              </Navitembtn>
          </Navmenu>
        </NavbarContainer>
      </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;
