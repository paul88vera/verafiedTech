import { createPortal } from "react-dom";

//! Stylize service cards
// eslint-disable-next-line react/prop-types
export default function Card({ id, name, desc, onClose }) {
  return createPortal(
    <div
      id="module"
      className="flex flex-col justify-center items-center gap-10 p-2 text-[1.5rem] text-[--accent-green-color] z-50 bg-[--background-color] cursor-pointer"
      key={id}
      onClick={onClose}>
      <h3>{name}</h3>
      <ol className="text-white gap-4 flex flex-col flex-nowrap">
        <li className="list-decimal"> {desc[0]}</li>
        <li className="list-decimal"> {desc[1]}</li>
        <li className="list-decimal"> {desc[2]}</li>
        <li className="list-decimal"> {desc[3]}</li>
      </ol>
      <p>CLICK TO CLOSE</p>
    </div>,
    document.getElementById("notifications")
  );
}
