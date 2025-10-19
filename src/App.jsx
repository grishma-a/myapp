import { HashRouter } from 'react-router-dom';

// Replace BrowserRouter with HashRouter
ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
);