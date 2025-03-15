import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ScrollTop } from './components/ScrollTop.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollTop /> {/* Scroll to top on route change */}
    <App /> {/* Your main application component */}
  </BrowserRouter>
);