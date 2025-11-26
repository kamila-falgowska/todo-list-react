import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
    background: ${({ theme }) => theme.colors.primary};
    padding: 20px;
    display: flex;
    gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    padding: 8px 16px;

    &.active {
        font-weight: bold;
        border-bottom: 2px solid white;
    }
`;
