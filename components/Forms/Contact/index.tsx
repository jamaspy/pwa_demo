import { Button } from "@/components";
import React from "react";
export const ContactForm = () => {
  return (
    <form className="w-full p-4 flex flex-col">
      <div className="flex flex-row w-full justify-between gap-4">
        <div className="flex flex-col flex-1">
          <label htmlFor="firstName" className="font-medium mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="rounded-lg p-2 text-purple-600 focus:outline-purple-600"
          />
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="lastName" className="font-medium mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="rounded-lg p-2 text-purple-600 focus:outline-purple-600"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 mt-4">
        <label htmlFor="lastName" className="font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="rounded-lg p-2 text-purple-600 focus:outline-purple-600"
        />
      </div>
      <div className="flex flex-col flex-1 mt-4">
        <label htmlFor="lastName" className="font-medium mb-2">
          Role
        </label>
        <input
          type="text"
          id="role"
          name="role"
          className="rounded-lg p-2 text-purple-600 focus:outline-purple-600"
        />
      </div>
      <div className="flex flex-col flex-1 mt-4">
        <label htmlFor="lastName" className="font-medium mb-2">
          Let us know a bit about what you are looking for?
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          placeholder="Let us know a bit about what you are looking for?"
          className="rounded-lg p-2 text-purple-600 focus:outline-purple-600"
        />
      </div>
      <div className="flex flex-row w-full justify-between gap-4">
        <div className="flex flex-col flex-1">
          <label htmlFor="firstName" className="font-medium mb-2">
            State
          </label>
          <select
            id="state"
            name="state"
            defaultValue={""}
            className="rounded-lg p-2 text-purple-600 focus:outline-purple-600"
          >
            <option disabled>Please select a state</option>
            <option>NSW</option>
          </select>
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="lastName" className="font-medium mb-2">
            Postcode
          </label>
          <input
            type="number"
            id="postcode"
            name="postcode"
            className="rounded-lg p-2 text-purple-600 focus:outline-purple-600"
          />
        </div>
      </div>
      <p className="text-xs text-slate-700 mt-4">
        Provider Choice needs the contact information you provide to us to
        contact you about our products and services. You may unsubscribe from
        these communications at anytime. For information on how to unsubscribe,
        as well as our privacy practices and commitment to protecting your
        privacy, check out our Privacy Policy.
      </p>
      <Button label="Submit" variant="is-primary" className="mt-4" />
    </form>
  );
};
