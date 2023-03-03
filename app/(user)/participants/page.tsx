import { Button, SimpleSteps } from "@/components";
import GirlPlaying from "@/public/participants/girlPlaying.jpeg";
import Hero from "@/public/participants/participantHero.jpeg";
import Smiles from "@/public/participants/smiles.jpeg";
import Image from "next/image";
import React from "react";
import { BiBadgeCheck } from "react-icons/bi";
const Participants = () => {
  return (
    <div>
      <section className="flex flex-col-reverse lg:flex-row  w-full bg-[#FFF9F0]">
        <div className="flex-1 py-24 px-4 flex flex-col items-center justify-center relative">
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
        <div className="bg-[#FFF9F0] w-full flex-1 relative flex items-center justify-center">
          <Image
            src={Hero}
            alt="man on laptop"
            width={600}
            height={600}
            className="rounded-xl shadow"
          />
        </div>
      </section>
      <section className='py-24'>
        <SimpleSteps />
      </section>
      <section className="flex flex-col-reverse lg:flex-row w-full bg-purple-100">
        <div className="bg-purple-100 w-full flex-1 relative flex items-center justify-center">
          <Image
            src={Smiles}
            alt="man on laptop"
            width={600}
            height={600}
            className="rounded-xl shadow"
          />
        </div>
        <div className="flex-1 py-24 flex flex-col items-center justify-center relative">
          <div className="max-w-lg z-10 ">
            <p className="font-bold text-4xl leading-snug mb-8">
              Why you’ll love using HeyHubble.
            </p>
            <p className="mb-4">
              Finding a service provider is a big deal, because they will become
              a big part of your life. You can be as specific as you need in
              your request. We’ll do everything we can to find exactly the right
              people to help, and we’ll only ever recommend people that we
              trust.
            </p>
            <p>
              Some services we can help you connect with include Occupational
              Therapy, Physiotherapy, Speech Pathology, Speech Pathology for
              Autism, Support Services and Therapists for Autism, and many more.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col-reverse lg:flex-row  w-full bg-[#FFF9F0]">
        <div className="flex-1 p-12 flex flex-col items-center justify-center relative ">
          <div className="max-w-lg z-10 ">
            <p className="font-bold text-4xl leading-snug mb-8">
              You deserve services and supports that perfectly align to your
              life.
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
        <div className="bg-[#FFF9F0] w-full flex-1 py-24 relative flex items-center justify-center">
          <Image
            src={GirlPlaying}
            alt="man on laptop"
            width={600}
            height={600}
            className="rounded-xl shadow"
          />
        </div>
      </section>
      <section className="mb-12">
        <div className="w-full bg-[#53E6CC] text-slate-900">
          <div className="flex flex-col items-center justify-center h-full py-12">
            <h1 className="text-4xl font-bold mb-4">
              Join up for free in just a few minutes.
            </h1>
            <p>
              Whether you are an NDIS participant, or a service provider, our
              friendly team is happy to help you!
            </p>
            <div className="flex flex-col md:flex-row mt-8">
              <Button
                label="Get Started"
                variant="is-primary"
                className="mr-4"
              />
              <Button label="Request a service" variant="is-primary" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Participants;
