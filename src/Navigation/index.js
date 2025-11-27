import { toTasks, toAuthor } from "../routes";
import { StyledNavLink, NavWrapper } from "./styled";

const Navigation = () => (
    <NavWrapper>
        <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
        <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
    </NavWrapper>
);

export default Navigation;
