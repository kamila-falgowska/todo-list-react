import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: none;
    margin-left: 20px;
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colors.primaryHover};
    }

    &:disabled {
        color: ${({ theme }) => theme.colors.disabled};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-basis: 100%;
        margin: 10px 0;
    }
`;
