import React, { useState } from "react";
import { Switch } from "./styled";

interface IToggleProps {
    checked?: boolean;
    onChange: (value: boolean) => void;
}

export default function ToggleSwitch({ checked = false, onChange }: IToggleProps) {
    const [isChecked, setIsChecked] = useState(checked);

    return (
        <Switch>
            <input
                checked={isChecked}
                onChange={(e) => {
                    onChange(e.target.checked);
                    setIsChecked(e.target.checked);
                }}
                type="checkbox"
            />
            <span className="slider"></span>
        </Switch>
    );
}
