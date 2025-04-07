"use client";
import { useEffect, useState, useRef } from "react";
import { PopupWidget } from "react-calendly";
import Draggable from "react-draggable";
import { Calendar } from "lucide-react";

const DraggableCalendlyPopup = () => {
  const [isClient, setIsClient] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null!); // Required to prevent findDOMNode error

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents rendering on the server

  return (
    <Draggable nodeRef={nodeRef} handle=".drag-handle" bounds="parent">
      <div ref={nodeRef} className="fixed bottom-10 right-10 cursor-move active:cursor-move w-70 z-60">
        <div className="absolute drag-handle flex items-center justify-center w-13 h-13 bg-red-500 rounded-full cursor-move bottom-3 right-5  z-2147483648">
          <Calendar className="text-white w-7 h-7" />
        </div>
        <PopupWidget
          url="https://calendly.com/mikotothemax/30min"
          rootElement={document.body}
          text="Schedule a Meeting‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ."
          textColor="#000000"
          color="#FFD700"
        />
      </div>
    </Draggable>
  );
};

export default DraggableCalendlyPopup;
