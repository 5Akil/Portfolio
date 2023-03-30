


import styled from "styled-components";

export const Logo = styled.p`
    font-size: 1.7rem;
    font-weight: ${({theme}) => theme.fonts.weight.medium};
    color: white;

    & > span{
        color : ${({theme}) => theme.colors.secondary}; 
    }
`
export const MenuIcon = styled.div`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;

    &:hover{
        font-size: 2.1rem;
    }
`

export const NavbarContainer = styled.div`
    position: fixed;
    width: 100%;
    top:0;
    left: 0;
    z-index: 10;
    transition:  all 0.3s ease-in;
    background-color: ${({bgcolor})=>bgcolor};
`

export const NavMenuContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top:0;
    left: 0;
    z-index: 1;
    background-color: ${({theme}) => theme.colors.primary_light};
`

export const MenuItem= styled.a`
    font-size:2.5rem ;
    color:  #fff;
    margin-top: 3rem;
    cursor: pointer;
    text-decoration: none;

`