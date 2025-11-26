import styled from "styled-components";
import { NavLink } from "react-router-dom";
const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: inherit;
  text-decoration: none;

  &.${activeClassName} {
    color: red;
    font-weight: bold;
  }
`;
