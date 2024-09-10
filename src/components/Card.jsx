import { createPortal } from "react-dom";
import { Videos } from "../constants/videos.js";

export default function Card({ id, vid, onClose }) {
  // Check to see which video is going to play by checking incoming "vid" name
  switch (vid) {
    case "WebDev":
      vid = Videos.WebDev;
      break;
    case "Hosting":
      vid = Videos.Hosting;
      break;
    case "SEO":
      vid = Videos.SEO;
      break;
    case "IT":
      vid = Videos.IT;
      break;
    default:
      vid = Videos.WebDev;
      break;
  }

  return createPortal(
    <div
      id="module"
      className="flex flex-col justify-center items-center gap-10 text-[1.5rem] z-50 cursor-pointer"
      key={id}
      onClick={onClose}>
      <video
        src={`${vid}`}
        className="rounded-md w-full md:w-[70vw]"
        autoPlay></video>
    </div>,
    document.getElementById("notifications")
  );
}
