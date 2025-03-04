import React from "react";
import { useState, useEffect } from "react";

interface PatternProps {
    shape: string | null;
    shapeSize: {height: number; width: number};
}

const Pattern: React.FC<PatternProps> = ({ shape, shapeSize }) => {

    const shapeHeight = shapeSize.height;
    const shapeWidth = shapeSize.width;

    const rows = shapeHeight ? shapeHeight / 10 : 0;
    const extraScRows =
        shapeHeight && shapeWidth ? (shapeHeight - shapeWidth) / 10 : 0;
    const incRows = Math.floor((rows - extraScRows) / 3);
    const decRows = incRows - 1;
    const scRows = rows - incRows - decRows;

    const rowArray = [];
    const incArray = [];
    const scArray = [];
    const decArray = [];

    for (let i = 1; i < rows + 1; i++) {
        rowArray.push(` ${i}`);
    }

    for (let i = 1; i < incRows - 1; i++) {
        incArray.push(`Row ${rowArray[i + 1]}: 1inc, ${i}sc`);
    }

    for (let i = incRows; i < incRows + scRows; i++) {
        scArray.push(`Row ${rowArray[i]}: ${incRows * 6}sc`);
    }

    for (let i = incRows - 2; i > 0; i--) {
        decArray.push(`Row ${rowArray[rows - i - 1]}: 1dec, ${i}sc`);
    }

    return (
        <div className={"pattern-container"}>
            <div className={"pattern-text-container"}>
                <h1>Pattern</h1>
                <p>Selected Shape: {shape ?? null}</p>
                {shape ? (
                    <ul>
                        <li>Row 1: 6sc in a magic ring</li>
                        <li>Row 2: 6inc</li>
                        {incArray.map((row, index) => (
                            <li key={index}>{row}</li>
                        ))}
                        {scArray.map((row, index) => (
                            <li key={index}>{row}</li>
                        ))}
                        {decArray.map((row, index) => (
                            <li key={index}>{row}</li>
                        ))}
                        <li>Row {rows}: 6dec</li>
                    </ul>
                ) : null}

            </div>
            <div className="shape-container">
                {shape && (
                    <div className={`shape ${shape}`}></div>
                )}{" "}
            </div>
        </div>
)
    ;
};

export default Pattern;
