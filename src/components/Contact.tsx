"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickupCity: "",
    dropCity: "",
    pickupAddress: "",
    deliveryAddress: "",
    movingDate: "",
    moveType: "House",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.pickupCity || !formData.dropCity) {
      setErrorMsg("Please fill in all required fields (Name, Phone, Email, Pickup City, and Drop City).");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        pickupCity: "",
        dropCity: "",
        pickupAddress: "",
        deliveryAddress: "",
        movingDate: "",
        moveType: "House",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="bg-surface py-24">
      <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-2">
        {/* Left Side: Contact Information & Map */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            Get in touch
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">
            Request your free quote
          </h2>
          <p className="mt-4 text-foreground/70">
            Tell us about your move. A real human gets back to you within minutes.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            {/* Phone */}
            <li className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shrink-0">
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <p className="font-semibold text-primary">+91 99999 99999</p>
                <p className="text-muted-foreground">24×7 customer support</p>
              </div>
            </li>

            {/* Email */}
            <li className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shrink-0">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <p className="font-semibold text-primary">hello@expertmovers.in</p>
                <p className="text-muted-foreground">We reply within an hour</p>
              </div>
            </li>

            {/* Address */}
            <li className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shrink-0">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <p className="font-semibold text-primary">Plot 21, Logistics Park</p>
                <p className="text-muted-foreground">Mumbai, Maharashtra 400001</p>
              </div>
            </li>
          </ul>

          {/* Embedded Google Map */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-card">
            <iframe
              title="Office location"
              src="https://www.google.com/maps?q=Mumbai&amp;output=embed"
              loading="lazy"
              className="h-64 w-full border-0"
              allowFullScreen
            />
          </div>
        </div>

        {/* Right Side: Form */}
        <div>
          {submitSuccess ? (
            <div className="card-soft flex flex-col items-center justify-center text-center p-8 md:p-12 h-full min-h-[400px] bg-card animate-in fade-in-0 zoom-in-95 duration-500">
              <CheckCircle2 className="h-16 w-16 text-secondary animate-bounce" />
              <h3 className="mt-6 text-2xl font-bold text-primary">Request Submitted!</h3>
              <p className="mt-3 text-sm text-foreground/70 max-w-sm">
                Thank you! Our relocation specialist will verify your details and get back to you with a free,
                customized quote in under 2 minutes.
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="mt-8 rounded-full border border-primary/20 bg-background text-primary px-6 py-2.5 text-sm font-semibold transition hover:bg-primary hover:text-primary-foreground"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-soft grid gap-4 p-6 md:p-8 bg-card">
              {errorMsg && (
                <div className="p-3 text-xs font-semibold text-red-600 bg-red-50 rounded-xl border border-red-200">
                  {errorMsg}
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-primary/80">
                    Full name *
                  </span>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-ring/40 transition focus:border-secondary focus:ring-2"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-primary/80">
                    Phone *
                  </span>
                  <input
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-ring/40 transition focus:border-secondary focus:ring-2"
                    placeholder="+91 …"
                  />
                </label>
              </div>

              {/* Email */}
              <label className="block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-primary/80">
                  Email *
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-ring/40 transition focus:border-secondary focus:ring-2"
                  placeholder="you@email.com"
                />
              </label>

              {/* Pickup & Drop City */}
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-primary/80">
                    Pickup city *
                  </span>
                  <input
                    required
                    name="pickupCity"
                    value={formData.pickupCity}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-ring/40 transition focus:border-secondary focus:ring-2"
                    placeholder="E.g. Mumbai"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-primary/80">
                    Drop city *
                  </span>
                  <input
                    required
                    name="dropCity"
                    value={formData.dropCity}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-ring/40 transition focus:border-secondary focus:ring-2"
                    placeholder="E.g. Bangalore"
                  />
                </label>
              </div>

              {/* Pickup & Delivery Address */}
              <label className="block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-primary/80">
                  Pickup address
                </span>
                <input
                  name="pickupAddress"
                  value={formData.pickupAddress}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-ring/40 transition focus:border-secondary focus:ring-2"
                  placeholder="Street address, building, floor"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-primary/80">
                  Delivery address
                </span>
                <input
                  name="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-ring/40 transition focus:border-secondary focus:ring-2"
                  placeholder="Street address, building, floor"
                />
              </label>

              {/* Moving Date & Move Type */}
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-primary/80">
                    Moving date
                  </span>
                  <input
                    type="date"
                    name="movingDate"
                    value={formData.movingDate}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-ring/40 transition focus:border-secondary focus:ring-2"
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-primary/80">
                    Move type
                  </span>
                  <select
                    name="moveType"
                    value={formData.moveType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-ring/40 transition focus:border-secondary focus:ring-2"
                  >
                    <option>House</option>
                    <option>Office</option>
                    <option>Car</option>
                    <option>Bike</option>
                    <option>Warehouse</option>
                    <option>International</option>
                  </select>
                </label>
              </div>

              {/* Message */}
              <label className="block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-primary/80">
                  Message (optional)
                </span>
                <textarea
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-ring/40 transition focus:border-secondary focus:ring-2"
                  placeholder="Tell us anything special about your move…"
                />
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-accent mt-2 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold disabled:opacity-60 cursor-pointer"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? "Submitting..." : "Request my free quote"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
