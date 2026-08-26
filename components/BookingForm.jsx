"use client";

import { useState } from "react";
import { validateEnquiry, HOTEL_CATEGORIES } from "@/lib/validateEnquiry";

const COUNTRY_CODES = [
  { code: "+91", label: "🇮🇳 +91 (India)" },
  { code: "+1", label: "🇺🇸 +1 (USA/Canada)" },
  { code: "+44", label: "🇬🇧 +44 (UK)" },
  { code: "+254", label: "🇰🇪 +254 (Kenya)" },
  { code: "+971", label: "🇦🇪 +971 (UAE)" },
  { code: "+61", label: "🇦🇺 +61 (Australia)" },
];

const initialFormData = {
  fullName: "",
  countryCode: "+91",
  contactNumber: "",
  email: "",
  dateOfTravel: "",
  numberOfPeople: 1,
  hotelCategory: "Standard",
  numberOfChildren: 0,
};

const todayISO = new Date().toISOString().split("T")[0];

export default function BookingForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { valid, errors: validationErrors } = validateEnquiry(formData);
    setErrors(validationErrors);

    if (!valid) {
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setServerMessage(data.message);
        setFormData(initialFormData);
        setErrors({});
      } else {
        setStatus("error");
        setServerMessage(
          data.message || "Something went wrong. Please try again."
        );
        if (data.errors) setErrors(data.errors);
      }
    } catch (err) {
      setStatus("error");
      setServerMessage(
        "We couldn't reach the server. Please check your connection and try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white border border-teal/10 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-teal/10 text-teal flex items-center justify-center mx-auto mb-4 text-2xl">
          ✓
        </div>
        <h3 className="font-display text-xl font-semibold text-teal mb-2">
          Enquiry Submitted
        </h3>
        <p className="text-charcoal/70">{serverMessage}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-amber hover:text-amber-dark"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-teal/10 rounded-2xl p-6 sm:p-8 space-y-5"
    >
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
          {serverMessage}
        </div>
      )}

      <Field label="Full Name" error={errors.fullName}>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={inputClass(errors.fullName)}
          placeholder="e.g. Priya Sharma"
        />
      </Field>

      <div className="grid grid-cols-3 gap-3">
        <Field label="Country Code" error={errors.countryCode} className="col-span-1">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className={inputClass(errors.countryCode)}
          >
            {COUNTRY_CODES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.code}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Contact Number" error={errors.contactNumber} className="col-span-2">
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className={inputClass(errors.contactNumber)}
            placeholder="9876543210"
          />
        </Field>
      </div>

      <Field label="Email" error={errors.email}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputClass(errors.email)}
          placeholder="you@example.com"
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-3">
        <Field label="Date of Travel" error={errors.dateOfTravel}>
          <input
            type="date"
            name="dateOfTravel"
            min={todayISO}
            value={formData.dateOfTravel}
            onChange={handleChange}
            className={inputClass(errors.dateOfTravel)}
          />
        </Field>

        <Field label="Hotel Category" error={errors.hotelCategory}>
          <select
            name="hotelCategory"
            value={formData.hotelCategory}
            onChange={handleChange}
            className={inputClass(errors.hotelCategory)}
          >
            {HOTEL_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <Field label="Number of People" error={errors.numberOfPeople}>
          <input
            type="number"
            name="numberOfPeople"
            min={1}
            value={formData.numberOfPeople}
            onChange={handleChange}
            className={inputClass(errors.numberOfPeople)}
          />
        </Field>

        <Field label="Number of Children (optional)" error={errors.numberOfChildren}>
          <input
            type="number"
            name="numberOfChildren"
            min={0}
            value={formData.numberOfChildren}
            onChange={handleChange}
            className={inputClass(errors.numberOfChildren)}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-amber hover:bg-amber-dark disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-sand font-semibold py-3.5 rounded-full text-sm sm:text-base"
      >
        {status === "loading" ? "Submitting…" : "Submit Enquiry"}
      </button>
    </form>
  );
}

function Field({ label, error, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs font-semibold text-charcoal/70 uppercase tracking-wide mb-1.5">
        {label}
      </span>
      {children}
      {error && <span className="block text-xs text-red-600 mt-1">{error}</span>}
    </label>
  );
}

function inputClass(error) {
  return `w-full rounded-lg border px-3.5 py-2.5 text-sm bg-sand/40 focus:outline-none focus:ring-2 focus:ring-teal/40 transition-shadow ${
    error ? "border-red-400" : "border-teal/15"
  }`;
}
