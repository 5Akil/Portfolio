import styled from "styled-components";

export const ShowcaseParticleContainer= styled.div`
    position: relative;

    @media (max-width:${({theme}) => theme.breakpoints.mobile}){
        display: none;
    }
`

export const ShowcaseImageCard = styled.div`
    border: 1px solid white;
    width: max-content;
    padding-top: 2rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
`;

export const IconContainer = styled.div`
    font-size: 1.5rem;
    color: #fff;
    transition: all 0.2s ease;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        color: ${({theme}) => theme.colors.secondary};
    }
`

export const Particle = styled.img`
    position: absolute;
    top: ${({ initialTop }) => initialTop};
    left: ${({ initialLeft }) => initialLeft};
    right: ${({ initialRight }) => initialRight};
    bottom: ${({ initialBottom }) => initialBottom};
    transform: rotate(${({ rotate }) => rotate})
`