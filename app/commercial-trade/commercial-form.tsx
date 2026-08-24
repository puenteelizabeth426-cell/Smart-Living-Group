"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const projectTypes = [
  "Custom Home",
  "Commercial",
  "Restaurant / Hospitality",
  "Office",
  "Multifamily",
  "New Construction",
  "Major Renovation",
  "Other",
];

const constructionStages = [
  "Planning / Pre-Construction",
  "Design & Architecture",
  "Framing / Rough-In",
  "Finishing",
  "Completed / Retrofit",
];

const projectSizes = [
  "Under $25k",
  "$25k – $75k",
  "$75k – $150k",
  "$150k – $500k",
  "$500k+",
];

const timelines = [
  "Immediate",
  "1 – 3 months",
  "3 – 6 months",
  "6 – 12 months",
  "12+ months",
];

export function CommercialForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="commFormSuccess" role="status">
        <CheckCircle2 size={40} aria-hidden="true" />
        <h3>Thank you.</h3>
        <p>
          Your project details have been received. A member of our team will
          reach out to discuss system requirements, scope and next steps.
        </p>
      </div>
    );
  }

  return (
    <form className="commForm" onSubmit={handleSubmit}>
      <div className="commFieldRow">
        <label className="commField">
          <span>Name</span>
          <input type="text" name="name" autoComplete="name" required />
        </label>

        <label className="commField">
          <span>Company</span>
          <input type="text" name="company" autoComplete="organization" />
        </label>
      </div>

      <div className="commFieldRow">
        <label className="commField">
          <span>Email</span>
          <input type="email" name="email" autoComplete="email" required />
        </label>

        <label className="commField">
          <span>Phone</span>
          <input type="tel" name="phone" autoComplete="tel" required />
        </label>
      </div>

      <div className="commFieldRow">
        <label className="commField">
          <span>Project Type</span>
          <select name="projectType" defaultValue="" required>
            <option value="" disabled>
              Select project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="commField">
          <span>Project Location</span>
          <input
            type="text"
            name="location"
            placeholder="City, TX"
            required
          />
        </label>
      </div>

      <div className="commFieldRow">
        <label className="commField">
          <span>Estimated Project Size</span>
          <select name="projectSize" defaultValue="">
            <option value="" disabled>
              Select estimated size
            </option>
            {projectSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </label>

        <label className="commField">
          <span>Construction Stage</span>
          <select name="constructionStage" defaultValue="">
            <option value="" disabled>
              Select stage
            </option>
            {constructionStages.map((stage) => (
              <option key={stage} value={stage}>
                {stage}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="commField">
        <span>Estimated Timeline</span>
        <select name="timeline" defaultValue="">
          <option value="" disabled>
            Select timeline
          </option>
          {timelines.map((timeline) => (
            <option key={timeline} value={timeline}>
              {timeline}
            </option>
          ))}
        </select>
      </label>

      <label className="commField">
        <span>Message / Project Details</span>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about the scope, systems and goals for your project."
        />
      </label>

      <button type="submit" className="button primary commSubmit">
        Start a Commercial Project
        <ArrowRight size={18} aria-hidden="true" />
      </button>
    </form>
  );
}
