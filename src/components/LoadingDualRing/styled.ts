import styled from "styled-components";

export const LdsRing = styled.div`
    display: inline-block;


    &:after {
        content: " ";
        display: block;
        width: 25px;
        height: 25px;
        margin: 0px;
        border-radius: 50%;
        border: 3px solid #fff;
        border-color: ${({ theme: { palette } }) =>
            ` ${palette.backgroundDark} ${palette.backgroundDarker} ${palette.backgroundDark} ${palette.backgroundDarker}`} ; 
        animation: lds-dual-ring 1.2s linear infinite;
    }
    &.small { 
        &:after {
            width: 13px;
            height: 13px;
        }
    }
    @keyframes lds-dual-ring {
    0% {
    transform: rotate(0deg);
    }
    100% {
    transform: rotate(360deg);
    }
`;

export const ContainerCenter = styled.div`
    text-align: center;
    padding-top: 15px;
    padding-bottom: 10px;
`;
