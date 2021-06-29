import styled from "styled-components";

export const CreateCommentBody = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    .input {
        width: 100%;
        margin-right: 10px;
        background: ${(props) => props.theme.palette.background};
        border: 1px solid ${(props) => props.theme.palette.backgroundDark};
        padding: 10px 12px;
        color: ${(props) => props.theme.palette.text};
        outline: none;
        border-radius: 8px;
        &:focus {
            border: 1px solid ${(props) => props.theme.palette.primary};
        }
        box-sizing: border-box;
        margin-bottom: 10px;
    }
    .input-title {
        margin-bottom: 10px;
    }
    .actions-btns {
        display: flex;
        justify-content: flex-end;
        button {
            background: ${(props) => props.theme.palette.backgroundLight};
            border: 0px;
            padding: 6px 10px;
            color: ${(props) => props.theme.palette.textLight};
            border-radius: 5px;
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 0.9rem;
            font-weight: 500;
            transition: 0.3s all;
            cursor: pointer;
            margin-left: 10px;
        }
        .primary {
            background: ${(props) => props.theme.palette.primary};
            color: white;
            &:hover {
                background: ${(props) => props.theme.palette.primaryDark};
                color: white;
            }
        }
    }
`;
