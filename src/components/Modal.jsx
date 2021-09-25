// NPM Packages
import ReactDom from "react-dom";

export default function Modal({ state }) {
  const [child, setChild] = state;

  if (child === null) return null;

  return ReactDom.createPortal(
    <>
      <div className="modal-background" />
      <div className="modal-window">
        {child}
        <button onClick={() => setChild(null)}>Close</button>
      </div>
    </>,
    document.getElementById("portal")
  );
}
