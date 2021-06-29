import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 25px;

    hr {
        height: 1px;
        background: ${(props) => props.theme.palette.backgroundDark};
        outline: none;
        margin: 1px;
        padding: 0px;
        border: 1px;
    }
    .subtitle {
        color: ${(props) => props.theme.palette.textLight};
        font-size: .9rem;
        margin-bottom: 15px;
    }
    .empty-task {
        text-align: center;
    }
}
`;
