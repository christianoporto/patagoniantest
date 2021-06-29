import React from "react";
import { ContainerCenter, LdsRing } from "./styled";

interface LoadingDualRingProps {
    center?: boolean;
    small?: boolean;
    className?: string;
}

export default function LoadingDualRing(props: LoadingDualRingProps) {
    if (props.center) {
        return (
            <ContainerCenter className={props.className ?? ""}>
                <LdsRing className={props.small ? "small" : ""} />
            </ContainerCenter>
        );
    }
    return <LdsRing className={`${props.className ?? ""} ${props.small ? "small" : ""}`} />;
}
