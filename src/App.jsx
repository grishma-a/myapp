import './App.css'
import React, { useState } from 'react';

function MyButton() {
  return (
    <button>I'm grishi button</button>
  );
}
//export default MyButton;
//The export default keywords specify the main component in the file.
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
//export default AboutPage;