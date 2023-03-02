import { ContactForm } from "@/components/";
import React from "react";
import { HiOutlinePhone } from "react-icons/hi";
import { TfiEmail } from "react-icons/tfi";
const Contact = () => {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="flex-1 p-8 flex flex-col justify-center">
        <h1 className="font-bold text-4xl leading-snug">Get in touch</h1>
        <h2 className="font-bold text-xl leading-snug mb-4">
          What can we help you with?
        </h2>
        <p className="mb-8">
          If you have any questions about the services we offer, our sign up
          process or how we can help you on your NDIS journey please reach out
          to us today using the form below. One of our friendly team members
          will respond to you as soon as possible.
        </p>
        <div className="flex flex-row items-center mb-4">
          <div className="mr-4">
            <TfiEmail className="w-6 h-6 text-purple-600" />
          </div>
          <div className="">
            <p className="font-medium">Sign up as a provider</p>
            <a
              className="text-purple-600"
              href="mailto:providers@heyhubble.com.au"
            >
              providers@heyhubble.com.au
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center mb-4">
          <div className="mr-4">
            <TfiEmail className="w-6 h-6 text-purple-600" />
          </div>
          <div className="">
            <p className="font-medium">Sign up as a participant</p>
            <a
              className="text-purple-600"
              href="mailto:providers@heyhubble.com.au"
            >
              participants@heyhubble.com.au
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center mb-4">
          <div className="mr-4">
            <HiOutlinePhone className="w-6 h-6 text-purple-600" />
          </div>
          <div className="">
            <p className="font-medium">Sign up via phone</p>
            <p className="text-purple-600">(08) 6186 0764</p>
          </div>
        </div>
      </div>
      <div className="flex-1 p-8">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
