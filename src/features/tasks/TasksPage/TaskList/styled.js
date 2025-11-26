import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    ${({ $hidden }) => $hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ $done }) => $done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    color: ${({ theme }) => theme.colors.white};
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background 0.3s;

    ${({ $toggleDone, theme }) => $toggleDone && css`
        background: ${theme.colors.toggleDone};

        &:hover {
            background: ${theme.colors.toggleDoneHover};
        }
    `}

    ${({ $remove, theme }) => $remove && css`
        background: ${theme.colors.remove};

        &:hover {
            background: ${theme.colors.removeHover};
        }
    `}
`;
