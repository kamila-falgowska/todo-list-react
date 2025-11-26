import { toTasks, toAuthor } from "../routes";
import { StyledNavLink, Wrapper } from "./styled";

const Navigation = () => (
    <Wrapper>
        <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
        <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
    </Wrapper>
);

export default Navigation;
