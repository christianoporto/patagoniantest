import styled from "styled-components";

export const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 55px;
    height: 25px;

    input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${(props) => props.theme.palette.backgroundDark};
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 34px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 5px;
        bottom: 3px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        border-radius: 50%;
    }

    input:checked + .slider {
        background-color: ${(props) => props.theme.palette.primary};
    }

    input:focus + .slider {
        box-shadow: 0 0 1px transparent;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
`;
