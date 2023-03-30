import styled from "styled-components";

export const ContactForm = styled.form`
    width: 40%;

    @media (max-width:${({ theme }) => theme.breakpoints.mobile}){
        width: 90%;
        margin: auto;
    }
`;


export const FormLabel = styled.p`
    color: ${({ theme }) => theme.colors.para_text_color};
    padding-bottom: 10px;
`;

export const FormInput = styled.input`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary_light};
    border:1px solid ${({ theme }) => theme.colors.para_text_color};
    color: ${({ theme }) => theme.colors.para_text_color};
    border-radius: 5px;
    padding: 15px;

    &::placeholder{
        color: ${({ theme }) => theme.colors.para_text_color};
    }
`;

export const Button = styled.button`
    display: inline-block;
    width: max-content;
    padding: 1rem 2rem;
    color: ${({theme}) => theme.colors.white};
    background-color: ${({theme}) => theme.colors.primary_light};
    border: 1px solid ${({theme}) => theme.colors.gray};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease; 

    &:hover{
        color: ${({ theme }) => theme.colors.primary_light};
        background-color: ${({ theme }) => theme.colors.white};
    }
`