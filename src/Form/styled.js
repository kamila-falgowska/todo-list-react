import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
`;

export const Button = styled.button`
  padding: 10px;
  background: hsl(210, 95%, 49%);
  color: white;
  border: none;
  transition: 0.3s;

  &:hover {
    background: hsl(210, 95%, 56%);
    transform: scale(1.1);
  }
`;
