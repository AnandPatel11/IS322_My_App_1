import React from "react";

export const Text = ({label = 'default text'}) => {
    return (
        <div>
            <p>{label}</p>
        </div>
    )
}