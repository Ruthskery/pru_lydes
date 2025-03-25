"use client";
import { useEffect, useState, useRef, forwardRef } from "react";
import { PopupWidget } from "react-calendly";
import Draggable from "react-draggable";

const DraggableCalendlyPopup = () => {
  const [isClient, setIsClient] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null!); // Required to prevent findDOMNode error

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents rendering on the server

  return (
    <Draggable nodeRef={nodeRef} handle=".drag-handle" bounds="parent">
      <div ref={nodeRef} className="fixed bottom-10 right-10 cursor-move active:cursor-move w-70">
        <div className="drag-handle w-5 h-5 bg-black rounded-full cursor-move ml-65"></div>
        <PopupWidget
          url="https://calendly.com/mikotothemax/30min"
          rootElement={document.body}
          text="Schedule a Meeting"
          textColor="#000000"
          color="#FFD700"
        />
      </div>
    </Draggable>
  );
};

export default DraggableCalendlyPopup;