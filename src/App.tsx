import "./styles.css";
import Navbar from "./Navbar";
import ShapeField from "./ShapeField";
import Pattern from "./Pattern";
import { useState, useRef, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

export default function App() {
    const shapeRef = useRef<HTMLDivElement | null>(null);
    const [currentShape, setCurrentShape] = useState<string | null>(null);
    const handleLinkClicked = (shape: string) => {
        setCurrentShape(shape);
    };

    return (
        <div className="App">
            <Navbar onLinkClicked={handleLinkClicked}></Navbar>
            <ShapeField currentShape={currentShape} shapeRef={shapeRef}></ShapeField>
            <Link to="/pattern">
                <button>Pattern</button>
            </Link>
            <Routes>
                <Route
                    path="/pattern"
                    element={<Pattern shape={currentShape} shapeRef={shapeRef} />}
                />
            </Routes>
        </div>
    );
}
