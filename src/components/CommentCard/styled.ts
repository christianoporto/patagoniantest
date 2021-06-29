import styled from "styled-components";

export const CardBody = styled.div`
    color: ${(props) => props.theme.palette.textLight};
    padding-left: 10px;
    font-size: 0.9rem;
    background: ${(props) => props.theme.palette.backgroundLight};
    padding: 10px 20px;
    margin-bottom: 15px;
    border-radius: 10px;
    color: ${(props) => props.theme.palette.textLight};
    .title {
        color: ${(props) => props.theme.palette.text};
        margin: 0px;
    }
    .body {
        margin: 0px;
        margin-bottom: 5px;
    }
`;
