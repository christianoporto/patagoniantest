import styled from "styled-components";

export const CardBody = styled.div`
    color: ${(props) => props.theme.palette.textLight};

    background: ${(props) => props.theme.palette.background};
    padding: 10px 20px;
    margin-bottom: 15px;
    border-radius: 10px;
    color: ${(props) => props.theme.palette.textLight};
    .title {
        color: ${(props) => props.theme.palette.text};
    }
    .comments {
        margin-top: 20px;
    }
    .btn {
        background: ${(props) => props.theme.palette.backgroundLight};
        border: 0px;
        padding: 6px 10px;
        color: ${(props) => props.theme.palette.textLight};
        border-radius: 5px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 0.9rem;
        font-weight: 500;
    }
`;
