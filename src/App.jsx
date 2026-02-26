import React from 'react';
import gsap from 'gsap';
import { Navbar, Welcome, Dock, Home } from '#components';
import { Draggable } from 'gsap/Draggable'
import { Contact, Finder, ImageWindowContent, Photos, Resume, Safari, Terminal, TextFile } from '#windows';
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
      <Photos />
      <Home/>
    </main>
  );
};

export default App;