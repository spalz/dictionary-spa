import React from "react";
import PT from "prop-types";

const IconLognTop = ({ stroke = 3 }) => {
    return (
        <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M6 11.0664L12.0917 2.2752L14 2.2752"
                stroke="currentColor"
                strokeWidth={stroke}
            />
            <path
                d="M22 11.0664L15.9083 2.2752L14 2.2752"
                stroke="currentColor"
                strokeWidth={stroke}
            />
            <path d="M14 27L14 2" stroke="currentColor" strokeWidth={stroke} />
        </svg>
    );
};

IconLognTop.propTypes = {
    stroke: PT.number,
};

export default IconLognTop;
