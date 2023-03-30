import React from 'react'
import { FlexContainer, PaddingContainer } from './Styled-Components/Global.styled'
import {AiOutlineClose} from 'react-icons/ai'
import {MenuIcon, MenuItem, NavMenuContainer} from './Styled-Components/Navbar.styled'
import {NavLink} from "./../utils/Data"
function  NavMenu({setopenMenu}) {
  return (
    <NavMenuContainer>
        <PaddingContainer left="5%" right="5%" top="2rem">
            <FlexContainer justify ="flex-end" responsiveFlex>
                <MenuIcon onClick={()=>{setopenMenu(false)}}>
                    <AiOutlineClose/>
                </MenuIcon>
            </FlexContainer>
        </PaddingContainer>
        <PaddingContainer top='8%'>
          <FlexContainer direction="column" align="center" responsiveFlex>

            {NavLink.map((link)=>(

            <MenuItem href={`#${link.href}`} onClick={()=> setopenMenu(false)} >{link.name}</MenuItem>
            ))}
          </FlexContainer>
        </PaddingContainer>
    </NavMenuContainer>
  )
}

export default NavMenu