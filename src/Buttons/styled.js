import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background: transparent;
  color: hsl(210, 95%, 49%);
  border: none;
  margin: 0 0 0 20px;
  transition: color 0.3s;

  &:hover {
    color: hsl(210, 95%, 56%);
  }

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }

  @media(max-width: 767px) {
    .buttons__button {
        flex-basis: 100%;
        margin: 10px;
    }
}

`;
