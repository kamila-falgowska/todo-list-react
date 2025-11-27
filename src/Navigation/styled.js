import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
    background: ${({ theme }) => theme.colors.primary};
    padding: 20px;
    display: flex;
    gap: 20px;
`;

export const NavWrapper = styled.nav`
    display: flex;
    justify-content: center;
    gap: 32px;
    background: ${({ theme }) => theme.colors.primary};
    padding: 16px;
`;

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    padding: 16px;
    font-weight: normal;
    transition: 0.3s;

    &:hover {
        color: ${({ theme }) => theme.colors.primaryHover};
    }

    &.active {
        font-weight: bold;
        border-bottom: 2px solid white;
    }
`;