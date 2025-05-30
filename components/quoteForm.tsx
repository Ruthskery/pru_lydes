"use client";

import React, { useState, useRef } from "react";
import Swal from "sweetalert2";

interface FormData {
  name: string;
  email: string;
  phone: string;
  age: number;
  birthdate: string;
  availableDate: string;
  concern: string;
  dataPrivacyAgreement: boolean;
}

interface ValidationErrors {
  [key: string]: string;
}

const countryPhoneRules: Record<string, { maxLength: number; pattern: string; format: string }> = {
  "+63": { maxLength: 12, pattern: "[0-9]{10}", format: "XXX XXX XXXX" }, // Philippines
  "+1": { maxLength: 10, pattern: "[0-9]{10}", format: "XXX XXX XXXX" }, // US
  "+44": { maxLength: 10, pattern: "[0-9]{10}", format: "XXXX XXX XXX" }, // UK
  "+61": { maxLength: 9, pattern: "[0-9]{9}", format: "XXX XXX XXX" }, // Australia
  "+81": { maxLength: 10, pattern: "[0-9]{9,10}", format: "XXX XXXX XXXX" }, // Japan
  "+91": { maxLength: 10, pattern: "[0-9]{10}", format: "XXXXX XXXXX" }, // India
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("+63");
  const [localPhone, setLocalPhone] = useState("");
  const [errors, setErrors] = useState<ValidationErrors>({});
  const formRef = useRef<HTMLFormElement | null>(null);

  const validateForm = (formData: FormData): ValidationErrors => {
    const errors: ValidationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const today = new Date();
    const birthDate = new Date(formData.birthdate);
    const age = today.getFullYear() - birthDate.getFullYear();

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (age < 18) {
      errors.age = "You must be at least 18 years old";
    }

    const availableDate = new Date(formData.availableDate);
    if (availableDate < today) {
      errors.availableDate = "Available date must be in the future";
    }

    if (!formData.dataPrivacyAgreement) {
      errors.dataPrivacyAgreement = "You must agree to the Data Privacy Act of 2012 to proceed";
    }

    return errors;
  };

  const formatPhoneNumber = (value: string, country: string): string => {
    const numbers = value.replace(/\D/g, "");
    const format = countryPhoneRules[country]?.format;
    let result = "";
    let numberIndex = 0;

    if (!format) return numbers;

    for (let i = 0; i < format.length && numberIndex < numbers.length; i++) {
      if (format[i] === "X") {
        result += numbers[numberIndex];
        numberIndex++;
      } else {
        result += format[i];
      }
    }

    return result;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const formDataObj = Object.fromEntries(formData) as unknown as FormData;
    formDataObj.dataPrivacyAgreement = formData.get("dataPrivacyAgreement") === "on";
    
    const validationErrors = validateForm(formDataObj);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    formData.delete("countryCode");
    formData.set("phone", `${selectedCountry}${localPhone}`);
    formData.append("access_key", "6eb05e17-0d46-458f-a1b8-c7646b48f6c3");

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

      if (!response.ok) throw new Error("Failed to submit the form.");

      const result = await response.json();
      setIsSubmitting(false);

      if (result.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
        });
        form.reset();
        setLocalPhone("");
        setSelectedCountry("+63");
        setErrors({});
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
    <form
      onSubmit={onSubmit}
      ref={formRef}
      className="w-full text-white dark:text-[#0C0A09]"
      noValidate
    >
      <div className="input-box">
        <div className="floating-label">
          <input
            id="name"
            type="text"
            className={`${
              errors.name ? 'border-red-500' : 'border-white dark:border-[#14110f]'
            } text-white dark:text-[#69584F]`}
            placeholder=" "
            name="name"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
          />
          <label htmlFor="name">Full Name</label>
        </div>
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div className="input-box ">
        <div className="floating-label">
          <input
            id="email"
            type="email"
            className={`${
              errors.email ? 'border-red-500' : 'border-white dark:border-[#14110f]'
            } text-white dark:text-[#69584F]`}
            placeholder=" "
            name="email"
            required
            aria-required="true"
            aria-invalid={!!errors.email}
          />
          <label htmlFor="email">Email Address</label>
        </div>
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div className="input-box flex gap-2 ">
        <div className="flex-shrink-0">
          <div className="floating-label">
            <select
              id="countryCode"
              className="w-28 border-white dark:border-[#14110f] text-white dark:text-[#69584F]"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              required
            >
              <option value="+63">🇵🇭 +63</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
              <option value="+81">🇯🇵 +81</option>
              <option value="+91">🇮🇳 +91</option>
            </select>
            <label htmlFor="countryCode">Code</label>
          </div>
        </div>
        <div className="flex-grow">
          <div className="floating-label">
            <input
              id="phone"
              type="tel"
              className="border-white dark:border-[#14110f] text-white dark:text-[#69584F]"
              placeholder=" "
              name="phone"
              pattern={countryPhoneRules[selectedCountry]?.pattern}
              maxLength={countryPhoneRules[selectedCountry]?.maxLength}
              value={formatPhoneNumber(localPhone, selectedCountry)}
              onChange={(e) =>
                setLocalPhone(
                  e.target.value.replace(/[^0-9]/g, "").slice(0, countryPhoneRules[selectedCountry]?.maxLength)
                )
              }
              required
              aria-required="true"
            />
            <label htmlFor="phone">Phone Number</label>
          </div>
        </div>
      </div>

      <div className="input-box ">
        <div className="floating-label">
          <input
            id="birthdate"
            type="date"
            max={new Date().toISOString().split('T')[0]}
            className={`${
              errors.birthdate ? 'border-red-500' : 'border-white dark:border-[#14110f]'
            } text-white dark:text-[#69584F]`}
            name="birthdate"
            required
            aria-required="true"
            aria-invalid={!!errors.birthdate}
          />
          <label htmlFor="birthdate">Birth Date</label>
        </div>
        {errors.birthdate && <p className="text-red-500 text-sm mt-1">{errors.birthdate}</p>}
      </div>

      <div className="input-box ">
        <div className="floating-label">
          <input
            id="availableDate"
            type="date"
            min={new Date().toISOString().split('T')[0]}
            className={`${
              errors.availableDate ? 'border-red-500' : 'border-white dark:border-[#14110f]'
            } text-white dark:text-[#69584F]`}
            name="When can Ms.Lydes Contact You"
            required
            aria-required="true"
            aria-invalid={!!errors.availableDate}
          />
          <label htmlFor="availableDate">When Can Ms.Lydes Contact You</label>
        </div>
        {errors.availableDate && <p className="text-red-500 text-sm mt-1">{errors.availableDate}</p>}
      </div>

      <div className="input-box ">
        <div className="floating-label">
          <select
            id="concern"
            className="border-white dark:border-[#14110f]"
            name="concern"
            required
            defaultValue=""
            aria-required="true"
          >
            <option className="text-black" value="" disabled>Select your concern</option>
            <option className="text-black" value="Life Insurance">Life Insurance</option>
            <option className="text-black" value="Health & Critical Illness">Health & Critical Illness</option>
            <option className="text-black" value="Investment-Linked">Investment-Linked</option>
            <option className="text-black" value="Accident & Disability">Accident & Disability</option>
            <option className="text-black" value="Education & Savings">Education & Savings</option>
          </select>
          <label htmlFor="concern">Type of Concern</label>
        </div>
      </div>

      <div className="input-box">
            <label className="flex items-center gap-2 text-xs text-white dark:text-[#69584F]">
              <input
                type="checkbox"
                name="dataPrivacyAgreement"
                required
                className="accent-yellow-500"
                aria-required="true"
              />
              I agree to the collection and processing of my personal data in accordance with the Data Privacy Act of 2012.
            </label>
            {errors.dataPrivacyAgreement && <p className="text-red-500 text-xs pl-8">{errors.dataPrivacyAgreement}</p>}
          </div>    

      <div className="input-box">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full h-14 font-semibold rounded-md shadow-md text-lg transition duration-500 ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-white dark:bg-[#695012] text-black hover:bg-[#E1B951] dark:hover:bg-[#AE851E]'
          }`}
          aria-busy={isSubmitting}
        >
          <span className="flex items-center justify-center">
            {isSubmitting && (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            {isSubmitting ? "Submitting..." : "Send Message"}
          </span>
        </button>
      </div>
    </form>
  );
};

export default Contact;
