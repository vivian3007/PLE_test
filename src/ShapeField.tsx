import "./styles.css";

export default function ShapeField({
                                       currentShape,
                                       shapeRef,
                                   }: {
    currentShape: string | null;
    shapeRef: React.RefObject<HTMLDivElement | null>;
}) {
    return (
        <div className="shape-container">
            {currentShape && (
                <div className={`shape ${currentShape}`} ref={shapeRef}></div>
            )}{" "}
        </div>
    );
}
