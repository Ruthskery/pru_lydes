"use client";

import React from "react";
import Swal from "sweetalert2";
import { useState, useRef } from "react";
import { Montserrat, Roboto } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

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
    <div className="contact-container w-full font-[Roboto]">
      <section className="contact flex justify-center rounded-lg shadow-md items-center bg-black dark:bg-[#F3E3BA]">
        <form
          onSubmit={onSubmit}
          ref={formRef}
          className="max-w-2xl w-full p-5 text-white dark:text-[#0C0A09] md:m-5"
        >
          <div>
            <h1 className="font-[Montserrat] font-semibold text-2xl italic">Get in Touch with Lydes!</h1>
            <p className="italic font-light py-2">Have questions about your financial future? Lydes is here to guide you every step of the way.</p>
          </div>
          <div className="input-box">
            <input
              type="text"
              className="field w-full h-14 bg-transparent border-2 border-white dark:border-[#14110f] outline-none rounded-md p-4 text-lg text-white dark:text-[#69584F] mt-2"
              placeholder="Enter your name"
              name="name"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="email"
              className="field w-full h-14 bg-transparent border-2 border-white dark:border-[#14110f] outline-none rounded-md p-4 text-lg text-white dark:text-[#69584F] mt-2"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="telephone"
              className="field w-full h-14 bg-transparent border-2 border-white dark:border-[#14110f] outline-none rounded-md p-4 text-lg text-white dark:text-[#69584F] mt-2"
              placeholder="Enter your phone number (Optional)"
              name="tele"
            />
          </div>
          <div className="input-box">
            <textarea
              name="message"
              className="field mess w-full h-40 bg-transparent border-2 border-white dark:border-[#14110f] outline-none rounded-md p-4 text-lg text-white dark:text-[#69584F] mt-2"
              placeholder="Enter your message"
              required
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-white dark:bg-[#695012] text-black dark:text-white font-semibold rounded-md shadow-md text-lg mt-5 transition duration-500 hover:bg-[#E1B951] dark:hover:bg-[#AE851E]"
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