"use client";

import React from "react";
import Swal from "sweetalert2";
import { useState, useRef } from "react";


const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    formData.append("access_key", "b24c93ac-1607-4dac-9cc5-0d30b2ce6950");

    const json = JSON.stringify(Object.fromEntries(formData));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form.");
      }

      const result = await response.json();
      setIsSubmitting(false);

      if (result.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
        form.reset(); // clear the form safely
      } else {
        Swal.fire({
          title: "Error",
          text: "Something went wrong, please try again.",
          icon: "error",
        });
      }
    } catch (err) {
      console.error("Form submission error:", err);
      Swal.fire({
        title: "Error",
        text: "Unable to send the message. Please check your internet or try again later.",
        icon: "error",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <section className="contact flex justify-center items-center min-h-screen">
        <form
          onSubmit={onSubmit}
          ref={formRef}
          className="max-w-2xl w-full p-5 rounded-lg shadow-md text-white m-5 bg-gray-800"
        >
          <div className="input-box">
            <label className="text-white">Full Name</label>
            <input
              type="text"
              className="field w-full h-14 bg-transparent border-2 border-white outline-none rounded-md p-4 text-lg text-white mt-2"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div className="input-box">
            <label className="text-white">Email Address</label>
            <input
              type="email"
              className="field w-full h-14 bg-transparent border-2 border-white outline-none rounded-md p-4 text-lg text-white mt-2"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
          <div className="input-box">
            <label className="text-white">Phone Number</label>
            <input
              type="telephone"
              className="field w-full h-14 bg-transparent border-2 border-white outline-none rounded-md p-4 text-lg text-white mt-2"
              placeholder="Enter your phone number"
              name="tele"
              required
            />
          </div>
          <div className="input-box">
            <label className="text-white">Your Message</label>
            <textarea
              name="message"
              className="field mess w-full h-40 bg-transparent border-2 border-white outline-none rounded-md p-4 text-lg text-white mt-2"
              placeholder="Enter your message"
              required
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-purple-600 text-black font-semibold rounded-md shadow-md text-lg mt-5 transition duration-500 hover:bg-purple-700"
            >
              {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;