"use client";
import { useEffect, useState } from "react";
import { PopupWidget } from "react-calendly";

const CalendlyPopup = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents rendering on the server

  return (
    <PopupWidget
      url="https://calendly.com/mikotothemax/30min"
      rootElement={document.body}
      text="Schedule a Meeting"
      textColor="#000000"
      color="#FFD700"
    />
  );
};

export default CalendlyPopup;