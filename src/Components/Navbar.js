import React, { useEffect, useState } from "react";
import {
  Container,
  FlexContainer,
  PaddingContainer,
} from "./Styled-Components/Global.styled";
import {
  Logo,
  MenuIcon,
  NavbarContainer,
} from "./Styled-Components/Navbar.styled.js";
import { GiHamburgerMenu } from "react-icons/gi";
import NavMenu from "./NavMenu";
import {theme} from './../utils/Theme'

const Navbar = () => {
  const [openMenu, setopenMenu] = useState(false);
  const [sticky , setSticky]= useState(false);

  useEffect(()=>{
    const onScroll= ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    }
    window.addEventListener("scroll", onScroll)
    return ()=> window.removeEventListener('scroll' , onscroll)
  },[]);
  return (
    <NavbarContainer id="navbar" bgcolor={ sticky ? theme.colors.primary : 'transparent'}  >
      <PaddingContainer
        top="1.2rem"
        bottom="1.2rem"
        responsiveLeft="1rem"
        responsiveRight="1rem"
      >
        <Container>
          <FlexContainer justify="space-between" responsiveFlex >
            <Logo>
              Sakil.<span>Dev</span>
            </Logo>

            <MenuIcon onClick={()=>{setopenMenu(true)}}>
              <GiHamburgerMenu />
            </MenuIcon>
          </FlexContainer>
        </Container>
        {openMenu && <NavMenu setopenMenu={setopenMenu}/>}
      </PaddingContainer>
    </NavbarContainer>
  );
};

export default Navbar;
