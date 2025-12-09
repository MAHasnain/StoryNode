import React from "react";
import { Header } from "../../components/index";
import { FooterComp } from "../../components/index";

export const About = () => {
  return (
    <>
      <Header />

      <main className="p-10 max-w-4xl mx-auto h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold mb-6">About StoryNode</h1>
        <p className="text-lg mb-4">
          StoryNode is a platform dedicated to sharing stories that inspire,
          educate, and entertain. Our mission is to provide a space where
          writers can connect with readers and share their unique voices.
        </p>
        <p className="text-lg mb-4">
          Founded in 2023, StoryNode has quickly grown into a vibrant community
          of storytellers from around the world. We believe in the power of
          stories to bring people together and foster understanding.
        </p>
        <p className="text-lg mb-4">
          Whether you're a seasoned writer or just starting out, StoryNode
          welcomes you to join our community and share your stories with the
          world.
        </p>
      </main>

      <FooterComp />
    </>
  );
};
