import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  margin-left: 20px;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
