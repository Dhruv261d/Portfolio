import React from 'react';
import gsap from 'gsap';
import { Navbar, Welcome, Dock } from '#components';
import { Draggable } from 'gsap/Draggable'
import { Contact, Finder, ImageWindowContent, Resume, Safari, Terminal, TextFile } from '#windows';
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <TextFile />
      <ImageWindowContent />
      <Contact />
    </main>
  );
};

export default App;