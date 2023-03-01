import { Button, SimpleSteps } from "@/components";
import Hero from "@/public/participants/participantHero.jpeg";
import Image from "next/image";
import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
const Participants = () => {
  return (
    <div>
      <section className="flex flex-col-reverse lg:flex-row min-h-screen w-full bg-[#FFF9F0]">
        <div className="flex-1 p-12 flex flex-col items-center justify-center relative">
          <div className="max-w-lg z-10 ">
            <p className="font-bold text-6xl leading-snug mb-8">
              Find exactly{" "}
              <span className="bg-purple-600 text-white">
                the right services
              </span>{" "}
              for you.
            </p>
            <p>
              Tell us about what you need and our team at HeyHubble will find
              you trustworthy people and services who can help you.
            </p>
            <div className="flex flex-col md:flex-row mt-8">
              <Button label="Signup" variant="is-primary" className="mr-4" />
              <Button label="Request a service" variant="is-secondary" />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end bg-gradient-to-b from-purple-600 to-purple-100 w-full flex-1 relative">
          <Image src={Hero} alt="man on laptop" fill className="w-full" />
        </div>
      </section>
      <section>
        <SimpleSteps />
      </section>
      <section className="flex flex-col-reverse lg:flex-row min-h-screen w-full bg-[#FFF9F0]">
        <div className="flex-1 p-12 flex flex-col items-center justify-center relative">
          <div className="max-w-lg z-10 ">
            <p className="font-bold text-6xl leading-snug mb-8">
              Why you’ll love using HeyHubble.
            </p>
            <ul className="">
              <li className="flex flex-row items-center mb-4">
                <div className="flex-1">
                  <BiBadgeCheck className="w-8 h-8 inline mr-2 text-purple-600" />
                </div>
                <p>
                  It’s 100% free for you to use and you can make as many
                  requests as you want.
                </p>
              </li>
              <li className="flex flex-row items-center mb-4">
                <div className="flex-1">
                  <BiBadgeCheck className="w-8 h-8 inline mr-2 text-purple-600" />
                </div>
                <p>
                  Get your own Customer Success Manager that will help you
                  connect with the right providers for you.
                </p>
              </li>
              <li className="flex flex-row items-center mb-4">
                <div className="flex-1">
                  <BiBadgeCheck className="w-8 h-8 inline mr-2 text-purple-600" />
                </div>
                <p>
                  Only get matched with trusted and vetted providers who have
                  capacity.
                </p>
              </li>
              <li className="flex flex-row items-center mb-4">
                <div className="flex-1">
                  <BiBadgeCheck className="w-8 h-8 inline mr-2 text-purple-600" />
                </div>
                <p>
                  You don’t need to worry about spending hours researching and
                  calling providers. We do all the work for you.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row justify-end bg-gradient-to-b from-purple-600 to-purple-100 w-full flex-1 relative">
          <div>hello</div>
        </div>
      </section>
    </div>
  );
};

export default Participants;
