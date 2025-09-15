// App.js
import React from 'react';

function App() {

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <nav>
        <button onClick={() => scrollToSection(home)}>Home</button>
        <button onClick={() => scrollToSection(about)}>About Me</button>
        <button onClick={() => scrollToSection(project)}>Projects</button>
      </nav>
      {/* ... section components with refs */}
    </div>
  );
}

export default App;