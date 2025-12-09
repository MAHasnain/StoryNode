"use client";
import {
  Button,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Label,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useState } from "react";
// import { HiEnvelope } from "react-icons/hi2";
// import React from "react";
import { FooterComp, Header } from "../../components";
import { Link } from "react-router";

export const Contact = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Header />

      <main className="p-10 max-w-4xl mx-auto h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-4">
          We'd love to hear from you! Whether you have questions, feedback, or
          just want to say hello, feel free to reach out to us.
        </p>
        <p className="text-lg mb-4">
          You can contact us via email at
          <Link
            to="mailto:mah@gmail.com"
            className="text-fg-brand hover:underline"
          ></Link>{" "}
          {"mah@gmail.com"} or through our social media channels.
        </p>
        <p className="text-lg mb-4">
          Our team is dedicated to providing you with the best experience
          possible, so don't hesitate to get in touch!
        </p>
      </main>

      <div className="flex min-h-[50vh] items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>Show contact form</Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose}>
        <DrawerHeader title="CONTACT US" />
        <DrawerItems>
          <form action="#">
            <div className="mb-6 mt-3">
              <Label htmlFor="email" className="mb-2 block">
                Your email
              </Label>
              <TextInput
                id="email"
                name="email"
                placeholder="name@company.com"
                type="email"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="subject" className="mb-2 block">
                Subject
              </Label>
              <TextInput
                id="subject"
                name="subject"
                placeholder="Let us know how we can help you"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="message" className="mb-2 block">
                Your message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={4}
              />
            </div>
            <div className="mb-6">
              <Button type="submit" className="w-full">
                Send message
              </Button>
            </div>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <a href="mailto:info@company.com" className="hover:underline">
                info@company.com
              </a>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <a href="tel:2124567890" className="hover:underline">
                212-456-7890
              </a>
            </p>
          </form>
        </DrawerItems>
      </Drawer>

      <FooterComp />
    </>
  );
};
