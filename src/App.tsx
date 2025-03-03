import "./styles.css";
import Navbar from "./Navbar";
import ShapeField from "./ShapeField";
import Pattern from "./Pattern";
import { useState, useRef, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

export default function App() {
    const shapeRef = useRef<HTMLDivElement | null>(null);
    const [currentShape, setCurrentShape] = useState<string | null>(null);
    const [shapeSize, setShapeSize] = useState<{ height: number; width: number } | null>(null);
    const handleLinkClicked = (shape: string) => {
        setCurrentShape(shape);
    };

    const handlePatternClick = () => {
        if (shapeRef.current) {
            setShapeSize({
                height: shapeRef.current.clientHeight,
                width: shapeRef.current.clientWidth
            });
        }
    };

    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Navbar onLinkClicked={handleLinkClicked} />
                            <ShapeField currentShape={currentShape} shapeRef={shapeRef} />
                            <Link to="/pattern" onClick={handlePatternClick}>
                                <button>Pattern</button>
                            </Link>
                        </>
                    }
                />
                <Route
                    path="/pattern"
                    element={
                    <>
                        <Pattern shape={currentShape} shapeSize={shapeSize} />
                        <Link to="/">
                            <button>Go back</button>
                        </Link>
                    </>
                }
                />
            </Routes>
        </div>
    );
}
